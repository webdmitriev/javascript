module.exports = {
	entry: './bundle/script.js',
	output: {
		filename: 'bundle.js'
	},
	mode: 'development',
	watch: true,
	watchOptions: {
		aggregateTimeout: 100
	}
};