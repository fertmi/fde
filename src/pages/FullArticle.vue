<template>
  <div>
    <MarkdownContent :content="content"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Inject } from 'vue-property-decorator';
import MarkdownContent from '@/components/MarkdownContent.vue';
import { EventPayloadBuilder, EventPayload } from '@/services/EventPayloadBuilder';
import { ScheduleEvent } from "@/interfaces/ScheduleEvent";

@Component({
  components: {
    MarkdownContent
  }
})
export default class FullArticle extends Vue {

  public content: string = "";

  @Inject(EventPayloadBuilder.Name)
  private builder: EventPayloadBuilder;

  @Watch('$route.params.locale', { immediate: true, deep: true })
  onUrlChange() {
    const emptyEvent: ScheduleEvent = {
      id: '',
      status: '',
      timestamp: '',
      title: ''
    }
    const payload: EventPayload = this.builder.makePayload(this.$route.params.locale, emptyEvent, this.$route.params.id);
    this.$store.dispatch('GET_FULL_ARTICLES_CONTENT', payload);
  }

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_FULL_ARTICLES_CONTENT_OK') {
        this.content = state.fullArticleContent;
      }
    });
  }
}
</script>
