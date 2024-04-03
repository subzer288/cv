import { Dates } from "./Dates"

export interface Education{
    name: string,
    school: string,
    city: string,
    startDate: Dates,
    currentStudent: boolean,
    endDate: Dates,
    status: string
}