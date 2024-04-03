import Details from "../interfaces/Contact"

export default function header(data: Details){
    return ([
        { text: data.name.toLocaleUpperCase(), alignment: 'center', style: 'header' },
        {text: [
            {text: `${data.level} `},
            {text: '', style: 'icon' },
            {text: `${data.city}, ${data.country}, `},
            { text: '', style: 'icon' },
            {text: ` ${data.phoneNumber}, `},
            { text: '', style: 'icon' },
            {text: ` ${data.phoneNumber2}, `},
            
        ], alignment: 'center', style: 'subheader'},
    ])
}