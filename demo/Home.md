# NanoUI

Hi👋, this is NanoUI.

### Install

```sh
npm install @nano-exp/ui
# or
pnpm install @nano-exp/ui
```

### Use NanoUI

```html
<!--Vue SFC-->
<script setup>
    import { NButton } from '@nano-exp/ui'
    // import { NButton } from '@nano-exp/ui/vue2' // for Vue 2 app
</script>

<template>
    <NButton>Hello NanoUI</NButton>
</template>
```

---

### Components

#### Button

<NFlex>
<NButton>Button</NButton>
<NButton disabled>Disabled Button</NButton>
</NFlex>

#### Tooltip

<script setup>
import Tooltip from './Tooltip.vue'
</script>

<Tooltip/>

---

### Example

- Vue 2: [Code](https://github.com/nano-exp/nano-ui/tree/main/example/vue2), [Preview](https://nano-exp.github.io/nano-ui/example/vue2/), 
- Vue 3: [Code](https://github.com/nano-exp/nano-ui/tree/main/example/vue3), [Preview](https://nano-exp.github.io/nano-ui/example/vue3/), 

---

- GitHub: https://github.com/nano-exp/nano-ui
- NPM: https://www.npmjs.com/package/@nano-exp/ui
