<template>
  <div class="events">
    <PageTitle :title="title" />
    <MarkdownContent :content="content"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Inject } from 'vue-property-decorator';
import MarkdownContent from '@/components/MarkdownContent.vue';
import PageTitle from '@/components/PageTitle.vue';
import { EventPayload, EventPayloadBuilder } from '@/services/EventPayloadBuilder';

@Component({
  components: {
    MarkdownContent,
    PageTitle
  }
})
export default class Events extends Vue {
  public content: string = "";

  @Inject(EventPayloadBuilder.Name)
  private builder: EventPayloadBuilder;

  @Watch('$route.params.locale', { immediate: true, deep: true })
  onUrlChange(newValue: string) {
    this.$store.dispatch('GET_ACTIVE_EVENT');
  }

  public created(): void {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_ACTIVE_EVENT_OK') {

        const payload: EventPayload = this.builder.makePayload(this.$route.params.locale, state.activeEvent);

        this.$store.dispatch('GET_ACTIVE_SCHEDULE_CONTENT', payload);
      }
      if (mutation.type === 'ACTIVE_SCHEDULE_DATA_OK') {
        this.content = state.activeSchedule;
      }
      if (mutation.type === 'ACTIVE_SCHEDULE_DATA_ERROR') {
        this.content = `Error loading content: ${state.error}`;
      }
    });
  }

  mounted() {
    // when link has anchor we must wait for content to be rendered, that's not really accurate, but simple
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.getElementById(
          decodeURI(window.location.hash).slice(1)
        )
        if (el) {
          el.scrollIntoView({ block: 'start' })
        }
      }, 500)
    }
  }

  get title() {
    return this.$t("events.title")
  }
}
</script>

<style lang="scss" scoped></style>
