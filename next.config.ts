/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.lorem.space",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.patioproductsusa.com",
      },
      {
        protocol: "https",
        hostname: "images.patioproductsusa.com/site/common/patio/promos/2023/ppu-phs-hero.png?v1",
      },
      {
        protocol: "https",
        hostname: "sanccms.z14.web.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "sanccms.z14.web.core.windows.net/site/theme/www_patioproductsusa_com/ppu_site_logo.png",
      },
      {
        protocol: "https",
        hostname: "placeholder.svg",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com", // Corrected: removed the image path
      },
    ],
  },
  // reactStrictMode: false
};

export default nextConfig;
