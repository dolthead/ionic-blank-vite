import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    define: {
        'process.env': {},
    },
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, './src')
        },
    },
	plugins: [ 
		vue(),
	],
	server: {
		port: 8100,
        open: true,
	},
});
