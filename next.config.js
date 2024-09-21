const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  
};
