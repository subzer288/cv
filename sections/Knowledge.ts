import Knowledge from "../interfaces/Knowledge";
import makeCanva from "../utils/makeCanva";

export default function knowledge(data: Array<Knowledge>, marginTitle: Array<number>, marginSkill: Array<number>){
    let skillsArray: Array<any> = [];
    data.forEach((element)=>{
        skillsArray.push({
            stack: [
                {text: `° ${element.category} ° `, style: 'detailsTitle', margin: marginTitle},
                element.technologies.map((tech)=> {
                    return {stack: [
                        {text: tech.name, style: 'details', margin: marginSkill},
                        makeCanva(tech.value)
                    ]}
                })
            ]
        })
    });
    return skillsArray;
}