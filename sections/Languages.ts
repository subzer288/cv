import { isArray } from "util"
import { Language } from "../interfaces/Languages"
import makeCanva from "../utils/makeCanva"

export default function languages(data: Array<Language>, marginTitle: Array<number>, marginSkill: Array<number>){
    return ([
        {text: ` ° languages  °`.toLocaleUpperCase(), style: 'detailsTitle', margin: marginTitle},
        data.map((language) => {
            if(language.value){
                return ([{ text: language.language, style: 'details', margin: marginSkill},
                    makeCanva(language.value)])
            }else{
                return ([{ text: `${language.language} (Native)`, style: 'details', margin: marginSkill},])
            }
        })
    ])
}