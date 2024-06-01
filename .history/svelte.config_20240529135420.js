// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;

// svelte.config.js
// import { defineConfig } from 'vite';
// import svelte from '@sveltejs/vite-plugin-svelte';

// export default defineConfig({
// 	kit: {
// 		// настройки вашего проекта
// 	},
// 	// Укажите каталог маршрутов
// 	files: {
// 		routes: 'src/routes'
// 	},
// 	plugins: [svelte()]
// });
// svelte.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto'; // импортируем адаптер

export default defineConfig({
	kit: {
		// настройки вашего проекта
		adapter: adapter() // используем адаптер-auto
	},
	// Укажите каталог маршрутов
	// Если ваш каталог маршрутов находится в src/custom-routes
	// Замените 'src/routes' на 'src/custom-routes'
	files: {
		routes: 'src/routes'
	},
	plugins: [svelte()]
});
