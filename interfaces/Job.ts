import { Dates } from "./Dates"

export interface Job{
    name: string,
    company: string,
    city: string,
    startDate: Dates,
    currentJob: boolean,
    endDate: Dates
    activities: Array<string>
}