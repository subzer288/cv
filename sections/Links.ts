import Link from "../interfaces/Link";

export default function links(links: Array<Link>, marginTitle: Array<number>, marginSkill: Array<number>){
    return ([
        {text: ` ° Contact °`.toLocaleUpperCase(), style: 'detailsTitle', margin: marginTitle},
        links.map((link) => {
            return ({text: [
                { text: link.icon, style: 'icon' },
                { text: link.detail, link: `${link.link}`, style: ['details', 'link'], margin: marginSkill }
            ]})
        })]);
}