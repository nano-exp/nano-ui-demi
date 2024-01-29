import { css } from '@emotion/css'
import { defineComponent, isVue2 } from 'vue-demi'

const ClassName = css`
    height: 2rem;
    border: 1px solid #111;
    border-radius: 2px;
    background-color: #fff;
    color: #111;
    transition: all 100ms ease;

    &:hover {
        cursor: pointer;
        background-color: #eee;
    }

    &:active {
        background-color: #ddd;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #fff;
        opacity: .75;
    }
`

export default defineComponent({
    render() {
        const children = isVue2 ? () => this.$scopedSlots.default() : () => this.$slots.default()
        return (
            <button class={ClassName}>
                {children()}
            </button>
        )
    },
})


