// svelte.config.js
import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    kit: {
        // настройки вашего проекта
    },
    // Укажите каталог маршрутов
    files: {
        routes: 'src/routes'
    },
    plugins: [
        svelte()
    ]
});
