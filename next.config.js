const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  webpack: (config, { dev }) => {
    // 既存のエイリアス設定を保持
    config.resolve.alias['@'] = path.resolve(__dirname);
    
    // 開発時のパフォーマンス設定を追加
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