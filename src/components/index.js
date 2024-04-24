import {keshav, anurag, abhay, kritika, aman, anushka, prashik, abhinav} from '../assets/teampics'
import { plumbing, technecian, housecleaning, massage, cloth2 } from '../assets/images';

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
  { id: 8, name: 'Payment', link: '/payment'},
  { id: 9, name: 'Slot' , link: '/slot'},
  // { id: 10, name: 'Upi', link: '/upi'}
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

const services = [
  {
    id: 1,
    name: 'Plumbing',
    desc: 'Plumbing',
    img: plumbing,
    page: 'Plumbing',
    url: 'plumbing',
    title: 'Plumbing Services',
    description: 'Our plumbing experts provide a wide range of services to meet your plumbing needs.',
    features: [
      'Pipe Repair and Installation',
      'Drain Cleaning',
      'Fixture Installation',
      'Water Heater Services',
    ]
  },
  {
    id: 2,
    name: 'Technician',
    desc: 'Technician',
    img: technecian,
    page: 'Technician',
    url: 'technecian',
    title: 'Technician Services',
    description: 'Our technicians are skilled in various technical services to meet your needs.',
    features: [
      'Electronic Repairs',
      'Appliance Installation',
      'Computer Services',
      'Network Setup',
    ]
  },
  {
    id: 3,
    name: 'House Cleaning',
    desc: 'House Cleaning',
    img: housecleaning,
    page: 'House',
    url: 'house',
    title: 'House Cleaning Services',
    description: 'Our professional cleaners will leave your home spotless with our thorough cleaning services.',
    features: [
      'Regular Cleaning',
      'Deep Cleaning',
      'Move-In/Out Cleaning',
      'Specialized Cleaning Services',
    ]
  },
  {
    id: 4,
    name: 'Cloth Washing',
    desc: 'Cloth Washing',
    img: cloth2,
    page: 'Cloth',
    url: 'cloth',
    title: 'Laundry Services',
    description: 'Leave your laundry worries to us! Our experts will handle your clothes with care.',
    features: [
      'Washing',
      'Drying',
      'Folding',
      'Ironing',
    ]
  },
  {
    id: 5,
    name: 'Massage',
    desc: 'Massage',
    img: massage,
    page: 'Massage',
    url: 'massage',
    title: 'Massage Services',
    description: 'Relax and rejuvenate with our professional massage services tailored to your needs.',
    features: [
      'Swedish Massage',
      'Deep Tissue Massage',
      'Hot Stone Massage',
      'Aromatherapy',
]
}
];


export {
  Users,
  Team,
  Links,
  services,
}