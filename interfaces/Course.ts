import { Dates } from "./Dates"

export interface Course {
    course: string,
    institution: string
    startDate: Dates
    currentlyLearning: boolean,
    endDate: Dates
}