// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione esta seção de 'images'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;