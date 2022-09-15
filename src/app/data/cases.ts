import { ICase } from '../interfaces';

export const CASES: ICase[] = [
  {
    id: 1,
    label: 'Etoodle',
    description: 'Etoodle - Project for connecting students and tutors. Studying subjects with using grouping video chat, online drawing board and chat. Users can coordinate time in schedule, creating portfolio, pay for service',
    selected: true,
    collapsed: false,
    portrait: false,
    images: [
      'etoodle-1.png',
      'etoodle-2.png',
      'etoodle-3.png',
      'etoodle-4.png',
      'etoodle-5.png',
      'etoodle-6.png',
      'etoodle-7.png'
    ],
    technologies: [
      'C#, ASP.NET MVC 4',
      'jQuery, Javascript, jQuery UI',
      'HTML5, CSS',
      'Linq to SQL, MSSQL, Wowza, Java'
    ]
  },
  {
    id: 2,
    label: 'OneKopi',
    description: 'OneKopi - Project for connecting different type of organizations like kindergartens, schools, universities, etc. Parents could choose any type of organization for their children. Parents have their own online-office, where they can pay invoices from organizations, see how their applications are processed.',
    selected: false,
    collapsed: false,
    portrait: false,
    images: [
      'onekopi-1.png',
      'onekopi-2.png',
      'onekopi-3.png',
      'onekopi-4.png',
      'onekopi-5.png'
    ],
    technologies: [
      'C#, ASP.NET MVC 3',
      'jQuery, Javascript, HTML5, CSS',
      'MySQL, Nhibernate'
    ]
  },
  {
    id: 3,
    label: 'Juke',
    description: 'Juke - Huge media market for German audience, where you are able to buy: Music, Video, Books and Games. Has a 3rd party Umbraco CMS for Content mangers, services for email notifications and content cashing from 3rd party content providers.',
    selected: false,
    collapsed: false,
    portrait: true,
    images: [
      'juke-1.png',
      'juke-2.png',
      'juke-3.png'
    ],
    technologies: [
      'C#, ASP.NET MVC 4 Multi-Threading',
      'Rest API',
      'jQuery, Angular, React, TypeScript',
      'MSSQL, Entity Framework 6'
    ]
  },
  {
    id: 4,
    label: 'Bendigo',
    description: 'Bendigo - Project for Bendigo Senior Secondary College to take a survey from students. System administrator can change, create survey questions and link them depend on each other answers. System involve plenty of reports that help to get info about subscribed students for lessons and his healthy info.',
    selected: false,
    collapsed: false,
    portrait: false,
    images: [
      'bendigo-1.png',
      'bendigo-2.png',
      'bendigo-3.png',
      'bendigo-4.png'
    ],
    technologies: [
      'C#, ASP.NET WebdForm',
      'jQuery, Javascript, HTML5, CSS',
      'MSSQL, Nhibernate'
    ]
  }
];
