<template>
  <div>
    <PageTitle title="СМИ о нас" />
    <p><b>О нас пишут и говорят СМИ страны</b></p>
    <a class="mass-media-link" href="http://globus.aquaviva.ru/events/festival-pravoslavnykh-pesnopeniy-istoki" target="_blank">
      <img src="../assets/img/partners/9-вода-живая.jpg" class="image" />
      <p>Журнал "Вода живая. Санкт-Петербургский церковный вестник"</p>
    </a>
    <a class="mass-media-link" href="" target="_blank" style="pointer-events: none;">
      <img src="../assets/img/partners/8-радио-мария.jpg" class="image" />
      <p>Радио Мария</p>
    </a>
    <a class="mass-media-link" href="https://nstar-spb.ru/news/culture/iz_za_koronavirusa_pereneseny_sroki_provedeniya_vserossiyskogo_festivalya_pravoslavnykh_pevcheskikh_/" target="_blank">
      <img src="../assets/img/partners/13-северная-звезда.jpg" class="image" />
      <p>Информационное агентство "Северная Звезда"газета "Санкт-Петербургский музыкальный вестник"</p>
    </a>
    <a class="mass-media-link" href="https://ruskline.ru/anonsy/2020/03/17/v_sanktpeterburge_tihvine_i_gatchine_proidet_festival_pravoslavnyh_pevcheskih_tradicii_istoki" target="_blank">
      <img src="../assets/img/partners/12-рнл.jpg" class="image" />
      <p>Информационный ресурс «Русская народная линия»</p>
    </a>
    <a class="mass-media-link" href="https://vk.com/gradpetrovradio?w=wall-55681945_6780" target="_blank">
      <img src="../assets/img/partners/6-град-петров.jpg" class="image" />
      <p>Радио «Град Петров» </p>
    </a>
    <a class="mass-media-link" href="" target="_blank" style="pointer-events: none;">
      <img src="../assets/img/partners/14-Союз.jpg" class="image" />
      <p>Православный телеканал «Союз»</p>
    </a>
    <a class="mass-media-link" href="" target="_blank" style="pointer-events: none;">
      <img src="../assets/img/partners/15-муз-Союз.jpg" class="image" />
      <p>Православный телеканал «МУЗСОЮЗ»</p>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: { PageTitle }
})
export default class MassMedia extends Vue {}
</script>

<style lang="scss" scoped>
.mass-media-link {
  display: flex;
  align-items: center;
}

.image {
  text-align: center;
  border: 1px solid $title;
  margin: 0 20px 20px 0;
  display: inline-block;
  background-color: white;
}

</style>
