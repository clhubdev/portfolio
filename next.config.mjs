/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'clement-hubert.fr' }],
                destination: 'https://www.clement-hubert.fr/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
