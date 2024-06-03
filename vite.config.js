// vite.config.js
import { defineConfig } from 'vite';
import vitePlugin from 'vite-plugin-feature';

export default defineConfig({
	plugins: [vitePlugin()],
	build: {
		outDir: 'dist'
	}
});
