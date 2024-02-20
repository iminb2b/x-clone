import { FC, useContext } from "react";
import { css } from "@emotion/react";
import {
  contentContainer,
  sectionDescription,
  sectionService,
  sectionTitle,
} from "@/styles/generalStyles";
import colors from "@/value/colors";
import HomePageProjectsListItem from "./HomePageProjectsListItem";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import { LanguageContext } from "@/context/LanguageContext";

const container = css`
  ${contentContainer}

  margin: auto;
  width: 100%;
`;
const contentWrapper = css`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 5rem 0;
`;

const projectsContainer = css`
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const link = css`
  border-radius: 1rem;
  border: 3px solid ${colors.purple};
  padding: 1rem 2rem;
  color: ${colors.purple};
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.purple};
    color: ${colors.white};
  }
`;

export type ProjectInfo = {
  img: string;
  title: string;
  description: string;
  tool: string[];
  link: string;
};

const HomePageProjects: FC = () => {
  const { lang } = useContext(LanguageContext);

  const projectInfos: ProjectInfo[] = [
    {
      img: "",
      title: "Portfolio",
      description:
        "This project is a personal portfolio website designed to showcase my work and skills as a [Your Profession]. It features a clean and modern design, with easy navigation to view my projects, experience, and contact information. The website is responsive, ensuring a seamless experience across devices. Explore my portfolio to see examples of my work and learn more about my background and expertise",
      tool: ["Typescript", "NextJs", "Emotion"],
      link: "iminb2b.com",
    },
    {
      img: "",
      title: "Explorix",
      description:
        "This travel website project is a comprehensive platform designed to inspire and assist travelers in planning their next adventure. With stunning visuals, detailed destination guides, and seamless booking functionality, the website offers a user-friendly experience. Explore breathtaking destinations, discover hidden gems, and plan your dream getaway with ease.",
      tool: ["GraphQl", "Gatsby", "Typescript", "NextJs", "Emotion"],
      link: "explorix.projects.iminb2b.com",
    },
    {
      img: "",
      title: "Dolla",
      description:
        "This website project is a comprehensive platform designed to inspire and assist travelers in planning their next adventure. With stunning visuals, detailed destination guides, and seamless booking functionality, the website offers a user-friendly experience. Explore breathtaking destinations, discover hidden gems, and plan your dream getaway with ease.",
      tool: ["GraphQl", "Gatsby", "Typescript", "NextJs", "Emotion"],
      link: "explorix.projects.iminb2b.com",
    },
  ];

  return (
    <div css={container}>
      <div css={contentWrapper} data-aos="fade-up">
        <p css={sectionService}>SERVICE</p>
        <h1 css={sectionTitle}>My Projects</h1>
        <p css={sectionDescription}>
          Single landing page, content management system, custom code for object
          oriented programming, projects of all sizes and durations. I write
          code.
        </p>

        <div css={projectsContainer}>
          {projectInfos.map((project) => (
            <HomePageProjectsListItem project={project} key={project.title} />
          ))}
        </div>

        <Link css={link} href={routeLinks.projects({ lang })}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomePageProjects;
