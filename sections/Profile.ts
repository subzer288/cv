import Profile from "../interfaces/Profile";


export default function profile(data: Profile, margins: Array<number>){
    return ([
        {text: [
            { text: '', style: 'icon' },
            {text: ` profile`.toLocaleUpperCase(), style: 'title', }
        ], margin: margins},
        {text: data.text, style: 'activity', margin: margins},
    ])
}