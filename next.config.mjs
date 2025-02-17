/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/interno/endereco/cadastrar",
        destination: "/interno/endereco"
      },
      {
        source: "/interno/endereco/alterar",
        destination: "/interno/endereco"
      },
      {
        source: "/interno/endereco/visualizar",
        destination: "/interno/endereco"
      }
    ]
  }
};

export default nextConfig;
