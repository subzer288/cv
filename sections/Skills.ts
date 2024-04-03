import Skills from "../interfaces/Skills"

export default function skills(skills: Skills, marginTitle: Array<number>, marginSkill: Array<number>){
    return ([
        {text: ` ° skills  °`.toLocaleUpperCase(), style: 'detailsTitle', margin: marginTitle},
        skills.map((skill) => {
            return { text: skill, style: 'details', margin: marginSkill}
        })
    ])
}