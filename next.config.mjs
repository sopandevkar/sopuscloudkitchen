/** @type {import('next').NextConfig} */
const nextConfig = () => {
  
  return {
    output: 'export',
    basePath: '',
    assetPrefix: '',
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig();
