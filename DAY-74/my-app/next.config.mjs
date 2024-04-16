/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static1.makeuseofimages.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
