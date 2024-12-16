const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // unoptimized: trueを削除
  },
  webpack: (config, { dev }) => {
    // 残りの設定は同じ
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