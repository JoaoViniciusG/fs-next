import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, importSPKI } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;
  let tokenIsValid = null;
  let isAdmin: any = false;
  let permissions: any = [];

  const isAuthPage = pathname === '/login';
  const isProtectedRoute = pathname.startsWith('/interno');

  console.log(pathname);
  try {
    const publicKeyPEM = process.env.PUBLIC_KEY?.replace(/\\n/g, '\n');

    if (!publicKeyPEM) throw new Error('PUBLIC_KEY não definida');
    console.log("KEY: " + publicKeyPEM)
    // Converte para um CryptoKey
    const publicKey = await importSPKI(publicKeyPEM, 'RS256');
    console.log("KEY convertida: " + publicKey);
    const { payload } = await jwtVerify(token!, publicKey, {
      algorithms: ['RS256'],
    });

    tokenIsValid = true;
    permissions = payload.permissions || [];
    isAdmin = payload.isAdmin
  } catch (ex) {
    tokenIsValid = false;
  }

  if (!tokenIsValid && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  if (tokenIsValid && isAuthPage) {
    return NextResponse.redirect(new URL('/interno', request.url));
  }
  
  const cleanPath = pathname.replace('/interno', '');

  if (!isAdmin &&
      !pathname.includes("/interno/conta/") &&
      isProtectedRoute && 
      !permissions.includes(cleanPath)) {
    console.log("Acesso negado")
    return NextResponse.redirect(new URL('/forbidden', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/interno/:path*', '/login'],
};