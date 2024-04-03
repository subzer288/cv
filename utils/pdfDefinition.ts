import data from './../data'

import margins from './Margins'

import education from '../sections/Education'
import jobs from '../sections/Jobs'
import courses from '../sections/Courses'
import header from '../sections/Header'
import links from '../sections/Links'
import skills from '../sections/Skills'
import knowledge from '../sections/Knowledge'
import profile from '../sections/Profile'
import languages from '../sections/Languages'

let docDefinition: any = {
    content: [
        header(data.sections.contact),
        {columns: [
            {
              width: '30%',
              stack: [
                links(data.sections.links, margins.marginTitle, margins.marginSkill),
                skills(data.sections.skills, margins.marginTitle, margins.marginSkill),
                knowledge(data.sections.knowledge, margins.marginTitle, margins.marginSkill),
                languages(data.sections.languages, margins.marginTitle, margins.marginSkill)
              ]
            },
            {
              width: '70%',
              stack: [
                profile(data.sections.profile, margins.marginTitle),
                jobs(data.sections.jobs, margins.marginTitle, margins.marginSkill),
                education(data.sections.education, margins.marginTitle, margins.marginSkill),
                courses(data.sections.courses, margins.marginTitle, margins.marginQr),
              ]
            }
          ],
          // optional space between columns
          columnGap: 10
        }
    ],
    styles: {
        header: {
            fontSize: 23,
        },
        subheader: {
            fontSize: 9,
        },
        detailsTitle:{
            fontSize: 10,
            bold: true
        },
        details:{
            fontSize: 9,
        },
        title:{
            fontSize: 10,
            bold: true
        },
        date:{
            fontSize: 9,
            color: 'gray',
            italics: true
        },
        activity:{
            fontSize: 10,
        },
        icon: { font: 'Fontello' },
        link: {
          color: 'blue'
        }
      }
};

export default docDefinition;