import {
  mongodb,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  xor,
  nowSoftware,
  gsn,
  inventory,
  eastClothing,
  devConnector,
  express,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Express.js",
    icon: express,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Node.js",
    icon: nodejs,
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
    name: "Express JS",
    icon: express,
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

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Global Solutions Network",
    icon: gsn,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: [
      "Designing and developing RESTful & GraphQL APIs with Node.js and MongoDB.",
      "Designing and developing complex user interfaces using React workflows.",
      "Translating wireframes and PSD Designs into functional web applications",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Working with development teams and managers to ideate software solutions.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Now Software Pvt. Ltd",
    icon: nowSoftware,
    iconBg: "#E6DEDD",
    date: "April 2020 - June 2021",
    points: [
      "Developing RESTful and GraphQL APIs with Node.js and Mongodb.",
      "Collaborating with front-end developers on the integration of APIs..",
      "Documenting Node.js processes, including database schemas, as well as preparing reports.",
      "Developing high-performance applications by writing testable, reusable, and efficient code.",
    ],
  },
  {
    title: "React Developer",
    company_name: "XorLogics",
    icon: xor,
    iconBg: "#383E56",
    date: "March 2019 - April 2020",
    points: [
      "Meeting with the development team to discuss user interface ideas and applications.",
      "Developing and implementing highly responsive user interface components using react concepts",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Documenting application changes and developing updates.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Umair proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Umair does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Umair optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Inventory & Stock Management Solution",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
    ],
    image: inventory,
    source_code_link:
      "https://github.com/umair-shehzad/inventory-management-solution",
    live_site_link: "https://inventory-management-solution.onrender.com/",
  },
  {
    name: "East Clothing",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "purple-text-gradient",
      },
    ],
    image: eastClothing,
    source_code_link: "https://github.com/umair-shehzad/east-clothing",
    live_site_link: "https://east-clothing-ecommerce.onrender.com",
  },
  {
    name: "DevConnector",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: devConnector,
    source_code_link: "https://github.com/umair-shehzad/devconnector",
    live_site_link: "https://devconnector-social.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
