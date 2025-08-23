import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/**",
			},
		],
	},
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(/^node:/, (resource:any) => {
				resource.request = resource.request.replace(/^node:/, "");
			})
		);

		// Polyfills / fallbacks for Node core modules
		config.resolve.fallback = {
			...config.resolve.fallback,
			crypto: require.resolve("crypto-browserify"),
			buffer: require.resolve("buffer"),
			stream: require.resolve("stream-browserify"),
			util: require.resolve("util"),
			process: require.resolve("process/browser"),
		};

		return config;
	},
};

export default nextConfig;
