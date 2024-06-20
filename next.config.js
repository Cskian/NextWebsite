/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'i.travelapi.com', 'q-xx.bstatic.com',
            'photos.hotelbeds.com', 'pix8.agoda.net',
            'contents.abreuonline.com', 'www.tboholidays.com',
            'us.dotwconnect.com', 'pix6.agoda.net',
            'd1i3enf1i5tb1f.cloudfront.net'
        ],
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: ['i.travelapi.com','q-xx.bstatic.com'],
        //     port: '',
        //     pathname: ['/hotels/**','/xdata/images/hotel/max500/**'],
        //   },
        // ],
    },
}

module.exports = nextConfig



