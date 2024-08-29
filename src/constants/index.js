import {phone , mail, linkedin, github, uni, html, css, js, ts, reactJS, nextJS, bootstrap, tailwind, mongodb, mysql, java, nodeJS, check, person, home, expectation, future} from "../assets/icons"
import { AquaSerene, IceBerg, Qike } from "../assets/images";

export const socialMedia = [
    { src: phone, alt: "phone logo", value: "+971 54 736 5403"},
    { src: mail, alt: "mail logo", value: "s_ar_m@outlook.com"},
    { src: github, alt: "pin logo", value: "github.com/Axaerys"},
];

export const locations = [
    { src: linkedin, alt: "linkedin logo", value: "linkedin.com/in/sarm2001", link:"https://www.linkedin.com/in/sarm2001"},
    { src: uni, alt: "University logo", value: "Bachelors of CS<br />University of Wollongong", link:"https://www.uow.edu.au/"},
    // { src: pin, alt: "Location logo", value: "Dubai, UAE"},
];

export const education = [
    { title: "University of Wollongong", desc1: "<b>Graduated</b> with a Bachelor of Computer Science from the University of Wollongong in Dubai in July 2023. Recognized as the Top Graduate in November 2023, I honed my skills in software development, problem-solving, and cutting-edge technologies during my studies.", year: "2020-2023"},
    { title: "Online Courses", desc1: "<b>Expanded</b> my development skills through online courses in TailwindCSS, Bootstrap, ReactJS, and NodeJS. These courses provided me with hands-on experience in building responsive web applications, mastering front-end design systems, and developing robust back-end solutions.", year: "2023-2024"},
];

export const experience = [
    { title: "IceBerg Financial", desc1: "<b>Developed and maintained</b> responsive web applications (HTML, CSS, JS, Bootstrap, Git) for Iceberg Financial, ensuring seamless user experience across various devices.", desc2: "<b>Implemented</b> advanced UI components (incorporated different UI libraries while also creating components from scratch), enhancing the visual appeal and functionality of the User Experience.", desc3: "<b>Created</b> dynamic data visualization components, enabling users to interact with complex financial data intuitively.", desc4: "<b>Conducted</b> thorough testing and debugging to ensure robust and error-free user interfaces for Iceberg Financial's clients.", year: "Lead-Frontend Developer<br />2023-2024"},
];

export const skills = [
    { title: "HTML5", rating: "95%", logo: html},
    { title: "CSS3", rating: "90%", logo: css},
    { title: "JavaScript", rating: "80%", logo: js},
    { title: "TypeScript", rating: "60%", logo: ts},
    { title: "ReactJS", rating: "80%", logo: reactJS},
    { title: "NextJS", rating: "40%", logo: nextJS},
    { title: "BootStrap", rating: "80%", logo: bootstrap},
    { title: "TailwindCSS", rating: "90%", logo: tailwind},
    { title: "MongoDB", rating: "80%", logo: mongodb},
    { title: "MySQL", rating: "80%", logo: mysql},
    { title: "Java", rating: "90%", logo: java},
    { title: "NodeJS", rating: "70%", logo: nodeJS},
]

export const projects = [
    { title: "AquaSerene", desc: "The AquaSerene app is a user-friendly booking solution for a fictional spa. It lets clients browse services, check real-time availability, and book/manage appointments.", link: "https://www.facebook.com", img: AquaSerene, alt:"AquaSerene"},
    { title: "Iceberg", desc: "The IceBerg Financial app features a sleek, intuitive front-end design that delivers seamless access to financial solutions.", link: "https://iceberg.financial/home.html", img: IceBerg, alt:"IceBerg"},
    { title: "Nike", desc: "The Qike app features a sleek front-end design that reflects the brand's energy. Users can easily browse collections and explore features for an engaging experience.", link: "https://www.facebook.com", img: Qike, alt:"Qike"},
    
]


export const abouts = [
    { title: "Personal", desc: "I am a driven and adaptable professional, born in September 2001, with a Bachelor's degree in Computer Science.  I have been told I am resourceful, detail-oriented, and innovative.", logo: person, alt:"person"},
    { title: "Residency", desc: "I am Iranian by nationality and have lived mostly in Dubai since 2004. Dubai offers a unique blend of cultures and experiences that have shaped my identity and perspective.", logo: home, alt:"home"},
    { title: "Expectations", desc: "In a front-end job, I seek engaging design projects, creative challenges, and opportunities for growth along with a fair wage that reflects my skills and contributions.", logo: expectation, alt:"expectation"},
    { title: "Future", desc: "I envision becoming a full-stack developer, mastering both front-end and back-end technologies. Additionally, I want to start my own business on the side,", logo: future, alt:"future"},
]
