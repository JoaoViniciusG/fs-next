/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: "/interno/endereco/cadastrar/:opcao",
        destination: "/interno/endereco/:opcao"
      },
      {
        source: "/interno/endereco/alterar/:opcao",
        destination: "/interno/endereco/:opcao"
      },
      {
        source: "/interno/endereco/visualizar/:opcao",
        destination: "/interno/endereco/:opcao"
      }
    ]
  }
};

export default nextConfig;
