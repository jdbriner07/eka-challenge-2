const path = require('path');

const SRC_dir = path.join(__dirname, '/client/SRC');
const DIST_dir = path.join(__dirname, '/client/DIST');

module.exports = {
	entry: `${SRC_dir}/index.js`,
	output: {
		filename: 'bundle.js',
		path: DIST_dir
	},
	module: {
		loaders: [{
			test: /\.js/,
			include: SRC_dir,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	}
};