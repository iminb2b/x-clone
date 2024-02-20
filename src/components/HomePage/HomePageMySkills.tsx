import { FC, useContext } from "react";
import { css } from "@emotion/react";
import {
  boxWrapper,
  contentContainer,
  sectionDescription,
  sectionService,
  sectionTitle,
} from "@/styles/generalStyles";
import { LanguageContext } from "@/context/LanguageContext";
import colors from "@/value/colors";
import HomePageMySkillsList from "./HomePageMySkillsList";

const container = css`
  ${contentContainer}

  margin: auto;
  width: 100%;
`;

const HomePageMySkills: FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div css={container}>
      <div
        css={boxWrapper}
        //  data-aos="fade-up"
      >
        <p css={sectionService}>SERVICE</p>
        <h1 css={sectionTitle}>My Skills</h1>
        <p css={sectionDescription}>
          Using the right tools help web sites come together faster and easier.
        </p>

        {/* <HomePageMySkillsList /> */}
      </div>
    </div>
  );
};

export default HomePageMySkills;
