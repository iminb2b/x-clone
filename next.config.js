/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: (config, options) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    // const fileLoaderUse = {
    //   loader: require.resolve('file-loader'),
    //   options: {
    //     name: '[name]-[hash].[ext]',
    //     // Assets are stored in chunks/assets because Next.js server applies
    //     // immutable Cache-Control headers for chunks directory. This is a
    //     // minor hack required until Next.js adds the ability to define
    //     // custom headers. The alternative is to use a custom server [2],
    //     // which adds complexity and attack surface.
    //     //
    //     // [1]: https://github.com/zeit/next.js/blob/v9.2.0/packages/next/next-server/server/next-server.ts#L330
    //     // [2]: https://nextjs.org/docs/advanced-features/custom-server
    //     outputPath: `${options.isServer ? '../' : ''}static/chunks/assets`,
    //     publicPath: '/_next/static/chunks/assets',
    //   },
    // };

    // config.module.rules.push(
    //   {
    //     test: /(\.(eot|gif|ico|jpeg|jpg|png|svg|ttf|woff|woff2))|(d3\.min\.js|datamaps\.irn\.min\.js|topojson\.min\.js|modernizr-passiveeventlisteners-3\.6\.0\.min\.js)$/,
    //     use: [
    //       fileLoaderUse,
    //     ],
    //   },
    // );


    if (config.optimization.splitChunks) {
      config.optimization.splitChunks.cacheGroups.stringsEn = {
        chunks: "all",
        name: "stringsEn",
        test: /src\/strings\/stringsEn.*/,
        enforce: true,
      };

      config.optimization.splitChunks.cacheGroups.stringsFa = {
        chunks: "all",
        name: "stringsFa",
        test: /src\/strings\/stringsFa.*/,
        enforce: true,
      };
    }

    return config;
  },


}

module.exports = nextConfig
