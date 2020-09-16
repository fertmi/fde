<template>
  <div>
    <PageTitle :title='$t("facts.section")' />
    <MarkdownContent :content="opinionSection | hrefSubstituteFacts($route.params.locale)" />

    <PageTitle :title='$t("facts.articles")' />
    <MarkdownContent :content="articles | hrefSubstituteFacts($route.params.locale)" />

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Inject } from 'vue-property-decorator';
import MarkdownContent from '@/components/MarkdownContent.vue';
import { EventPayload, EventPayloadBuilder } from '@/services/EventPayloadBuilder';
import PageTitle from "@/components/PageTitle.vue";
import { Route } from 'vue-router'

@Component({
  components: {
    MarkdownContent, PageTitle
  }
})
export default class Facts extends Vue{

  opinionSection: string = ""
  articles: string = ""

  @Inject(EventPayloadBuilder.Name)
  private builder: EventPayloadBuilder;

  @Watch('$route.params.locale', { immediate: true, deep: true })
  onUrlChange(newValue: string) {
    const payload: EventPayload = this.builder.makePayload(this.$route.params.locale);
    this.$store.dispatch('GET_SECTION_OPINION_CONTENT', payload);
    this.$store.dispatch('GET_ARTICLES_CONTENT', payload);
  }

  public created(): void {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_SECTION_OPINION_CONTENT_OK') {
        this.opinionSection = state.opinionSectionContent;
      }
      if (mutation.type === 'SET_ARTICLES_CONTENT_OK') {
        this.articles = state.articlesContent;
      }
    });
  }
}
</script>

