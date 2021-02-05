<template lang="pug">
main.SiteMain
  slot
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({})
</script>

<style lang="stylus">
.SiteMain
  background-color: $backgroundColor
</style>
