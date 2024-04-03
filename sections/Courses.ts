import { Course } from "../interfaces/Course";
import { months } from '../data'

export default function courses(data: Array<Course>, marginTitle: Array<number>, marginQR: Array<number>){
    let coursesArray: Array<any> = [];
    coursesArray.push(
      {text: [
        { text: '', style: 'icon' },
        {text: ` courses`.toLocaleUpperCase(), style: 'title', }
    ], margin: marginTitle}
    )
    data.forEach((element) => {
        coursesArray.push({
            stack: [{text: `${element.course}, ${element.institution}`, style: 'title', },
                    {text: `${months[element.startDate.month]} ${element.startDate.year} -- ${ element.currentlyLearning? 'Present': `${months[element.endDate.month]} ${element.endDate.year}`}`, style: 'date' },
                ], margin: marginTitle
                })
    });
    return ([{columns: [
        {
          width: '70%',
          stack: [
            coursesArray
          ]
        },
        {
          width: '30%',
          stack: [
            { qr: 'https://jfgn.info/home', fit: '100', margin: marginQR }
          ]
        }
      ],
      // optional space between columns
      columnGap: 10
    }])
}