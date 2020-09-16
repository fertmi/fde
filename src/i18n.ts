import Vue from 'vue'
import VueI18n from 'vue-i18n'
import getBrowserLocale from "@/util/i18n/get-browser-locale"
import { supportedLocalesInclude } from "./util/i18n/supported-locales"
import EventBus from "@/EventBus"

Vue.use(VueI18n)

function getStartingLocale() {
    const browserLocale = getBrowserLocale({ countryCodeOnly: true })

    if (supportedLocalesInclude(browserLocale)) {
        return browserLocale
    } else {
        return process.env.VUE_APP_I18N_LOCALE || "ru"
    }
}

// const startingLocale = getStartingLocale()
const startingLocale = "ru"

const i18n = new VueI18n({
    locale: startingLocale,
    fallbackLocale: "ru",
    messages: {}
})

const loadedLanguages = []

export function loadLocaleMessagesAsync(locale: never) {
    EventBus.$emit("i18n-load-start")

    if (loadedLanguages.length > 0 && i18n.locale === locale) {
        EventBus.$emit("i18n-load-complete")
        return Promise.resolve(locale)
    }

    // If the language was already loaded
    if (loadedLanguages.includes(locale)) {
        i18n.locale = locale
        EventBus.$emit("i18n-load-complete")
        return Promise.resolve(locale)
    }

    // If the language hasn't been loaded yet
    return import(
        `@/locales/${locale}.json`
        ).then(messages => {
        i18n.setLocaleMessage(locale, messages.default)

        loadedLanguages.push(locale)

        i18n.locale = locale

        EventBus.$emit("i18n-load-complete")
        return Promise.resolve(locale)
    })
}

export default i18n
