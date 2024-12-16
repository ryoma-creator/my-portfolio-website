const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'], // この行を追加
  },
  webpack: (config, { dev }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.extensions = ['.js', '.jsx', ...config.resolve.extensions];
    
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};