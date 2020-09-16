<template>
  <footer class="footer">
    <div class="footer__main container">
      <div class="footer__section">
        <p class="copyright">©2020 {{copyrigthUrl}}</p>
        <p>Проект реализован храмом во имя иконы Божией Матери «Державная» при поддержке<br />Международного грантового конкурса «Православная инициатива 2019-2020»</p>
        <p class="phone">Телефон для справок: <span>+7(911)957-53-73</span></p>
      </div>
      <div class="footer__section">
        <div class="footer__social-title">{{ $t('footer.social') }}</div>
        <div class="footer__social">
          <a href="https://vk.com/istoki_fest" target="_blank" class="icon vk"></a>
          <a href="https://www.facebook.com/events/1489391577896136/" target="_blank" class="icon fb"></a>
          <!--<a href="https://newpravkonkurs.ru/Home/Index" target="_blank" class="icon istoki">i</a>-->
        </div>

        <div class="yandex-metrika">
          <!-- Yandex.Metrika informer -->
          <a href="https://metrika.yandex.ru/stat/?id=61906957&amp;from=informer" target="_blank" rel="nofollow">
            <img src="https://informer.yandex.ru/informer/61906957/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
               style="width:88px; height:31px; border:0;"
               alt="Яндекс.Метрика"
               title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
               class="ym-advanced-informer"
               data-cid="61906957"
               data-lang="ru" />
          </a>
          <!-- /Yandex.Metrika informer -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LocalizedLink from '@/components/LocalizedLink.vue'

@Component({
  components: { LocalizedLink }
})
export default class Footer extends Vue {
  get copyrigthUrl() {
    // return window.location.host;
    return 'FV-ISTOKI';
  }
}

</script>

<style lang="scss" scoped>
.footer {
  background: url("../assets/img/footer-left.png") left no-repeat, url("../assets/img/footer-right.png") right no-repeat;
  background-color: $footer-bg;
  color: $footer-text;
  font: normal 1.6rem/2rem $pt-sans-font-family;

  &__main {
    padding: 30px 35px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  &__section {
    &:last-child {
      // flex: 0 0 27%;
      margin-left: 20px;
      position: relative;
    }
  }

  &__social-title {
    margin-bottom: 15px;
  }

  &__social {
    display: flex;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      width: 70px;
      height: 70px;

      &:hover {
        filter: brightness(0.85);
      }

      &.vk {
        background: url("../assets/img/vk.svg") no-repeat center;
      }

      &.fb {
        background: url("../assets/img/fb.svg") no-repeat center;
      }

      &.istoki {
        border: 1px dotted orange;
        color: $footer-text;
        border-radius: 50%;
      }
    }
  }

  .copyright {
    padding-bottom: 15px;
  }

  .phone {
    padding-top: 20px;

    span {
      font: normal 1.8rem $kelson-font-family;
      letter-spacing: 0.1rem;
    }
  }

  .yandex-metrika {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

</style>
