const path = require( 'path' );
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require("compression-webpack-plugin");

const config = {
    mode: 'production',
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
		{
			test: /\.worker\.(c|m)?js$/i,
			loader: 'worker-loader',
			options: {
				esModule: false,
			}
		}
        ]
    }
}

const app = Object.assign({}, config, {
	name: 'hydra_threejs_hack',
	entry: './src/index.ts',
        plugins: [new CompressionPlugin()],
	// output bundles (location)
	output: {
		path: path.resolve( __dirname, 'dist'),
		filename: 'hydra-three.js',
	},

})


module.exports = [app]
