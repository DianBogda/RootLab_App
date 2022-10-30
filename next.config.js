/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.banderasdelmundo.net',
        port: ''
      },      
      {
        protocol: 'https',
        hostname: 'comidaschilenas.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cocinalocal.cl',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'recetasdesopaipillas.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'img-global.cpcdn.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cocinachilena.cl',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'www.franciscosaavedra.cl',
        port: ''
      }
    ],
  },

}

module.exports = nextConfig
