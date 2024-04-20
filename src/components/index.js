import {keshav, anurag, abhay, kritika, aman, anushka, prashik, abhinav} from '../assets/teampics'


const Users = [
  { id: 1, name: 'Keshav', age: 19 },
  { id: 2, name: 'Rahul', age: 25 },
  { id: 3, name: 'Rohit', age: 25 },
  { id: 4, name: 'Anurag', age: 19 },
  { id: 5, name: 'Rishabh', age: 20 },
  { id: 6, name: 'Vishesh', age: 21 },
  { id: 7, name: 'Shubh', age: 22 },
  { id: 8, name: 'Swyam', age: 21 },
]
const Links = [
  { id: 1, name: 'Home', link: '/'},
  { id: 2, name: 'Services', link: '/services'},
  // { id: 3, name: 'Portfolio', link: '/portfolio'},
  { id: 4, name: 'About', link: '/about'},
  { id: 5, name: 'Contact', link: '/contact'},
  // { id: 6, name: 'Team', link: '/team'},
  // { id: 7, name: 'Login', link: '/login'},
]

const Team = [
  { id: 1, name: 'Keshav Thakur', age: 16, src: keshav, work: 'Turn the website into react, making the home page, login page' },
  { id: 2, name: 'Abhay Sagar', age: 15, src: abhay , work: 'make the services page, about page'},
  { id: 3, name: 'Anurag Kumar', age: 17, src: anurag, work: ' create a api service for geolocation services'},
  { id: 4, name: 'Abhinav Sagar', age: 16, src: abhinav, work: 'crousal page' },
  { id: 5, name: 'Aman Verma', age: 15, src: aman, work: 'create the image and other graphics part'},
  { id: 6, name: 'Prashik Humane', age: 17, src: prashik, work: 'make the contact page'},
  { id: 7, name: 'Kritika Yadav', age: 16, src: kritika, work: 'make a payment page' },
  { id: 8, name: 'Anushka', age: 16, src: anushka, work: 'make a footer page' },
];



export {
  Users,
  Team,
  Links,
}