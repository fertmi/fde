<template>
  <div class="home">
    <Header />
    <div class="home__main container">
      <div @click.stop="toggleMenu" class="home__burger">
        <BurgerButton :is-open="showMenu" />
      </div>
      <Navbar class="home__navbar" :class="{ 'show' : showMenu }" v-click-outside="closeMenu" />

      <img v-if="showMainImg" src="../assets/img/main.png" class="main-img" />

      <div class="home__content">
        <div class="home__main-content">
          <router-view />
        </div>
        <Sidebar class="home__aside" />
      </div>
    </div>
    <Footer />
  </div>
</template>
<style>

</style>
<script>
import { Vue } from 'vue-property-decorator';
import vClickOutside from 'v-click-outside'
import Navbar from '@/components/Navbar.vue';
import BurgerButton from '@/components/BurgerButton.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

Vue.use(vClickOutside)

export default {
  name: 'home',
  components: { Navbar, BurgerButton, Sidebar, Header, Footer },
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    showMainImg() {
      const locale = this.$route.params.locale
      const path = this.$route.path
      const pagesWithImg = [`/${locale}`, `/${locale}/`, `/${locale}/main`, `/${locale}/main/`]

      return pagesWithImg.includes(path)
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    }
  }
}
</script>

<style lang="scss">

.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $main-bg;

  &__burger {
    position: fixed;
    top: 25px;
    left: 15px;
    z-index: 1;
    display: none;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin: 25px 25px 15px;
  }

  &__main-content {
    width: 100%;
  }

  &__aside {
    min-width: 327px;
    margin-left: 25px;
    margin-top: 13px;
  }

  &__main {
    flex: 1 0 auto;
    background-color: $center-bg;
  }

  .main-img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  footer {
    flex: 0 0 auto;
  }
}

</style>
