import { FC, useContext } from "react";
import { css } from "@emotion/react";
import {
  boxWrapper,
  contentContainer,
  sectionDescription,
  sectionService,
  sectionTitle,
} from "@/styles/generalStyles";
import { AppContext } from "@/context/AppContext";
import colors from "@/value/colors";
import HomePageMySkillsList from "./HomePageMySkillsList";

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

  padding: 3rem 0;
  gap: 1rem;
`;

const HomePageMySkills: FC = () => {
  const { lang } = useContext(AppContext);

  return (
    <div css={container}>
      <div
        css={contentWrapper}
        // data-aos="fade-up"
      >
        <p css={sectionService}>SERVICE</p>
        <h1 css={sectionTitle}>My Skills</h1>
        <p css={sectionDescription}>
          Using the right tools help web sites come together faster and easier.
        </p>

        <HomePageMySkillsList />
      </div>
    </div>
  );
};

export default HomePageMySkills;
