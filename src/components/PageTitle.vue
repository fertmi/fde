<template functional>
  <div class="page-title"><span>{{ props.title }}</span></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageTitle extends Vue {
  @Prop({ type: String, required: true })
  title: string
}
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 35px;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: $title;
  }

  >  span {
    color: $title;
    text-transform: uppercase;
    font: 400 2rem $oswald-font-family;
    background-color: $center-bg;
    padding: 0 15px;
    position: relative;
    z-index: 1;
  }
}
</style>