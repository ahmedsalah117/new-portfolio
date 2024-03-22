import admin from "./images/adminDashboard.png";
import movies from "./images/moviesHome.jpg";
import games from "./images/game-over-home.jpg";
import forkify from "./images/forkify.JPG";
import mapty from "./images/mapty.PNG";
import bankist from "./images/bankist.PNG";
import food from "./images/food.PNG";
import crud from "./images/crud.PNG";
import expenses from "./images/expenses.PNG";
import bankistAdvanced from "./images/bankist-advanced.jpg";
import figma2 from "./images/Figma_clone_pic_2.jpg";

export const skills = [
  "Html",
  "CSS",
  "Bootstrap",
  "TailwindCSS",
  "SCSS",
  "JavaScript",
  "JQuery",
  "Typescript",
  "React",
  "Next JS",
  "React Native",
  "Electron JS",
  "C++",
  "C#",
  "SQL",
  "Node.JS",
  "Redux",
  "Node JS",
  "MUI",
  "Framer Motion",
  "Jest",
  "Git",
  "GitHub",
  "Figma",
  "React Styled Components",
];

export const experience = [
  // DigiCrafterz
  {
    jobTitle: "Front-End Developer",
    jobDesc: [
      "Developing and maintaining web and desktop applications using React, Next.js,and Electron.js.",
      " Playing a key role in cross-platform application development, leveraging Electron.js to reach a broader audience with consistent user experience.",
      " Collaborating with the design and product teams to create visually appealing and user-friendly interfaces that meet project requirements and goals.",
    ],
    jobDate: "Nov 2023 - Present",
    company: "DigiCrafterz",
  },
  {
    jobTitle: "Front-End Developer",
    jobDesc: [
      "Developing and maintaining web applications using NextJS, React, and Electron JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    jobDate: "Jan 2023 - Nov 2023",
    company: "Terminal",
  },
  {
    jobTitle: "Front End Web Developer Trainee",
    jobDesc: [
      "Acquired strong foundations in computer science fundamentals, including Object-Oriented Programming (OOP), Data Structures, and Algorithms, using C++",
      "Developed proficiency in a wide range of web development technologies, including HTML, CSS, Sass, Bootstrap, JavaScript, TypeScript, jQuery, React JS, Redux, Git, and GitHub",
      "Participated in hands-on projects and exercises, applying learned concepts to real-world scenarios and enhancing problem-solving skills",
      "Showcased proficiency in React JS by developing projects that leveraged its component-based architecture and state management capabilities",
    ],
    jobDate: "Jul 2022 - Dec 2022",
    company: "Route Academy",
  },
  {
    jobTitle: "Senior Business Technical Support & Billing Agent",
    jobDesc: [
      " Represented the First-level of Business customer troubleshooting to Altice business customers, over the phone",
    ],
    jobDate: "Apr 2022 - Dec 2022",
    company: "Altice USA",
  },
  {
    jobTitle: "Corporate Executive Customer Relations Specialist",
    jobDesc: [
      " Responsible for resolving the most highly escalated customer-initiated issues received by internal & partner employees, agencies, and executives to obtain the best possible resolution while maintaining the highest professional standards.",
    ],
    jobDate: "Nov 2021 - Mar 2022",
    company: "Altice USA",
  },
  {
    jobTitle: "Residential Technical Support & Billing Agent",
    jobDesc: [
      " Successfully resolved technical issues and billing inquiries for a huge number of residential customers on a daily basis, maintaining a customer satisfaction rating of 98%",
    ],
    jobDate: "May 2020 - Oct 2021",
    company: "Altice USA",
  },
];

export const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Figma clone",
    desc: "A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.",
    img: figma2,
    link: "https://figma-clone-delta.vercel.app/",
    repo: "https://github.com/ahmedsalah117/figma_clone",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Admin Dashboard",
    desc: "This application is designed for managing and visualizing data in a user-friendly and customizable manner. It includes various components such as a calendar, kanban board, color picker, and a text editor.",
    img: admin,
    link: "https://ahmedsalah117.github.io/admin-dashboard/",
    repo: "https://github.com/ahmedsalah117/admin-dashboard/tree/master",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "The Movies App",
    desc: "A professional and visually appealing platform that showcases the latest trending movies and actors. You can use the following credentials to login:email : testtest@testtest.com & pass : Ahmed@1171998",
    img: movies,
    link: "https://ahmedsalah117.github.io/The-movies-app/",
    repo: "https://github.com/ahmedsalah117/The-movies-app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Game Over",
    desc: `Single Page React JS Application (SPA) which displays video games playable on both web browsers and Windows. You can use the following credentials to login. email: testtest@testtest.com & password: Ahmed@1171998`,
    img: games,
    link: "https://ahmedsalah117.github.io/game-over/",
    repo: "https://github.com/ahmedsalah117/game-over",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Food Order App",
    desc: `This is a demo food order app. Through this project I managed to create a great opportunity to sharpen my skills in React context API, handling HTTP requests, and user input handling (forms).`,
    img: food,
    link: "https://ahmedsalah117.github.io/food-order-application/",
    repo: "https://github.com/ahmedsalah117/food-order-application",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Forkify",
    desc: `This project was developed to practice my JavaScript skills in various areas especially OOP , DOM manipulation and the MVC architecture.`,
    img: forkify,
    link: "https://6483915c30c84a1898e3cfe9--forkify-ahmed-bahnasy.netlify.app/",
    repo: "https://github.com/ahmedsalah117/forkify-app",
  },
  {
    id: 7,
    color: "from-purple-300 to-red-300",
    title: "Mapty",
    desc: `This app allows users to track their running and cycling activities using the Leaflet library to display a map and the geolocation API to determine the user's coordinates and display them on the map.`,
    img: mapty,
    link: "https://ahmedsalah117.github.io/Mapty-app/",
    repo: "https://github.com/ahmedsalah117/Mapty-app",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Bank Landing Page",
    desc: `This is a simple bank landing page built using Html , CSS , and Javascript . This was mainly built to practice advanced JS DOM Manipulation, and images lazy loading.`,
    img: bankistAdvanced,
    link: "https://ahmedsalah117.github.io/bankist-advanced/",
    repo: "https://github.com/ahmedsalah117/bankist-advanced",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300",
    title: "Bankist",
    desc: `This is a simple demo bank application built using Html , CSS , and Javascript . This was mainly built to practice JS array methods , dates , times , Numbers , and Math methods. The app was built in an amazing UI. You can use the user 'js' and pin '1111' to try it out.`,
    img: bankist,
    link: "https://ahmedsalah117.github.io/Bankist-app/",
    repo: "https://github.com/ahmedsalah117/Bankist-app",
  },
  {
    id: 10,
    color: "from-purple-300 to-red-300",
    title: "Expenses Calculator",
    desc: `This is an expenses tracker app that helps users track all of their expenses in an organized way and have a yearly overview of their expenses.`,
    img: expenses,
    link: "https://ahmedsalah117.github.io/Expenses-Tracker/",
    repo: "https://github.com/ahmedsalah117/Expenses-Tracker",
  },
  {
    id: 11,
    color: "from-purple-300 to-red-300",
    title: "CRUD System",
    desc: `This is a CRUD system built using JavaScript and Bootstrap to make sure I grasped the fundamentals of JavaScript. The app allows users to enter product information and store it in the browser's local storage. Users can view, update, and delete the product information.`,
    img: crud,
    link: "https://ahmedsalah117.github.io/CRUD-System/",
    repo: "https://github.com/ahmedsalah117/CRUD-System",
  },
];
