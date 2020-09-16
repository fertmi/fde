import { IResponse } from './IResponse';
import { ScheduleEvent } from "@/interfaces/ScheduleEvent";

export interface IScheduleResponse extends IResponse {
    schedule: ScheduleEvent[];
}