<script setup>
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue-demi'
import { autoUpdate, computePosition, arrow, offset, flip } from '@floating-ui/dom'

const props = defineProps({
  placement: String,
})

const referenceRef = ref()
const floatingRef = ref()
const arrowRef = ref()
const showFloating = shallowRef(false)
const cleanup = shallowRef()

function createTooltip() {
  return autoUpdate(referenceRef.value, floatingRef.value, async () => {
    const arrowLen = arrowRef.value.offsetWidth
    const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
    const { x, y, middlewareData, placement } = await computePosition(referenceRef.value, floatingRef.value, {
      placement: props.placement,
      middleware: [flip(), offset(floatingOffset), arrow({ element: arrowRef.value })]
    })
    Object.assign(floatingRef.value.style, { left: `${x}px`, top: `${y}px`, })
    const side = placement.split('-')[0];
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right'
    }[side]
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      Object.assign(arrowRef.value.style, {
        left: x != null ? `${x}px` : '',
        top: y != null ? `${y}px` : '',
        right: '',
        bottom: '',
        [staticSide]: `${-arrowLen / 2}px`,
        transform: 'rotate(45deg)',
      });
    }
  })
}

onMounted(async () => {
  cleanup.value = createTooltip()
})

onBeforeUnmount(() => {
  cleanup.value?.()
})
</script>

<template>
  <div class="n-tooltip">
    <div @click="showFloating = !showFloating" class="reference" ref="referenceRef">
      <slot name="reference"></slot>
    </div>
    <Teleport to="body">
      <div v-show="showFloating" class="floating" ref="floatingRef">
        <div class="tooltip-container">
          <slot name="default"></slot>
        </div>
        <div ref="arrowRef" class="arrow"></div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>

.n-tooltip {
  display: inline-block;
  position: relative;
}

.reference {
  display: inline-block;
  position: relative;
}

.floating {
  display: block;
  position: absolute;
  z-index: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 9px 28px 8px rgba(0, 0, 0, .05), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08);
}

.tooltip-container {
  padding: .5rem 1rem;
  border-radius: 2px;
  background-color: #fff;
}

.arrow {
  position: absolute;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  z-index: -1;
  pointer-events: none;
  border: 1px solid #ddd;
  background-color: #fff;
}

</style>
