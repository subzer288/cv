import { Education } from "../interfaces/Education";
import { months } from '../data'

export default function education(data: Array<Education>, marginTitle: Array<number>, marginSkill: Array<number>){
    let educationArray: Array<any> = [];
    educationArray.push(
        {text: [
            { text: '', style: 'icon' },
            {text: ` education`.toLocaleUpperCase(), style: 'title', }
        ], margin: marginTitle}
    )
    data.forEach((element) => {
        educationArray.push({
            stack: [{text: `${element.name} at ${element.school}, ${element.city}`, style: 'title'},
                    {text: `${months[element.startDate.month]} ${element.startDate.year} -- ${ element.currentStudent? 'Present': `${months[element.endDate.month]} ${element.endDate.year}`}`, style:'date'},
                    {text: `${element.status}`, style: 'activity', margin: marginSkill }
                ], margin: marginTitle
                })
    });
    return educationArray;

}