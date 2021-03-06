const isProd = process.env.NODE_ENV === 'production';
const repositoryName = process.env.REPOSITORY_NAME;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Fix hosting Next.js on GitHub Pages
    // https://github.com/vercel/next.js/issues/3335
    basePath: isProd ? `/${repositoryName}` : '',
    env: {
        REPOSITORY_NAME: repositoryName,
    },
    experimental: {
        images: {
            unoptimized: true,
        },
    },
};

module.exports = nextConfig;
