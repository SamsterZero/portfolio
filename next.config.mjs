/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirect() {
        [
            {
                source: '/',
                destination: '/Home',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
