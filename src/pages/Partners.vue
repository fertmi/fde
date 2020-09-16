<template>
  <div>
    <PageTitle :title='$t("aside.partners")' />

    <div class="partners">
      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/1-инициатива.jpg" class="image" />
        </div>
        <p>Международный грантовый конкурс «Православная инициатива 2019-2020»</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/2-Тихвин.jpg" class="image" />
        </div>
        <p>Тихвинская Епархия Русской Православной Церкви (Московский Патриархат)</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/3-Гатчина.jpg" class="image" />
        </div>
        <p>Гатчинская Епархия Русской Православной Церкви (Московский Патриархат)</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/4-Владимирский.jpg" class="image" />
        </div>
        <p>Собор Владимирской иконы Божией Матери</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/5-Детская.jpg" class="image" />
        </div>
        <p>Детская миссия Санкт-Петербургской Епархии</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/6-град-петров.jpg" class="image" />
        </div>
        <p>Некоммерческий фонд Радио Санкт-Петербургской митрополии "Град Петров"</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/7-типография.jpg" class="image" />
        </div>
        <p>ООО "Типография Михаила Фурсова"</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/8-радио-мария.jpg" class="image" />
        </div>
        <p>Фонд развития некоммерческого радиовещания "Радио Мария"</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/9-вода-живая.jpg" class="image" />
        </div>
        <p>Журнал "Вода живая. Санкт-Петербургский церковный вестник"</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/10-газета-петербург.jpg" class="image" />
        </div>
        <p>Газета "Православный Санкт-Петербург"</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/14-Союз.jpg" class="image" />
        </div>
        <p>Православный телеканал «Союз»</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/15-муз-Союз.jpg" class="image" />
        </div>
        <p>Православный телеканал «МУЗСОЮЗ»</p>
      </div>

      <div class="partner partner--empty">
        <p>СПб ГБУСОН "Комплексный центр социального обслуживания населения Кировского района Санкт-Петербурга"</p>
      </div>

      <div class="partner">
        <div class="img-wrap">
          <img src="../assets/img/partners/11-сиденис.jpg" class="image" />
        </div>
        <p>Компания «Sidenis»</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: { PageTitle }
})
export default class Partners extends Vue {}
</script>

<style lang="scss" scoped>
.partners {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
}

.partner {
  flex: 1 1 50%;
  padding: 0 20px;

  &--empty {
    display: flex;
    align-self: center;
  }

  .img-wrap {
    min-height: 144px;
    display: flex;
    align-items: center;
  }

  .image {
    display: block;
    margin: 0 auto;
  }
}

</style>
