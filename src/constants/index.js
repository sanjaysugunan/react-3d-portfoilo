import {
    mobile,
    backend,
    creator,
    web,
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
    cbse,
    react,
    IITK,
    portfolio,
    tshirt,
    notes,
    threejs,
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
      title: "MERN Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Physics Undergrad",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Twelfth Grade",
      company_name: "CBSE",
      icon: cbse,
      iconBg: "#383E56",
      date: "March 2018 - April 2019",
      points: [
        "Studied Computer Science Stream on Twelfth Grade.",
        "Graduated with 83.4%.",
        "From Saraswathi Vidyaniketan Public School.",
        "Participated in various school related activities and been regular a part of sports.",
      ],
    },
    {
      title: "BS Physics",
      company_name: "IIT Kanpur",
      icon: IITK,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Present",
      points: [
        "Physics final year undergrad from one of India's most prestigious technical institute Indian Institute of Technology Kanpur.",
        "Relevant knowledge in major physics domains like Relativity, Quantum Physics, Statistical Physics, Thermal Physics, Mechanics and more.",
        "Implemented physics theory to physics experiments.",
        "Contributed in several physics and engineering related projects.",
      ],
    },
    {
      title: "MERN Web Developer",
      company_name: "Self Study",
      icon: react,
      iconBg: "#383E56",
      date: "Jun 2023 - Present",
      points: [
        "Developing web applications using React.js, Node.js, Mongodb, Express.js and other related technologies.",
        "Learning and Implementing various advanced technologies like ThreeJs,Tailwind CSS and Framer Motion to real-world applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Providing services on Full-Stack web applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Testimonals will be updated later. Waiting to gain few real-world experiences",
      name: "XYZ",
      designation: "CEO",
      company: "123 Enterprises",
      image: "https://simg.nicepng.com/png/small/289-2892199_admin-09-17-facebook-no-profile-pic-female.png",
    },
    {
      testimonial:
        "Testimonals will be updated later. Waiting to gain few real-world experiences",
      name: "XYZ",
      designation: "CEO",
      company: "123 Enterprises",
      image: "https://simg.nicepng.com/png/small/289-2892199_admin-09-17-facebook-no-profile-pic-female.png",
    },
    {
      testimonial:
        "Testimonals will be updated later. Waiting to gain few real-world experiences",
      name: "XYZ",
      designation: "CEO",
      company: "123 Enterprises",
      image: "https://simg.nicepng.com/png/small/289-2892199_admin-09-17-facebook-no-profile-pic-female.png",
    },
  ];
  
  const projects = [
    {
      name: "ThreeJs React Portfolio Website",
      description:
        "React based 3D Portfolio Web-Application built with Framer-Motion, Tailwind-CSS and ThreeJS with 3D models and advanced animations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framer motion",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/sanjaysugunan/react-3d-portfoilo",
      live_link: "https://s4njyy.netlify.app/",
    },
    {
      name: "ThreeJs React Tshirt Design Website",
      description:
        "React based Web Application built with ThreeJS, Framer-Motion and Tailwind CSS. Users can design their favorite tshirts and download image in png.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framer motion",
          color: "orange-text-gradient",
        },
      ],
      image: tshirt,
      source_code_link: "https://github.com/sanjaysugunan/3d-tshirt-react",
      live_link: "https://s4njy-3d-tshirt.netlify.app/",
    },
    {
      name: "NodeJS MongoDB Note Taking App",
      description:
        "Complete Backend Application build with NodeJS, MongoDb, EJS and Passport. Users can signup or login with google oauth and create their notes",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
        {
          name: "passport",
          color: "orange-text-gradient",
        },
      ],
      image: notes,
      source_code_link: "https://github.com/sanjaysugunan/nodejs-notes-app-monogodb",
      live_link: "https://nodejs-notes-app-s4njy.cyclic.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };