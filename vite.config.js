// vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	// если нужно деплоить не в корень, можно указать base: '/subpath/'
	base: '/',
	root: '.', // корень проекта

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), // импорт вида "@/utils/helpers"
		},
	},

	server: {
		port: 5173,
		open: true, // открыть браузер при запуске
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
		sourcemap: true, // удобно для отладки
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
		},
	},
});
