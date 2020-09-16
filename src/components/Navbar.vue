<template>
  <div class="navbar">
    <Dropdown>
      <NavButton to="/main" slot="dropdown-button" style="display: block">{{ $t('nav.main') }}</NavButton>
      <NavButton to="/events" class="dropdown-button">{{ $t('nav.events') }}</NavButton>
      <NavButton to="/partners" class="dropdown-button">{{ $t('nav.partners') }}</NavButton>
    </Dropdown>
    <NavButton to="/participants">{{ $t('nav.participants') }}</NavButton>
    <Dropdown>
      <NavButton to="/facts" slot="dropdown-button" style="display: block">{{ $t('nav.facts') }}</NavButton>
      <NavButton to="/mass-media" class="dropdown-button">{{ $t('nav.smi') }}</NavButton>
      <NavButton to="/review" class="dropdown-button">{{ $t('nav.review') }}</NavButton>
    </Dropdown>
    <Dropdown>
      <NavButton to="/our-history" slot="dropdown-button" style="display: block">{{ $t('nav.ourHistory') }}</NavButton>
      <NavButton to="/photos" class="dropdown-button">{{ $t('nav.photos') }}</NavButton>
      <NavButton to="/audio" class="dropdown-button">{{ $t('nav.audio') }}</NavButton>
      <NavButton to="/video" class="dropdown-button">{{ $t('nav.video') }}</NavButton>
    </Dropdown>
    <Dropdown>
      <NavButton to="/promoters" slot="dropdown-button" style="display: block;">{{ $t('nav.promoters') }}</NavButton>
      <NavButton to="/contacts" class="dropdown-button">{{ $t('nav.contacts') }}</NavButton>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavButton from '@/components/NavButton.vue';
import Dropdown from "@/components/Dropdown.vue";
import LocalizedLink from "@/components/LocalizedLink.vue";

@Component({
  components: { NavButton, Dropdown, LocalizedLink  }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 25px;

  &:after {
    content: url("../assets/img/golden_line.png");
    position: absolute;
    bottom: -25px;
    left: -6px;
    right: 0;
    overflow: hidden;
  }
}

.dropdown {
  flex: 1 1 20%; // as NavButton
}

.dropdown-button {
  display: block;
  padding-top: 15px;
  border-bottom: 1px solid #c1494f;
  box-shadow: 0 4px 6px rgba(64, 67, 107, 0.34);

  &:after {
    content: none;
  }
}

</style>
