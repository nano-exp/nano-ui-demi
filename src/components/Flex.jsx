import { defineComponent, isVue2 } from 'vue-demi'

export default defineComponent({
    render() {
        const cssVars = {
            display: 'flex',
            gap: '8px 12px',
            flexWrap: 'wrap',
        }
        const children = isVue2 ? () => this.$scopedSlots.default() : () => this.$slots.default()

        return (
            <div style={cssVars}>
                {children()}
            </div>
        )
    },
})
