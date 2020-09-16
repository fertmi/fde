import { ScheduleEvent } from '@/interfaces/ScheduleEvent';

export interface EventPayload {
    event: ScheduleEvent;
    language: string;
    linkId: string;
}

export class EventPayloadBuilder {
    public makePayload(language: string, event?: ScheduleEvent, linkId?: string): EventPayload {
        const payload: EventPayload = {
            event: event ? event : this.emtpyEvent(),
            language: language,
            linkId: linkId ? linkId : ''
        };
        return payload;
    }

    public static Name: string = 'EventPayloadBuilder';

    private emtpyEvent(): ScheduleEvent {
        return {
            id: '',
            status: '',
            timestamp: '',
            title: ''
        }
    }
}
