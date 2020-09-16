<template>
  <LocalizedLink
    :to="to"
    class="nav-button"
    active-class="nav-button--active"
  >
    <slot />
  </LocalizedLink>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LocalizedLink from '@/components/LocalizedLink.vue'

@Component({
    components: { LocalizedLink }
})
export default class NavButton extends Vue {
    @Prop({ type: String, required: true })
    to: string
}
</script>

<style lang="scss" scoped>

// $tablet-small: 768px; // Screen

.nav-button {
  background-color: $button;
  color: $button-text;
  text-transform: uppercase;
  font: 400 2.2rem $oswald-font-family;
  padding: 11px;
  text-align: center;
  text-decoration: none;
  flex: 1 1 20%;
  position: relative;

  &:after {
    content: '';
    width: 2px;
    background-color: $button-border;
    box-shadow: inset -2px 0px 0px -1px #da6c42;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }

  &:last-child:after {
    content: none;
  }

  &--active, &.router-link-active, &:hover {
    background-color: $button-active;
    text-decoration: underline;
  }

/*    @media screen and (max-width: $tablet-small) {
        flex: none;
    }*/
}
</style>
