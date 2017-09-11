const path = require('path');

const SRC_dir = path.join(__dirname, '/client/SRC');
const DIST_dir = path.join(__dirname, '/client/DIST');

module.exports = {
	entry: `${SRC_dir}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_dir
	},
	module: {
		loaders: [{
			test: /\.jsx/,
			include: SRC_dir,
			loader: 'babel-loader',
			query: ['react', 'es2015']
		}]
	}
};