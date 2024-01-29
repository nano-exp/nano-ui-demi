import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import markdown from 'vite-plugin-md'
import markdownItPrism from 'markdown-it-prism'

// noinspection JSUnresolvedReference
const base = process.env.VITE_BASE || '/'

export default defineConfig({
    base,
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/]
        }),
        vueJsx(),
        markdown({
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
            },
            markdownItSetup(md) {
                md?.use(markdownItPrism)
            },
        }),
    ],
})
