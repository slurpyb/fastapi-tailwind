module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		postcss: "./postcss.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
            html: "./src/html",
			css: "./src/css",
			js: "./src/js",
			img: "./src/img"
		},
		dist: {
			base: "./dist",
            html: "./dist/html",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/img"
		}
	}
}