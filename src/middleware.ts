import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, importSPKI } from 'jose';

const publicKeyPEM = "-----BEGIN PUBLIC KEY-----\
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEArwxqny8TJK1rayJfVbaF\
PfLHIwvancL1bDrsBaCJTxiSgq4d38OxRrH5XDAkSZ5gFvEOI2l9LdVDTOTdVBlw\
r27/t8N6zObJkVcX+RBn+VjnZzx3o+Eid6PhQOVp6XvNFs/bM4AF5ZkrJh+0lEwE\
ugDn/7QgwUwl7XwKfJHkIDsB/38g6rxKeN9hIoeEVLc7BbQCCVy9OWvm/NxzBgo/\
blcc16MXjg+JVGDN2QMsyPwQRl+N/mih6zZPBMvs3AVG+X8Shj7ZEYYP2kLE4cM9\
0ZrcFl0YRhotbBK4b6/20Nu7A4RZaDyE8ZomuWAxFVH96iCM0fgnSBvwlRmPGeTT\
/3OkMpoXzuiZybYB53PTHgN2Wkt6CrRss+AJnw3WvMfQbKYICFI55pyrJnYszm4w\
HLebn9WTtUpy0fcke6h8LTylWkiQWfX9pMPP7ootryC6ScPhdZObe/R1ypMUwlrE\
X4mLgazVMoZSNOqjCwjdSj92DMX98sDRXMM1G1XnPSiA1otXsauZokVMMWwthvP0\
eMIlUshN+kZV/UVLW2GXB71yqXIZ9Ru+YZVfVyY0qtUNingkgJ1ooWOy3/fjILCL\
AubCF9FX4rqkdFEHDe/5qI65OiCmxxT5ipENraeszIwwbdXmSgRcEQUkPoLy6XHO\
TDeFddgWCs/pQkdvqTPVR18CAwEAAQ==\
-----END PUBLIC KEY-----";

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
    // Converte para um CryptoKey
    const publicKey = await importSPKI(publicKeyPEM, 'RS256');
    
    const { payload } = await jwtVerify(token!, publicKey, {
      algorithms: ['RS256'],
    });

    tokenIsValid = true;
    permissions = payload.permissions || [];
    isAdmin = payload.isAdmin
  } catch (ex) {
    console.error("Error: " + ex);
    tokenIsValid = false;
  }

  console.log(token, tokenIsValid, isAdmin);
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