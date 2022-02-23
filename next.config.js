/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,

  eslint: {
    dirs: ['src'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],

    domains: [
      'res.cloudinary.com',
      'i.scdn.co',
      'pbs.twimg.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'assets3.thrillist.com',
      'rdl.ink',
      'ia.net',
      'railway.app',
      'static.airtable.com',
      'up.raindrop.io',
      'transform.tools',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
