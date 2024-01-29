import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'

// noinspection JSUnresolvedReference
const base = process.env.VITE_BASE || '/'

export default defineConfig({
    base,
    plugins: [
        vue(),
        vueJsx(),
    ],
})
