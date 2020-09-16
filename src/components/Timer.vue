<template>
  <div class="timer">
    <div class="timer__title">{{ $t('timer.title') }}</div>
    <div class="timer__date">
      <span>{{ time.days }} {{ $t('timer.days') }} : </span>
      <span>{{ time.hours }} {{ $t('timer.hours') }} : </span>
      <span>{{ time.minutes }} {{ $t('timer.minutes') }}</span>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Timer extends Vue {
  deadline = 'May 03 2020 10:00:00 GMT+0300';
  days: string | number = '';
  hours: string | number = '';
  minutes: string | number = '';
  expired: boolean = false;

  get time() {
    const self = this;

    let countdown =  setInterval(function(){
      let countDownDate = new Date(self.deadline).getTime(),
        now = new Date().getTime(),
        diff = countDownDate - now,

        tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
        thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      self.days = (tdays < 10) ? '0' + tdays : tdays;
      self.hours = (thours < 10) ? '0' + thours : thours;
      self.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;

      if(diff < 0){
        clearInterval(countdown);
        self.expired = true;
        self.days = '0';
        self.hours = '0';
        self.minutes = '0';
      }
    }, 1000);

    return {
      days: self.days,
      hours: self.hours,
      minutes: self.minutes
    };
  }

}

</script>

<style lang="scss" scoped>
.timer {
  background-color: $deep-pink;
  color: $aside-text;
  font: 400 2rem $oswald-font-family;
  text-align: center;
  padding: 15px 0;

  &__title {
    text-transform: uppercase;
  }

  &__date {
    font-weight: bold;
  }
}
</style>
