const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  webpack: (config, { dev }) => {
    // Keep existing alias configuration
    config.resolve.alias['@'] = path.resolve(__dirname);
    
    // Add extension resolution
    config.resolve.extensions = ['.js', '.jsx', ...config.resolve.extensions];
    
    // Keep development performance settings
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