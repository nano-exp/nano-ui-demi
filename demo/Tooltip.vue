<script setup>
import Tooltip from '../src/components/Tooltip.vue'
</script>

<template>
  <Tooltip placement="top">
    <template #reference>
      <span class="trigger">Click Trigger</span>
    </template>
    <template #default>
      <div>Tooltip Content</div>
    </template>
  </Tooltip>
</template>

<style scoped>
.trigger {
  padding: .125rem .25rem;
  border: 1px dashed #111;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
}
</style>
