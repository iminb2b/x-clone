export type ExperienceInfo = {
  name: string;
  date: string;
  description?: string[];
  achievements?: string[];
  relevantCourse?: string[];
};

export const educationList: ExperienceInfo[] = [
  {
    name: "Computer Engineering Technology at Humber College Institute of Technology & Advanced Learning",
    date: "September 2018 - May 2021",
    relevantCourse: [
      "Data Structures and Algorithms, Web Development, Software Engineering",
    ],
    achievements: ["Dean's List"],
  },
  {
    name: "Planning And Development at National Economic University (Vietnam)",
    date: "September 2016 - December 2017",
  },
];

export const experienceList: ExperienceInfo[] = [
  {
    name: "Front-end Developer at Asl19",
    date: "2022 - now",
    description: [
      "Development web and mobile front-end application using Typescript and React.",
      "Collaborate with back-end developers and web designers to improve usability",
      "Code and deploy applications in a cross platform, cross browser environment; ensure applications are compatible with required operating system and browser versions.",
    ],
    achievements: [
      "Actively contributed to the design and development of user interfaces, including the incorporation of new features and the seamless integration of frontend to backend systems. Additionally, played a key role in the ongoing maintenance and optimization of these projects, ensuring their continued functionality and effectiveness across a diverse range of environments and requirements, totaling over 20 projects",
      "Successfully implemented a Google browser extension and participated in building shared packages, strategically designed to streamline processes and enhance efficiency across all company projects",
    ],
  },
  {
    name: "Front-end Developer Intern at LOOCREATIVE",
    date: "October 2021 - December 2021",
    description: [
      "Development web and mobile front-end application using HTML,CSS, JS and React.",
      "Tested cross-browser compatibility of webpages and applications.",
      "Build performant, decoupled, testable, maintainable, and reuseable code.",
    ],
  },
];
