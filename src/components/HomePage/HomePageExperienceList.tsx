import { FC } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import { ExperienceInfo } from "./HomePageAboutMe";
import HomePageExperienceListItem from "./HomePageExperienceListItem";

const educationContainer = css`
  width: 100%;
  padding: 3rem 7rem;

  @media screen and (max-width: 720px) {
    padding: 3rem;
  }
`;

const mediumTitle = css`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
const jobList = css`
  display: flex;
  flex-direction: column;
`;

const HomePageExperienceList: FC<{
  experience: ExperienceInfo[];
  title: string;
}> = ({ experience, title }) => {
  return (
    <div css={educationContainer}>
      <h4 css={mediumTitle}>{title}</h4>
      <div css={jobList}>
        {experience.map((item, index) => (
          <HomePageExperienceListItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePageExperienceList;
