<template>
    <div class="event-links">
        <router-link
                v-if="activeEvent"
                :to="'/events/' + activeEvent.id"
                class="event-links__link"
        >
            Right Now
        </router-link>

        <router-link
                v-for="(link, $index) in passedEvents"
                :key="$index"
                :to="'/events/' + link.id"
                class="event-links__link"
        >
            {{ link.title }}
        </router-link>

        <router-link
                v-if="newEvent"
                :to="'/events/' + newEvent.id"
                class="event-links__link"
        >
            Future
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ScheduleEvent } from "@/interfaces/ScheduleEvent";

@Component
export default class EventLinks extends Vue {

    public activeEvent: ScheduleEvent = new ScheduleEvent();
    public newEvent: ScheduleEvent = new ScheduleEvent();
    public passedEvents: ScheduleEvent[] = [];

    mounted() {
        this.$store.dispatch('GET_SCHEDULE');
    }

    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'SCHEDULE_DATA_OK') {
                const schedule : ScheduleEvent[] = state.schedule;
                this.activeEvent = this.getActiveEvent(schedule);
                this.newEvent = this.getNewEvent(schedule);
                this.passedEvents = this.getPassedEvents(schedule);
            }
        });
    }

    private getActiveEvent(schedule : ScheduleEvent[]): ScheduleEvent {
        return schedule.filter((item: ScheduleEvent) => item.status === 'active')[0];
    }

    private getNewEvent(schedule : ScheduleEvent[]): ScheduleEvent {
        return schedule.filter((item: ScheduleEvent) => item.status === 'new')[0];
    }

    private getPassedEvents(schedule : ScheduleEvent[]): ScheduleEvent[] {
        return schedule.filter((item: ScheduleEvent) => item.status === 'passed');
    }
}
</script>

<style lang="scss" scoped>
.event-links {
    display: flex;
    // flex-direction: column;

    &__link {
        padding: 0 20px 10px;
    }

    .nav-button {
        margin-bottom: 20px;
    }
}
</style>
