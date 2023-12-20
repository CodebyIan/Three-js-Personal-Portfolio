import {
  designer,
  frontend,
  backend,
  backend_icon,
  frontend_icon,
  designer_icon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  restaurant,
  pixxar,
  weather,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: designer,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    work_type: "Freelancer",
    icon: frontend_icon,
    iconBg: "#383E56",
    date: "Date: 2016 - 2018",
    points: [
      "Started with mastering HTML and CSS, laying the foundation for structuring content and styling in web development.",
      "Progressed to JavaScript to introduce dynamic behavior, enhancing my skills in interactive frontend development.",
      "Explored frameworks like React to build modular and efficient user interfaces, deepening my understanding of frontend technologies.",
      "Actively engaged in coding communities, seeking mentorship and leveraging collective knowledge to overcome challenges.",
      "Fueled by a continuous learning mindset and passion for crafting engaging user experiences, I am on an evolving journey as a frontend developer.",
    ],
  },
  {
    title: "Backend Developer",
    work_type: "Freelancer",
    icon: backend_icon,
    iconBg: "#E6DEDD",
    date: "Date: 2019 - 2021",
    points: [
      "Initiated my backend web development journey by grasping core concepts such as server-side scripting and databases.",
      "Expanded my skills in server-side languages like Node.js, learning to handle server logic and data interactions.",
      "Dived into database management systems such as MongoDB and SQL, understanding how to store and retrieve data efficiently.",
      "Explored frameworks like Express.js to streamline backend development processes and enhance scalability.",
      "Actively participated in online communities, seeking guidance and collaborating with peers to navigate challenges in backend development.",
    ],
  },
  {
    title: "Web Designer",
    work_type: "Freelancer",
    icon: designer_icon,
    iconBg: "#383E56",
    date: "Date 2022 - 2023",
    points: [
      "Commenced my web design journey by studying principles of UI/UX, emphasizing aesthetics and user-centric design.",
      "Gained proficiency in graphic design tools like Adobe XD and Figma, translating creative concepts into visually appealing mockups.",
      "Explored responsive design techniques, ensuring seamless user experiences across various devices and screen sizes.",
      "Acquired knowledge of typography, color theory, and layout, refining my ability to create visually cohesive and engaging designs.",
      "Engaged with design communities, actively seeking feedback and staying updated on industry trends to continually elevate my web design skills.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const myProjects = [
  {
    name: "Restaurant",
    description: "Grilli is online restaurant web app developed by ©CodebyIan.",
    tags: [
      {
        name: "HTML5",
        color: "red-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link:
      "https://github.com/CodebyIan/Grilli_Online_Restaurant_Website",
    web_link: "https://grilli-online-restaurant.netlify.app/",
  },
  {
    name: "Pixxar",
    description: "Pixxar is a stock media web app eloped by ©CodebyIan.",
    tags: [
      {
        name: "HTML5",
        color: "red-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: pixxar,

    source_code_link: "https://github.com/CodebyIan/Photo_Stock_Media_Platform",
    web_link: "https://pixxar-media.netlify.app/",
  },
  {
    name: "Weather",
    description:
      "Weatherio is a weather forecast web app developed by ©CodebyIan.",
    tags: [
      {
        name: "HTML5",
        color: "red-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/CodebyIan/Weather_Forecast_Website",
    web_link: "https://weatherio-forecast.netlify.app/#/current-location",
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ian does.",
    name: "Stephen Ndirangu",
    designation: "CEO",
    company: "Giovannis",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    testimonial:
      "After Ian optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lily Muthoni",
    designation: "CEO",
    company: "MyFashion",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ian proved me wrong.",
    name: "Brain Kiragu",
    designation: "CEO",
    company: "Dmfano",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

export { services, technologies, experiences, testimonials, myProjects };
