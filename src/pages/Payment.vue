<template>
  <div>
    <PageTitle :title='$t("aside.helpUsBtn")' />

    <p><b>Спасибо, что поддерживаете наш фестиваль и помогаете ему развиваться.<br /> Мы очень ценим Вашу помощь.</b></p>

    <div class="pscb-payform-container">
      <form class="pscb-payform" action="https://oos.pscb.ru/pay/htmlPay?marketPlace=247493283" method="post">
        <h2>Оплата онлайн</h2>

        <!-- Обязательные параметры -->
        <input name="marketPlace" type="hidden" value="247493283" />
        <label for="amount">Сумма пожертвования</label><input id="amount" name="amount" type="text" placeholder="" value="" required /><br>
        <label for="customerAccount">ФИО плательщика</label><input id="customerAccount" name="customerAccount" placeholder="" value="" required /><br>
        <!-- /Обязательные параметры -->

        <!-- Необязательные параметры -->
        <input id="showOrderID" name="showOrderID" type="hidden" value=""/>
        <input id="details" name="details" type="hidden" value=""/>
        <input id="successUrl" name="successUrl" type="hidden" value=""/>
        <input id="failUrl" name="failUrl" type="hidden" value=""/>
        <label for="paymentMethod">Способ оплаты</label>
        <select id="paymentMethod" name="paymentMethod"><option disabled>Выберите способ оплаты:</option>
          <option value="ac" selected>Банковская карта</option>
          <option value="alfa">Альфа-Клик</option>
          <option value="ym">Яндекс.Деньги</option>
          <option value="qiwi">QIWI-Кошелёк</option>
          <option value="wm">WebMoney (WMR)</option>
          <option value="pscb_terminal">Терминал ПСКБ</option>
        </select><br>
        <label for="customerEmail">E-mail</label><input id="customerEmail" name="customerEmail"  type="email" placeholder="email@email.com" value=""/><br>
        <label for="customerPhone">Телефон</label><input id="customerPhone" name="customerPhone" type="tel" placeholder="+79001234567" value=""/><br>
        <label for="customerComment">Комментарий</label><input id="customerComment" name="customerComment" type="text" placeholder="" value=""/><br>
        <input name="button" class="pscb-button" type="submit" value="Оплатить"/>
        <!-- /Необязательные параметры -->
      </form>
    </div>

    <p>
      Оплата картой на сайте производится с использованием платежного шлюза АО Банк «ПСКБ». К оплате принимаются карты платёжных систем VISA, MasterCard, Visa Electron, Maestro, «Мир», поддерживающие оплату в интернете.</p>
    <p>Для оплаты картой необходимо ввести данные карты (номер карты, срок действия, CVV2/CVC2) на защищенной странице платежного шлюза АО Банк «ПСКБ» и нажать «Оплатить». Если карта поддерживает технологию 3D-Secure, произойдет перенаправление на страницу банка-эмитента подтверждения операции с помощью одноразового пароля.</p>
    <p>Сбор и обработки карточных данных производятся в соответствии с требованиями международного стандарта безопасности PCI DSS и применением современных технологий шифрования.
    </p>

    <a href="https://raw.githubusercontent.com/Max1992/fde-storage/master/files/ДОГОВОР ОФЕРТЫ.pdf" class="download-rules">Договор оферты</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: { PageTitle }
})
export default class Payment extends Vue {}
</script>

<style lang="scss">
.pscb-payform-container {
  display:block;
  margin:0 auto;
  text-align:center;
}
.pscb-payform {
  display:inline-block;
  padding: 25px 50px;
  margin: 15px 50px 25px;
  background-color: transparent;
  border: 1px solid $button;
  text-align:center;
}
.pscb-payform label {
  display:block;
  float:left;
  margin:15px 0 6px 0;
  line-height:1em;
  font-size:18px;
}
.pscb-payform input,select {
  display: inline-block;
  width: 100%;
  height:35px;
  float:left;
  font-size:16px;
  padding: 0px 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
  background-color: white;
  transition-property: box-shadow;
  transition-duration: .25s;
}
.pscb-button {
  display:inline-block;
  height: 55px !important;
  margin: 1.5em 0 0;
  padding: 0px 2em !important;
  background-color: $button !important;
  color: $button-text;
  text-transform: uppercase;
  font: 400 2.2rem $oswald-font-family;
  border:0 !important;
  border-radius: 5px !important;
  font-size:22px !important;
  letter-spacing:0.5px;
  outline:none;
  cursor:pointer;
}
.pscb-payform input:hover {box-shadow: 0px 0px 1px 1px #4a78c6; border:1px solid lightgray; outline:none;}
.pscb-payform input:focus {box-shadow: 0px 0px 1px 1px #4a78c6; border:1px solid lightgray; outline:none;}
.pscb-payform select:hover {outline:none;}
.pscb-payform select:focus {outline:none;}
.pscb-payform input[type="submit"] {box-shadow: none !important; border:0 !important;}
.pscb-payform input[type="submit"]:hover {
  background-image: -moz-linear-gradient(top, $button-active, #EF6652);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from($button-active), to(#EF6652));
  background-image: -webkit-linear-gradient(top, $button-active, #EF6652);
  background-image: -o-linear-gradient(top, $button-active, #EF6652);
  background-image: linear-gradient(to bottom, $button-active, #EF6652);
  background-repeat: repeat-x;
}

.download-rules {
  display: block;
  margin: 25px 0;
  font: 400 1.8rem $kelson-font-family;
  color: $text-color;
  text-transform: uppercase;
  text-decoration: none;
  padding-left: 30px;
  position: relative;

  &:before {
    content: url("../assets/img/download.svg");
    position: absolute;
    left: 0;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
