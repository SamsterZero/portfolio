/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirect() {
        [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
