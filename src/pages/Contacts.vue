<template>
  <div class="contacts">
    <PageTitle :title='$t("nav.contacts")' />
    <p><b>АДРЕС: </b>198261, Санкт-Петербург, пр.Маршала Жукова, д.60, к.1, лит. Б</p>
    <p><b>ТЕЛ: </b><span class="phone-number">+7(911)957-53-73</span></p>
    <p><b>EMAIL: </b><a href="mailto:" style="text-decoration: none">7102980@mail.ru</a></p>
    <br /><br />
    <p>Мы в <a href="https://vk.com/istoki_fest" target="_blank">Вконтакте</a></p>
    <p>Мы в <a href="https://www.facebook.com/events/1489391577896136/" target="_blank">Facebook</a></p>
    <p>Мы на <a href="https://www.youtube.com/channel/UC1LUp3x8sjH5amGJLamw57g" target="_blank">Youtube</a></p>
    <br /><br />

    <a href="https://maps.app.goo.gl/RnCb5AtHoYi28Lf87" target="_blank"><img src="../assets/img/contacts/карта.jpg" style="margin-right: 25px" /></a>
    <img src="../assets/img/contacts/храм.jpg" />

    <a href="https://maps.app.goo.gl/RnCb5AtHoYi28Lf87" target="_blank" class="link-map">Посмотреть на карте</a>

    <PageTitle title="Помочь храму" />
    <p><b>Вы можете помочь храму, сделав пожертвование одним из следующих способов:</b></p>
    <p><span class="mark"> > </span>переводом на карту Сбербанка по номеру телефона храма <span class="phone-number">+7(911)957-53-73</span></p>
    <p><span class="mark"> > </span>с помощью <LocalizedLink to="/payment" class="help-us-link">кнопки</LocalizedLink></p>
    <p><span class="mark"> > </span>воспользоваться <span style="color: #e85053">РЕКВИЗИТАМИ:</span></p>
    <div>
      Православная местная религиозная организация Приход храма во имя иконы Божией Матери «Державная» г.Санкт-Петербурга
      Санкт-Петербургской Епархии Русской Православной Церкви (Московский Патриархат).<br />
      Сокращенное название: ПМРО Приход храма во имя иконы Божией Матери «Державная».<br />
      Почтовый адрес: 198261, Санкт-Петербург, пр.Маршала Жукова, д.60, к.1, лит. Б<br />
      ИНН 7802154576<br />
      КПП 784201001<br />
      р/с № 40703810500000032730<br />
      АО Банк «ПСКБ» г.Санкт-Петербург,<br />
      БИК 044030852,<br />
      к\с 30101810000000000852<br />
      ОГРН 1037858011960<br />
    </div>
    <br /><br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTitle from "@/components/PageTitle.vue";
import LocalizedLink from "@/components/LocalizedLink.vue"

@Component({
  components: { PageTitle, LocalizedLink }
})
export default class Contacts extends Vue{}
</script>

<style lang="scss">
.contacts {
  p {
    font: 400 1.8rem $kelson-font-family;
  }
}

.link-map {
  display: inline-block;
  font: bold 1.8rem $kelson-font-family;
  text-transform: uppercase;
  margin: 27px 0;
  position: relative;

  &:after {
    content: '>';
    position: absolute;
    top: -4px;
    bottom: 0;
    right: -15px;
    font-size: 2.2rem;
  }
}

.help-us-link {
  color: $deep-pink;
  text-transform: uppercase;
  font-weight: bold;
}

.mark {
  font-size: 2.4rem;
  font-weight: bold;
  display: inline-block;
  transform: translateY(3px);
  color: $highlight;
  margin-right: 3px;
}

.phone-number {
  font: bold 1.8rem $kelson-font-family;
  letter-spacing: 0.1rem;
}

</style>

