import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	base: '/',
	root: '.',

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},

	server: {
		port: 5173,
		open: true,
		strictPort: true,
		// пример прокси для бэка:
		// proxy: {
		//   '/api': {
		//     target: 'http://localhost:3000',
		//     changeOrigin: true,
		//   },
		// },
	},

	build: {
		outDir: 'dist',
		sourcemap: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
		},
	},
});
