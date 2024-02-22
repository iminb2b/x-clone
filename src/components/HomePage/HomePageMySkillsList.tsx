import { FC } from "react";
import { css } from "@emotion/react";

import htmlIcon from "@/assets/images/tools/html5.png";
import reactIcon from "@/assets/images/tools/react.png";
import cssIcon from "@/assets/images/tools/css.png";
import nextjsIcon from "@/assets/images/tools/nextjs.png";
import jsIcon from "@/assets/images/tools/js.png";
import graphQlIcon from "@/assets/images/tools/graphql.png";
import emotionIcon from "@/assets/images/tools/emotion.png";
import styledComponentsIcon from "@/assets/images/tools/styledcomponent.png";
import HomePageMySkillsListItem from "./HomePageMySkillsListItem";

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5rem 1rem;
  grid-gap: 2rem;
  width: 100%;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 688px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export type SkillInfo = {
  name: string;
  img?: string;
};

const HomePageMySkillsList: FC = () => {
  const skillsList: SkillInfo[] = [
    {
      img: htmlIcon.src,
      name: "HTML5",
    },
    {
      img: reactIcon.src,
      name: "ReactJs",
    },
    {
      img: cssIcon.src,
      name: "CSS3",
    },
    {
      img: graphQlIcon.src,
      name: "GraphQl",
    },

    {
      img: jsIcon.src,
      name: "Javascript",
    },
    {
      img: emotionIcon.src,
      name: "Emotion",
    },
    {
      img: styledComponentsIcon.src,
      name: "Styled Components",
    },
    {
      img: nextjsIcon.src,
      name: "NextJS",
    },
  ];

  return (
    <div css={container}>
      {skillsList.map((skill) => (
        <HomePageMySkillsListItem skill={skill} key={skill.name} />
      ))}
    </div>
  );
};

export default HomePageMySkillsList;
