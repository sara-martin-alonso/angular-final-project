import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


about : object = 
  {
    hello: 'Hi! My name is Sara Martin-Alonso.',
    presentation__left : 'I am a junior frontend developer with a diverse background in linguistics, philology, photography, origami, and improvising theatre.',
    presentation__right: `I studied Spanish Philology at University, and I'm keen on anything related with languages, communication and arts. This text is supposed to be longer but I'm still working on it. I hope you are doing fine! `,
    education__h2: 'Education',
    skills__h2:'Skills*',
    skills__button:'Turn around all',
    skills__note:'* This webpage is built with Angular',
    warn:'scroll down',

  }
aboutES : object = 
{
  hello: '¡Hola! Me llamo Sara Martin Alonso.',
  presentation__left : 'Soy una desarrolladora web frontend junior con una formación diversa en lingüística, filología, fotografía, origami e improvisación teatral.',
    presentation__right: 'He estudiado Filología Hispánica y me encanta todo lo relacionado con los lenguajes, la comunicación y el arte. Este texto debería ser más largo pero todavía estoy trabajando en ello. ¡Espero que este mensaje te encuentre bien!',
    education__h2: 'Educación',
    skills__h2:'Conocimientos*',
    skills__button:'Girar todos',
    skills__note:'* Esta página está desarrollada en Angular',
    warn:'Desplaza hacia abajo',

}

  education : Array<object> = [
    {
      year: 2020,
      title: 'PHP & MySQL Workshop',
      institution: 'Trazos',
      
    },
    {
      year: 2020,
      title: 'Javascript, jQuery & Angular2 Workshop',
      institution: 'Trazos',
      
    },
    {
      year: 2020,
      title: 'HTML5 & CSS3 Workshop',
      institution: 'Trazos',
      
    },
    {
      year: 2017,
      title: 'Master in Teacher Training in Compulsory Secondary and Upper Secondary School Education, Vocational Training and Languages',
      institution: 'Universidad de Málaga',
      
    },
    {
      year: 2014,
      title: 'Master in Spanish as a Second Language',
      institution: 'Universidad Complutense de Madrid',
      
    },
    {
      year: 2010,
      title: 'Degree in Spanish Philology',
      institution: 'Universidad Complutense de Madrid',
      
    },
  ]
  educationES : Array<object> = [
    {
      year: 2020,
      title: 'Curso de PHP y MySQL',
      institution: 'Trazos',
      
    },
    {
      year: 2020,
      title: 'Curso de Javascript, jQuery y Angular2',
      institution: 'Trazos',
      
    },
    {
      year: 2020,
      title: 'Curso de HTML5 y CSS3',
      institution: 'Trazos',
      
    },
    {
      year: 2017,
      title: 'Máster en Profesorado de Educación Secundaria Obligatoria y Bachillerato, Formación Profesional y Enseñanza de Idiomas',
      institution: 'Universidad de Málaga',
      
    },
    {
      year: 2014,
      title: 'Máster de Español como Segunda Lengua',
      institution: 'Universidad Complutense de Madrid',
      
    },
    {
      year: 2010,
      title: 'Grado en Español: Lengua y Literatura',
      institution: 'Universidad Complutense de Madrid',
      
    },
  ]

  projectsES : Array<object>=[
    {
      title: 'Título 1',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem.jpg',
      class: 'center'
    },
    {
      title: 'Título 2',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem2.jpg',
    },
    {
      title: 'Título 3',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem3.jpg',
    },
    {
      title: 'Título 4',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem4.jpg',
    },
    {
      title: 'Título 5',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/1.jpg',
    },
  ]
  
  projects : Array<object>=[
    {
      title: 'Title1',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem.jpg',
      class: 'center'
    },
    {
      title: 'Title2',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem2.jpg',
    },
    {
      title: 'Title3',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem3.jpg',
    },
    {
      title: 'Title4',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/lorem4.jpg',
    },
    {
      title: 'Title5',
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur eros facilisis, scelerisque risus a, sollicitudin mauris. Nunc eu tincidunt augue.',
      url : '/assets/img/1.jpg',
    },
    
    
  ]
  
  projectsText:object={'warn' : '* Click to see more *'}
  projectsTextES:object={'warn' : '* Haz click para más información *'}

  skills : Array<object> = [
    {
      title: 'HTML5',
      url: '',
      icon: 'fab fa-html5',
      color: '#e34c26'
    },
    {
      title: 'CSS3',
      url: '',
      icon: 'fab fa-css3-alt', 
      color: '#264de4'
    },
    {
      title: 'Sass',
      url: '',
      icon: 'fab fa-sass', 
      color: '#CD6799'
    },
    {
      title: 'JavaScript',
      url: '',
      icon: 'fab fa-js-square',
      color: '#f0db4f '
    },
    {
      title: 'Angular',
      url: '',
      icon: 'fab fa-angular',
      color: '#dd1b16'
    },
    {
      title: 'PHP',
      url: '',
      icon: 'fab fa-php',
      color: '#8993be'
    },
    {
      title: 'MySQL',
      url: '',
      icon: 'fas fa-database',
      color: '#00758F'
    },
    {
      title: 'Adobe Photoshop',
      color: '#18152E',
      icon: 'fas fa-square',
    },
    {
      title: 'Adobe Lightroom',
      color: '#091D29',
      icon: 'fas fa-square',
    }
   
   
  ]


  rrssData : Array<object> = [
   {
     href: 'https://www.linkedin.com/in/sara-mart%C3%ADn-927a07aa/',
     icon : 'fab fa-linkedin',
   },
   {
     href: 'https://github.com/SaraMartin-Alonso',
     icon : 'fab fa-github-alt',
   },
  ]
}
