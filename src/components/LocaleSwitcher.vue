<template>
    <div class="locale-switcher">
        <div v-for="locale in locales" :key="locale.code">
            <div v-if="showLang(locale.code)" class="lang-switcher" @click.prevent="changeLocale(locale.code)">
                <img :src="logoSrc(locale.code)">
                <span class="locale-name">{{ locale.name }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getSupportedLocales } from "@/util/i18n/supported-locales"

@Component({
    data: () => ({ locales: getSupportedLocales() })
})
export default class LocaleSwitcher extends Vue {
    changeLocale(locale) {
        this.$router.push(`/${locale}`)
    }

    logoSrc(locale) {
        return require(`@/assets/img/${locale}.jpg`)
    }

    showLang(selectedLocale) {
        let currentLocale = this.$route.params.locale

        return currentLocale !== selectedLocale
    }
}
</script>

<style lang="scss" scoped>
.lang-switcher {
    display: flex;
    align-items: center;
    border: 2px solid $button;
    background-color: transparent;
    cursor: pointer;
    height: 35px;

    .locale-name {
        font-weight: bold;
        color: white;
        margin: 0 8px;
    }
}


</style>
