import { Job } from "../interfaces/Job";
import { months } from '../data'


export default function jobs(data: Array<Job>, marginTitle: Array<number>, marginSkill: Array<number>){
    let jobsArray: Array<any> = [];
    jobsArray.push(
        {text: [
            { text: '', style: 'icon' },
            {text: ` employment history`.toLocaleUpperCase(), style: 'title', }
        ], margin: marginTitle})
    data.forEach((element) => {
        jobsArray.push({
            stack: [{text: `${element.name} at ${element.company}, ${element.city}`, style: 'title'},
                    {text: `${months[element.startDate.month]} ${element.startDate.year} -- ${ element.currentJob? 'Present': `${months[element.endDate.month]} ${element.endDate.year}`}`, style: 'date'},
                    {ul: 
                        element.activities.map((activity)=>{
                            return {text: activity, style: 'activity'}
                        }), margin: marginSkill
                    }
                ], margin: marginSkill
                })
    });
    return jobsArray;
}