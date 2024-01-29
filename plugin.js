import * as NanoUI from './src/index.js'

export default {
    install(app) {
        for (const c of Object.entries(NanoUI)) {
            app.component(...c)
        }
    }
}
