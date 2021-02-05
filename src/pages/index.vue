<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    const title = ref("yuarasino-homepage")

    return { title }
  },
})
</script>
