<template>
  <router-link :to="getTo()">
    <slot />
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LocalizedLink extends Vue  {
  @Prop({ type: String, required: true })
  to: string

  getTo() {
    const locale = this.$route.params.locale

    // we strip leading and trailing slashes and prefix
    // the current locale
    return `/${locale}/${this.to.replace(/^\/|\/$/g, "")}`
  }
}
</script>