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
import jsbn from './images/logos/logo-b&n/jsbn.png'
import mysqlbn from './images/logos/logo-b&n/mysqlbn.png'
import nodebn from './images/logos/logo-b&n/nodebn.png'
import reactbn from './images/logos/logo-b&n/reactbn.png'
import sassbn from './images/logos/logo-b&n/sassbn.png'
// eslint-disable-next-line
import typebn from './images/logos/logo-b&n/typebn.png'
// eslint-disable-next-line
import firebasebn from './images/logos/logo-b&n/firebasebn.png'
// eslint-disable-next-line
import herokubn from './images/logos/logo-b&n/herokubn.png'

export const projectData = [
  {
    title:'Psychologist web',
    image:bianca,
    stacks:[htmlbn,cssbn,nextbn],
    url:'https://lic-bianca.netlify.app/',
    repository:'https://github.com/ArchCris/lic-bian-web',
    description:'This website for a psychologist features a minimal and simple design that eliminates the need for scrolling. It incorporates a contact form with data validation, ensuring accurate and reliable information. The contact form securely sends emails directly to a Gmail address. To achieve this functionality, I implemented Formik and Yup for form validation and utilized Nodemailer to handle the email messages.'
  },
  {
    title:'Movie App',
    image:movieApp,
    stacks:[reactbn,cssbn,nodebn,mysqlbn],
    url:'https://movieapp-crissmdev-mysql.netlify.app',
    repository:'https://github.com/ArchCris/movieApp-react-mysql-v3',
    description:'This app is developed with React and consumes an API to provide access to trending movies as well as specific ones. Additionally, I have integrated a MySQL database to handle user logins and comments. To ensure seamless user experience, I employ Express sessions for persistent user data storage within the browser.'
  },
  {
    title:'Permingeat Studio',
    image:permingeat,
    stacks:[htmlbn,sassbn,jsbn],
    url:'http://estudiopermingeat.com',
    repository:'https://github.com/ArchCris/PermingeatWeb',
    description:"This website showcases the work of an Architecture studio based in Barcelona. Crafted using HTML, Sass, and a touch of JavaScript, the website reflects a minimalistic and aesthetic design philosophy. It provides a visually engaging experience to explore the studio's portfolio, projects, and services. Immerse yourself in the sleek and elegant world of architecture as you navigate through this captivating website."
  },
  {
    title:'To-do App',
    image:todoApp,
    stacks:[reactbn,cssbn],
    url:'https://todoapp-crissmdev.netlify.app',
    repository:'https://github.com/ArchCris/toDoApp',
    description:'This TodoApp allows you to efficiently manage and track your activities. The app utilizes local storage to ensure that your tasks persist even if you close or refresh the browser. Additionally, a footer section provides useful statistics about your tasks, giving you valuable insights into your productivity.'
  }
  ,
  {
    title:'Tip App',
    image:tipApp,
    stacks:[htmlbn,cssbn,jsbn],
    url:'https://tip-calculator-f-m.netlify.app',
    repository:'https://github.com/ArchCris/11.tip-calculator-app-main',
    description:'This aesthetic app is designed to calculate tips effortlessly. Built with vanilla JavaScript and CSS, it provides a user-friendly interface to input the bill amount, select the tip percentage, and specify the number of people. The app then automatically calculates and displays the tip amount and the total bill, ensuring accurate splits for each individual.'
  }
]