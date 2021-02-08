import { IScheduleResponse } from '@/interfaces/IScheduleResponse';
import { IResponse } from '@/interfaces/IResponse';
import { IMarkdownResponse } from '@/interfaces/IMarkdownResponse';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { from, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { ScheduleEvent } from '@/interfaces/ScheduleEvent';
import { IStyleResponse } from '@/interfaces/IStyleResponse';
import { getBackendEndpoint } from '@/util/filters';

export class EventManager {

    /**
     * Return the external stylesheet
     */
    public getStylesAsync(): Observable<string[]> {
        return this.request<IStyleResponse>('styles/styledescriptor.json').pipe(map((response: IStyleResponse) => {
            return response.styles.map(s => this.combinePath(`styles/${s}`));
        }));
    }
    /**
     * Get the schedule
     */
    public getScheduleAsync(): Observable<IScheduleResponse> {
        return this.request<IScheduleResponse>('schedule/schedule.json');
    }

    /**
     * Get the event's content
     * @param locale Current language (ru, en)
     * @param eventId Selected event
     */
    public getEventContentAsync(locale: string, event: ScheduleEvent): Observable<IMarkdownResponse>{
        return this.rawRequest(`events/${locale}/${this.getEventId(event)}.md`);
    }

    /**
     * Get the active schedule event content
     * @param locale Current language (ru, en)
     * @param eventId Selected event
     */
    public getActiveScheduleContentAsync(locale: string, event: ScheduleEvent): Observable<IMarkdownResponse>{
        return this.rawRequest(`schedule/${locale}/${this.getEventId(event)}.md`);
    }

    /**
     * Get the active schedule event content
     * @param locale Current language (ru, en)
     */
    public getHistoryContentAsync(locale: string): Observable<IMarkdownResponse>{
        return this.rawRequest(`history/${locale}/history.md`);
    }

    /**
     * Get participant by event
     * @param locale Current language (ru, en)
     */
    public getParticipantContentAsync(locale: string, event: ScheduleEvent): Observable<IMarkdownResponse>{
        return this.rawRequest(`participant/${locale}/${this.getEventId(event)}.md`);
    }

    public getVideoContentAsync(locale: string, event: ScheduleEvent): Observable<IMarkdownResponse>{
        return this.rawRequest(`history/${locale}/video/${this.getEventId(event)}.md`);
    }

    public getSectionOpinionContentAsync(locale: string): Observable<IMarkdownResponse>{
        return this.rawRequest(`facts/${locale}/section-opinion.md`);
    }

    public getArticlesContentAsync(locale: string): Observable<IMarkdownResponse>{
        return this.rawRequest(`facts/${locale}/articles.md`);
    }

    public getFullArticlesContentAsync(locale: string, id: string): Observable<IMarkdownResponse>{
        return this.rawRequest(`facts/${locale}/${id}.md`);
    }

    private rawRequest(path: string): Observable<IMarkdownResponse>{
        // map the text into markdown response
        const mapper = (text) => {
            const response: IMarkdownResponse = {
                text: text as any
            };
            return response;
        }
        return this.request<IMarkdownResponse>(path).pipe(map(text => mapper(text)));
    }

    private getEventId(event: ScheduleEvent): string {
        return event.id;
    }

    private combinePath(path: string): string {
        // TODO: while SSL will deploy pay attention to this line
        var url = `${getBackendEndpoint()}/api/${path}`;
        if (process.env.NODE_ENV === "development") {
            url = `${process.env.VUE_APP_WEB_API_URL}${path}`;
        }
        return url;
    }

    private request<T extends IResponse>(path: string): Observable<T> {
        var options: AxiosRequestConfig = {
            url: this.combinePath(path),
            method: "GET"
        }
        const requestPromise = axios.request(options);
        const observable = from(requestPromise);
        return observable.pipe(map( (response: AxiosResponse) => response.data as T));
    }
}
