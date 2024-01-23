module.exports = {
    trailingSlash: true,
    staticPageGenerationTimeout: 1000,
    publicRuntimeConfig: {
        // Will be available on both server and client
        logo: 'https://res.cloudinary.com/dpqnsekyx/image/upload/v1644947391/logo_wmmewc.webp',
        blog_page_size: 9,
        casinos_page_size:5,
        games_page_size:12
    },
    images: {
        domains: [
            'admin.transition.llc',
            'res.cloudinary.com'
        ],
    },
}

