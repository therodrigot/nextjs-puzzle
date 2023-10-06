/** @type {import('next').NextConfig} */

const { loadEnvConfig } = require("@next/env");
loadEnvConfig(".")

isProd = process.env.ENV != "Local";
isProd = true;

const nextConfig = {
	output: 'export',
	assetPrefix: isProd ? "/puzzle" : ""
}

module.exports = nextConfig
