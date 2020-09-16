<template>
  <div class="dropdown">
    <slot name="dropdown-button" />
    <div class="dropdown-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {}

</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  z-index: 2;

  &:hover {
    .dropdown-content {
      display: block;
    }
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  // padding: 15px;
  width: 100%;
  height: 100%;
  background-color: $button;
  text-align: center;
  z-index: 2;
}

</style>
