// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

const aliases = {
  '@': './src',
  '@components': './src/components',
  '@config': './src/config',
  '@store': './src/store',
  '@pages': './src/pages',
  '@services': './src/services',
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
