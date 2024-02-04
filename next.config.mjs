/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.ibb.co",
            },
            {
                hostname: "i.gifer.com",
            },
        ],
    },
};

export default nextConfig;
