import babel from 'rollup-plugin-babel'

export default {
	entry: './resolveIndent.js',
	dest: './index.js',
	format: 'cjs',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
}
