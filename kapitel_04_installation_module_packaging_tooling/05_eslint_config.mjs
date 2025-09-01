// eslint.config.mjs
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/src/safe/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
	},
]);