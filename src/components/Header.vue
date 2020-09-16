<template>
  <header class="header">
    <div class="header__wrap container">
      <img :src="logoSrc" class="header__logo" />
      <LocaleSwitcher class="header__switcher" />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

@Component({
    components: { LocaleSwitcher }
})
export default class Header extends Vue {
  get locale() {
    return this.$route.params.locale
  }

  get logoSrc() {
    return require(`@/assets/img/logo-${this.locale}.png`)
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: url("../assets/img/header.jpg") no-repeat center;
  height: 485px;

  &__wrap {
    position: relative;
    height: 100%;
  }

  &__logo {
    position: absolute;
    top: 0;
    left: 55px;
  }

  &__switcher {
    position: absolute;
    bottom: 25px;
    left: 0;
  }
}

</style>
