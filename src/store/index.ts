import Vue from 'vue';
import Vuex from 'vuex'
import { ScheduleEvent } from "@/interfaces/ScheduleEvent";
import { EventManager } from '@/services/EventManager';
import { IScheduleResponse } from '@/interfaces/IScheduleResponse';
import { IMarkdownResponse } from '@/interfaces/IMarkdownResponse';
import { EventPayload } from '@/services/EventPayloadBuilder';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeEvent: null, // active event at this time
    error: null, // last error
    schedule: [], // the schules list
    content: null, // the text in markdown style
    participantContent: null, // the participant content
    videoContent: null, // video content
    activeSchedule: null, // active schedule
    historyContent: null, // history content
    opinionSectionContent: null,
    articlesContent: null,
    fullArticleContent: null
  },

  mutations: {

    SET_CURRENT_EVENT_CONTENT_OK: (state, payload) => {
      state.content = payload.content;
    },
    SET_CURRENT_EVENT_CONTENT_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    SET_ACTIVE_EVENT_OK: (state, payload) => {
      state.activeEvent = payload.activeEvent;
    },
    SET_ACTIVE_EVENT_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    SET_PARTICIPANT_EVENT_CONTENT_OK: (state, payload) => {
      state.participantContent = payload.content;
    },
    SET_PARTICIPANT_EVENT_CONTENT_ERROR: (state, payload) => {
      state.participantContent = payload.content;
    },

    SET_VIDEO_EVENT_CONTENT_OK: (state, payload) => {
      state.videoContent = payload.content;
    },
    SET_VIDEO_EVENT_CONTENT_ERROR: (state, payload) => {
      state.videoContent = payload.content;
    },

    SCHEDULE_DATA_OK: (state, payload) => {
      state.schedule = payload.schedule
    },
    SCHEDULE_DATA_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    ACTIVE_SCHEDULE_DATA_OK: (state, payload) => {
      state.activeSchedule = payload.activeSchedule;
    },
    ACTIVE_SCHEDULE_DATA_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    SET_HISTORY_CONTENT_OK: (state, payload) => {
      state.historyContent = payload.historyContent;
    },
    SET_HISTORY_CONTENT_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    SET_SECTION_OPINION_CONTENT_OK: (state, payload) => {
      state.opinionSectionContent = payload.opinionSectionContent;
    },
    SET_SECTION_OPINION_CONTENT_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    SET_ARTICLES_CONTENT_OK: (state, payload) => {
      state.articlesContent = payload.articlesContent;
    },
    SET_ARTICLES_CONTENT_ERROR: (state, payload) => {
      state.error = payload.error;
    },

    SET_FULL_ARTICLES_CONTENT_OK: (state, payload) => {
      state.fullArticleContent = payload.fullArticleContent;
    },
    SET_FULL_ARTICLES_CONTENT_ERROR: (state, payload) => {
      state.error = payload.error;
    }
  },
  actions: {
    /**
     * Return the content by selected event
     * @param param0
     * @param event The selected event
     */
    GET_CURRENT_EVENT_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();
      manager.getEventContentAsync(payload.language, payload.event).subscribe((response: IMarkdownResponse) => {
        const text: string = response.text as string;
        commit('SET_CURRENT_EVENT_CONTENT_OK', { content: text });
      }, (error) => {
        commit('SET_CURRENT_EVENT_CONTENT_ERROR', { error: error.toString() });
      })
    },
    /**
     * Get the participant content
     * @param param0
     * @param event
     */
    GET_PARTICIPANT_EVENT_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getParticipantContentAsync(payload.language, payload.event).subscribe((response: IMarkdownResponse) => {
        const text: string = response.text as string;
        commit('SET_PARTICIPANT_EVENT_CONTENT_OK', { content: text });
      }, (error) => {
        commit('SET_PARTICIPANT_EVENT_CONTENT_ERROR', { error: error.toString() });
      })
    },
    /**
     * Get the video content
     * @param param0
     * @param event
     */
    GET_VIDEO_EVENT_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getVideoContentAsync(payload.language, payload.event).subscribe((response: IMarkdownResponse) => {
        const text: string = response.text as string;
        commit('SET_VIDEO_EVENT_CONTENT_OK', { content: text });
      }, (error) => {
        commit('SET_VIDEO_EVENT_CONTENT_ERROR', { error: error.toString() });
      })
    },
    /**
     * Return active event
     * @param param0
     * @param params
     */
    GET_ACTIVE_EVENT({ commit }, params) {
      var manager: EventManager = new EventManager();
      manager.getScheduleAsync().subscribe((response: IScheduleResponse) => {
        const activeEvent = response.schedule.filter((event: ScheduleEvent) => event.status === 'active');
        if (activeEvent.length <= 0){
          commit('SET_ACTIVE_EVENT_ERROR', { error: 'No active event found' });
        } else {
          commit('SET_ACTIVE_EVENT_OK', { activeEvent: activeEvent[0] });
        }
      }, (error) => {
        commit('SET_ACTIVE_EVENT_ERROR', { error: error.toString() });
      });
    },
    /**
     * Return schedule
     * @param param0
     * @param params
     */
    GET_SCHEDULE({commit}, params) {
      var manager: EventManager = new EventManager();
      manager.getScheduleAsync().subscribe((response: IScheduleResponse) => {
        commit('SCHEDULE_DATA_OK', { schedule: response.schedule })
      }, (error) => {
        commit('SCHEDULE_DATA_ERROR', { error: error.toString() })
      });
    },

    /**
     * Return active schedule content
     * @param param0
     * @param params
     */
    GET_ACTIVE_SCHEDULE_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getActiveScheduleContentAsync(payload.language, payload.event).subscribe((response: IMarkdownResponse) => {

        const text: string = response.text as string;

        commit('ACTIVE_SCHEDULE_DATA_OK', { activeSchedule: text })
      }, (error) => {
        commit('ACTIVE_SCHEDULE_DATA_ERROR', { error: error.toString() })
      });
    },

    /**
     * Return history content
     * @param param0
     * @param params
     */
    GET_HISTORY_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getHistoryContentAsync(payload.language).subscribe((response: IMarkdownResponse) => {

        const text: string = response.text as string;

        commit('SET_HISTORY_CONTENT_OK', { historyContent: text })
      }, (error) => {
        commit('SET_HISTORY_CONTENT_ERROR', { error: error.toString() })
      });
    },

    /**
     * Return content of the opinion section
     * @param param0
     * @param params
     */
    GET_SECTION_OPINION_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getSectionOpinionContentAsync(payload.language).subscribe((response: IMarkdownResponse) => {

        const text: string = response.text as string;

        commit('SET_SECTION_OPINION_CONTENT_OK', { opinionSectionContent: text })
      }, (error) => {
        commit('SET_SECTION_OPINION_CONTENT_ERROR', { error: error.toString() })
      });
    },

    /**
     * Return content of the articles section
     * @param param0
     * @param params
     */
    GET_ARTICLES_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getArticlesContentAsync(payload.language).subscribe((response: IMarkdownResponse) => {

        const text: string = response.text as string;

        commit('SET_ARTICLES_CONTENT_OK', { articlesContent: text })
      }, (error) => {
        commit('SET_ARTICLES_CONTENT_ERROR', { error: error.toString() })
      });
    },

    GET_FULL_ARTICLES_CONTENT({commit}, payload: EventPayload) {
      var manager: EventManager = new EventManager();

      manager.getFullArticlesContentAsync(payload.language, payload.linkId).subscribe((response: IMarkdownResponse) => {

        const text: string = response.text as string;

        commit('SET_FULL_ARTICLES_CONTENT_OK', { fullArticleContent: text })
      }, (error) => {
        commit('SET_FULL_ARTICLES_CONTENT_ERROR', { error: error.toString() })
      });
    }
  }
})
