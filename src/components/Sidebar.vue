<template>
  <aside class="sidebar">
    <LocalizedLink v-if="showHelpUsBtn" to="/payment" class="sidebar__button help-us"><span>{{ $t('aside.helpUsBtn') }}</span></LocalizedLink>
    <a href="https://raw.githubusercontent.com/Max1992/fde-storage/master/files/информационное письмо.pdf" class="sidebar__button take-part"><span>{{ $t('aside.takePartBtn') }}</span></a>
    <a href="http://www.derzhavnaya.spb.ru" target="_blank" class="sidebar__button website"></a>
    <a href="https://www.youtube.com/channel/UC1LUp3x8sjH5amGJLamw57g" target="_blank" class="sidebar__youtube">
      <div class="title">online-трансляция мероприятий</div>
      <div class="text">на <img src="../assets/img/youtube-logo.svg" class="logo" /> - канале храма во имя<br />иконы Божией Матери «Державная»</div>
    </a>
    <div class="sidebar__timer">
      <Timer />
    </div>
    <Calendar
      :eventCategories="eventCategories"
      :events="events"
    />
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Timer from '@/components/Timer.vue'
import 'vue-sweet-calendar/dist/SweetCalendar.css'
import Calendar from "@/components/calendar/Calendar.vue";
import LocalizedLink from "@/components/LocalizedLink.vue";

@Component({
  components: { LocalizedLink, Timer, Calendar }
})
export default class Sidebar extends Vue {
  eventCategories = [
    {
      id: 1,
      title: 'Festival',
      textColor: 'black',
      backgroundColor: '#ee8184'
    }
  ]

  events = [
    {
      title: 'Festival',
      start: '2020-05-03',
      end: '2020-05-03',
      repeat: 'never',
      categoryId: 1
    }
  ]

  get showHelpUsBtn(): boolean {
    const locale = this.$route.params.locale
    const path = this.$route.path

    return path !== `/${locale}/payment`
  }
}
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;

  &__button {
    width: 100%;
    height: 127px;
    margin-bottom: 20px;
    color: $aside-text;
    text-decoration: none;
    position: relative;

    span {
      font: normal 2.6rem/3.4rem $oswald-font-family;
      text-transform: uppercase;
      text-shadow: 0 4px 6px rgba(64, 67, 107, 0.34);
      max-width: 140px;
      position: absolute;
      top: 30px;
      left: 25px;
    }

    &--active, &:hover {
      span {
        color: darken($aside-text, 20%);
      }
    }

    &.help-us {
      background: url("../assets/img/help.png") center no-repeat;
    }

    &.take-part {
      background: url("../assets/img/take-part.png") center no-repeat;
    }

    &.website {
      background: url("../assets/img/website.gif") center no-repeat;
    }
  }

  &__youtube {
    border: 2px solid $deep-pink;
    text-align: center;
    text-decoration: none;

    .title {
      color: white;
      font: 400 2rem $oswald-font-family;
      text-transform: uppercase;
      background-color: $deep-pink;
    }

    .logo {
      height: 20px;
      line-height: 20px;
    }

    .text {
      color: $deep-pink;
      font-weight: bold;
      padding: 5px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__timer {
    margin: 40px 0 10px;
  }
}
</style>
