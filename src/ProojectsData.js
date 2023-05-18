/*MAIN IMAGES*/
import permingeat from './images/projects/permingeat.jpg'
import todoApp from './images/projects/todoApp.jpg'
import tipApp from './images/projects/tipApp.jpg'
import bianca from './images/projects/bianca.jpg'
import movieApp from './images/projects/movieApp.jpg'
/*STACK*/

export const projectData = [
  {
  title:'Bianca psychologist',
  image:bianca,
  url:'https://lic-bianca.netlify.app/',
  repository:'https://github.com/ArchCris/lic-bian-web',
  description:'Website for a psychologist, the brief was minal simple without scrolling and a contact form with validation that send mail straigth to a Gmmail adress'
  },
  {
    title:'Movie App',
    image:movieApp,
    url:'https://movieapp-crissmdev-mysql.netlify.app',
    repository:'https://github.com/ArchCris/movieApp-react-mysql-v3',
    description:'App developed with REACT consuming API and using a MySQL database to handle the logings and the comments, also using express sessions for the users'
  },
  {
    title:'Permingeat Studio',
    image:permingeat,
    url:'http://estudiopermingeat.com',
    repository:'https://github.com/ArchCris/PermingeatWeb',
    description:'Website for an Architect built with html scss and a little of javascript'
  },
  {
    title:'Todo App',
    image:todoApp,
    url:'https://todoapp-crissmdev.netlify.app',
    repository:'https://github.com/ArchCris/toDoApp',
    description:'TodoApp to keep track to your activities with persistance in the browser and a footer with some stats about the tasks'
  }
  ,
  {
    title:'Tip App',
    image:tipApp,
    url:'https://lic-bianca.netlify.app/',
    repository:'https://github.com/ArchCris/lic-bian-web',
    description:'App to calculate tips with percentages and between the amount of people, also with a reset button and automatic response'
  }
]