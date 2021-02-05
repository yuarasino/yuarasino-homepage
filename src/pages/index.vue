<template lang="pug">
div.SiteIndex
  h1 {{ title }}
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

<style lang="stylus">
.SiteIndex
  background-color: $backgroundColor
</style>
