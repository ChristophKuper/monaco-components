import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'monaco-editor-react',
            fileName: () => 'index.js',
            formats: ['es']
        },
        outDir: 'bundle',
        assetsDir: 'bundle/assets',
        emptyOutDir: false,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                name: 'monaco-editor-react',
                exports: 'named',
                sourcemap: false,
                assetFileNames: (assetInfo) => {
                    return `assets/${assetInfo.name}`;
                }
            }
        }
    },
    resolve: {
        alias: {
            path: 'path-browserify'
        }
    },
    assetsInclude: ['**/*.wasm']
});
