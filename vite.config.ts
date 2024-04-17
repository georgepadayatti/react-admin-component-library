import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as packageJson from './package.json';
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: resolve('src', 'index.ts'),
            name: 'react-admin-component-library',
            formats: ['es', 'umd'],
            fileName: (format) => `react-admin-component-library.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react-admin": "ReactAdmin"
                },
            },
        },
        //Generates sourcemaps for the built files,
        //aiding in debugging.
        sourcemap: true,
        //Clears the output directory before building.
        emptyOutDir: true,
    },
});
