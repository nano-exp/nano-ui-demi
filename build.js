import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

await build({
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    root: 'src',
    plugins: [
        vueJsx(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'NanoUI',
        },
        rollupOptions: {
            external: ['vue', 'vue-demi'],
            output: [{
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, 'src'),
                entryFileNames: '[name].js',
                format: 'es',
                dir: 'dist',
                globals: {
                    vue: 'Vue',
                },
            }],
        },
    },
})

await build({
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    root: 'src',
    plugins: [
        vue2Jsx(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'NanoUI',
        },
        rollupOptions: {
            external: ['vue', 'vue-demi'],
            output: [{
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, 'src'),
                entryFileNames: '[name].js',
                format: 'es',
                dir: 'dist/vue2',
                globals: {
                    vue: 'Vue',
                },
            }],
        },
    },
})
