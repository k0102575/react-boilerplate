const path = require('path');

module.exports = {
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
