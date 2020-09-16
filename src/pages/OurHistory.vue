<template>
    <div>
        <MarkdownContent :content="content"/>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Inject } from 'vue-property-decorator';
import MarkdownContent from '@/components/MarkdownContent.vue';
import {EventPayload, EventPayloadBuilder} from '../services/EventPayloadBuilder';

@Component({
    components: { MarkdownContent }
})
export default class OurHistory extends Vue {
    public content: string = "";

    @Inject(EventPayloadBuilder.Name)
    private builder: EventPayloadBuilder;

    @Watch('$route.params.locale', { immediate: true, deep: true })
    onUrlChange() {
        const payload: EventPayload = this.builder.makePayload(this.$route.params.locale);
        this.$store.dispatch('GET_HISTORY_CONTENT', payload);
    }

    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'SET_HISTORY_CONTENT_OK') {
                this.content = state.historyContent;
            }
            if (mutation.type === 'SET_HISTORY_CONTENT_ERROR') {
                this.content = `Error loading content: ${state.error}`;
            }
        });
    }
}
</script>
