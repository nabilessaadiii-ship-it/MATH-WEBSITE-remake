/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'mathmaroc.org' },
      { protocol: 'https', hostname: 'www.um6p.ma' },
      { protocol: 'https', hostname: 'www.ocpgroup.ma' },
      { protocol: 'https', hostname: 'www.cdg.ma' },
      { protocol: 'https', hostname: 'www.lyceexcellence.ma' },
    ],
    // If you need to load images from many hosts in dev, consider configuring "allowedDevOrigins"
  },
}

export default nextConfig
