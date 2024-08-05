/** @type {import('next').NextConfig} */

module.exports = {
  // todo: this need to set to true or remove it as default is true. set false as chart was giving error when first render
  // https://github.com/apexcharts/apexcharts.js/issues/3652
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/:path*',
  //       headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }]
  //     }
  //   ];
  // },

  // async headers() {
  //   return [
  //     {
  //       source: '/api/v1/:slug',
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: 'https://auth.smashing.one/' // 设置你的来源
  //           // value: 'https://api.smashing.one/' // 设置你的来源
  //         },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET, POST, PUT, DELETE, OPTIONS'
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value: 'Content-Type, Authorization'
  //         }
  //       ]
  //     }
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: '/connect/:path*',
        destination: `https://auth.smashing.one/:path*`
      },
      {
        source: '/api/:path*',
        destination: `https://api.smashing.one/:path*`
      }
    ];
  },
  reactStrictMode: false,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  },
  images: {
    domains: ['flagcdn.com']
  },
  env: {
    REACT_APP_VERSION: process.env.REACT_APP_VERSION,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_TOKEN_URL: process.env.REACT_APP_TOKEN_URL,

    REACT_APP_MAPBOX_ACCESS_TOKEN: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,

    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

    REACT_APP_AWS_POOL_ID: process.env.REACT_APP_AWS_POOL_ID,
    REACT_APP_AWS_APP_CLIENT_ID: process.env.REACT_APP_AWS_APP_CLIENT_ID,

    REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN
  }
};
