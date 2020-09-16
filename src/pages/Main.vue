<template>
  <div class="main">
    <PageTitle :title='$t("main.title")' />
    <p class="intro first">
      История этого молодого на первый взгляд проекта на самом деле началась в далеком 2006 г., когда в скромном домовом
      храме во имя иконы Божией Матери «Державная» Санкт-Петербурга у настоятеля прот. Димитрия Кулигина возникла идея
      организации ежегодных концертов-встреч певческих коллективов, восстанавливающих в своем творчестве забытые сокровища
      старинной православной богослужебной музыки… <LocalizedLink to="/our-history" class="read-more">Читать подробнее ></LocalizedLink>
    </p>
    <br />

    <p class="intro">
      <span class="info"><b>Цель фестиваля</b></span> – дать возможность прикоснуться к древнему опыту знаменной молитвы, поделиться им и приобщится к молитвенному
      опыту других. Это начинание не только не угасло, но и приобрело и приобретает единомышленников, которые вместе с нами
      воспевают Бога «едиными усты и единым сердцем»… Один из замечательных поборников древнерусского напева высказал мудрое
      правило древнерусской певческой культуры: «чтобы знаменно петь, надо знаменно жить». <LocalizedLink to="/promoters" class="read-more">Читать подробнее ></LocalizedLink>
    </p>
    <br />

    <PageTitle :title='$t("main.schedule")' />
    <div class="main__schedule">
      <img src="../assets/img/start.jpg" />
      <div class="schedule-info">
        <p><b>Начало проведения фестиваля перенесено на
          <span class="info">3 МАЯ – НЕДЕЛЮ СВЯТЫХ ЖЕН-МИРОНОСИЦ.</span>
        </b></p>
        <br/>
        <p><b>Следите за новостями на сайте и в наших <i><u>группах в соцсетях.</u></i></b></p>
        <LocalizedLink to="/events" class="events-btn">Смотреть расписание фестиваля ></LocalizedLink>
      </div>
    </div>

    <PageTitle :title='$t("main.program")' />
    <p class="program"><span class="info"><b>Концерты</b></span> древних православных песнопений и колокольных звонов</p>
    <p class="program"><span class="info"><b>Литургии и интернет-трансляции</b></span> богослужений древними распевами
      из православных храмов со всего мира</p>
    <p class="program"><span class="info"><b>Мастер-классы</b></span> от ведущих руководителей певческих коллективов
      древнерусской музыки Санкт-Петербурга</p>
    <p class="program"><span class="info"><b>Круглые столы</b></span>, увлекательные экскурсии, а также многое другое</p>

    <!--<MarkdownContent :content="eventContent | hrefSubstitute($route.params.locale)"/>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Inject } from 'vue-property-decorator';
import MarkdownContent from '@/components/MarkdownContent.vue';
import NavButton from '@/components/NavButton.vue';
import PageTitle from '@/components/PageTitle.vue';
import LocalizedLink from '@/components/LocalizedLink.vue'
import {EventPayload, EventPayloadBuilder} from '../services/EventPayloadBuilder';

@Component({
  components: {
    MarkdownContent,
    NavButton,
    PageTitle,
    LocalizedLink
  }
})
export default class Main extends Vue {

  public eventContent: string = "";

  @Inject(EventPayloadBuilder.Name)
  private builder: EventPayloadBuilder;

  @Watch('$route.params.locale', { immediate: true, deep: true })
  onUrlChange() {
      this.$store.dispatch('GET_ACTIVE_EVENT');
  }

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_ACTIVE_EVENT_OK') {

        const payload: EventPayload = this.builder.makePayload(this.$route.params.locale, state.activeEvent);

        this.$store.dispatch('GET_CURRENT_EVENT_CONTENT', payload);
      }
      if (mutation.type === 'SET_CURRENT_EVENT_CONTENT_OK') {
        this.eventContent = state.content;
      }
      if (mutation.type === 'SET_CURRENT_EVENT_CONTENT_ERROR') {
        this.eventContent = `Error loading content: ${state.error}`;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.main {
  .intro {
    text-align: justify;
    position: relative;

    &.first:first-letter {
      color: $highlight;
      font: bold 2.4rem $kelson-font-family;
    }
  }

  .info {
    color: $deep-pink;
  }

  .program {
    text-transform: uppercase;
    text-align: center;
    width: 70%;
    margin: 15px auto;
  }

  .read-more {
    display: inline-block;
    position: absolute;
    right: 0;
    transform: translateY(5px);
    color: $deep-pink;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &__schedule {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    img {
      display: block;
      margin-right: 20px;
    }

    .schedule-info {
      position: relative;
    }

    .events-btn {
      background-color: $deep-pink;
      color: white;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 15px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__date-wrapper {
    text-align: center;
    color: $title;
    margin-bottom: 50px;

    .title {
      text-transform: uppercase;
      font: 400 2rem $oswald-font-family;
    }

    .cities {
      text-transform: uppercase;
      font: 400 2.2rem $oswald-font-family;
    }

    .dates {
      font: 500 7.2rem $oswald-font-family;
      text-transform: uppercase;
      padding: 5px 0 25px;
      margin: 20px 0;
      position: relative;

      > span {
        font: 500 4.4rem $oswald-font-family;
      }

      &:before, &:after {
        content: '';
        background: url("../assets/img/top-line.png") no-repeat center;
        height: 8px;
        position: absolute;
        right: 0;
        left: 0;
      }

      &:before {
        background: url("../assets/img/top-line.png") no-repeat center;
        top: 0;
      }

      &:after {
        background: url("../assets/img/bottom-line.png") no-repeat center;
        bottom: 0;
      }
    }
  }
}
</style>
