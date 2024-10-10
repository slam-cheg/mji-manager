import { fileURLToPath } from 'url';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './server/appComponents/index.js',
  output: {
    filename: 'appBuild.js',
    path: path.resolve(__dirname, './server/appData'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json'],
  },
  mode: 'production',
  //devtool: 'source-map', // Для отладки
  optimization: {
    minimize: false, // Отключить минификацию для отладки
    usedExports: false, // Отключить tree shaking
  },
  stats: {
    colors: true,
    reasons: true,
    errors: true,
  },
};
