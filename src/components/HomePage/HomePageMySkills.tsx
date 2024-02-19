import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { LanguageContext } from "@/context/LanguageContext";
import colors from "@/value/colors";
import HomePageMySkillsList from "./HomePageMySkillsList";

const container = css`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`;
const contentWrapper = css`
  ${contentContainer}
  position: relative;

  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const title = css`
  font-size: 4rem;
  font-weight: bold;
`;
const description = css`
  font-size: 1.375rem;
  margin: 2rem 0;
`;

const HomePageMySkills: FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div css={container}>
      <div css={contentWrapper}>
        <h1 css={title}>My Skills</h1>
        <p css={description}>
          Using the right tools help web sites come together faster and easier.
        </p>

        <HomePageMySkillsList />
      </div>
    </div>
  );
};

export default HomePageMySkills;
