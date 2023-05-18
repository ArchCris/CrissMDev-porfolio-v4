/*MAIN IMAGES*/
import permingeat from './images/projects/permingeat.jpg'
import todoApp from './images/projects/todoApp.jpg'
import tipApp from './images/projects/tipApp.jpg'
import bianca from './images/projects/bianca.jpg'
import movieApp from './images/projects/movieApp.jpg'
/*STACK*/
import htmlbn from './images/logos/logo-b&n/htmlbn.png'
import cssbn from './images/logos/logo-b&n/cssbn.png'
import nextbn from './images/logos/logo-b&n/nextbn.png'
// eslint-disable-next-line
import firebasebn from './images/logos/logo-b&n/firebasebn.png'
// eslint-disable-next-line
import herokubn from './images/logos/logo-b&n/herokubn.png'
import jsbn from './images/logos/logo-b&n/jsbn.png'
import mysqlbn from './images/logos/logo-b&n/mysqlbn.png'
import nodebn from './images/logos/logo-b&n/nodebn.png'
import reactbn from './images/logos/logo-b&n/reactbn.png'
import sassbn from './images/logos/logo-b&n/sassbn.png'
// eslint-disable-next-line
import typebn from './images/logos/logo-b&n/typebn.png'

export const projectData = [
  {
    title:'Psychologist web',
    image:bianca,
    stacks:[htmlbn,cssbn,nextbn],
    url:'https://lic-bianca.netlify.app/',
    repository:'https://github.com/ArchCris/lic-bian-web',
    description:'Website for a psychologist, the brief was minal simple without scrolling and a contact form with validation that send mail straigth to a Gmmail adress'
  },
  {
    title:'Movie App',
    image:movieApp,
    stacks:[reactbn,cssbn,nodebn,mysqlbn],
    url:'https://movieapp-crissmdev-mysql.netlify.app',
    repository:'https://github.com/ArchCris/movieApp-react-mysql-v3',
    description:'App developed with REACT consuming API and using a MySQL database to handle the logings and the comments, also using express sessions for the users'
  },
  {
    title:'Permingeat Studio',
    image:permingeat,
    stacks:[htmlbn,sassbn,jsbn],
    url:'http://estudiopermingeat.com',
    repository:'https://github.com/ArchCris/PermingeatWeb',
    description:'Website for an Architect built with html scss and a little of javascript'
  },
  {
    title:'To-do App',
    image:todoApp,
    stacks:[reactbn,cssbn],
    url:'https://todoapp-crissmdev.netlify.app',
    repository:'https://github.com/ArchCris/toDoApp',
    description:'TodoApp to keep track to your activities with persistance in the browser and a footer with some stats about the tasks'
  }
  ,
  {
    title:'Tip App',
    image:tipApp,
    stacks:[htmlbn,cssbn,jsbn],
    url:'https://tip-calculator-f-m.netlify.app',
    repository:'https://github.com/ArchCris/11.tip-calculator-app-main',
    description:'App to calculate tips with percentages and between the amount of people, also with a reset button and automatic response'
  }
]