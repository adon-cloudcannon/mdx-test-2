import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    output: 'export',
    webpack: (config, options) => {
        config.module.rules.push({
        test: /\.jsx$/,
        use: [
            {
            loader: 'import-glob-keyed'
            },
        ],
        })

        config.resolve.fallback = { fs: false };

        return config
    }
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)