/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        urlImports: ['https://prod-waitlist-widget.s3.us-east-2.amazonaws.com'],
    },
};

export default nextConfig;
