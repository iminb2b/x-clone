import { FC } from "react";
import { css } from "@emotion/react";

const jobItem = css`
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

const list = css`
  padding: 0.5rem 1.5rem;
  list-style-type: circle;
  line-height: 1.6;

  @media screen and (max-width: 688px) {
    padding: 0.5rem 0;
  }
`;

const descriptionContainer = css`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const educationContainer = css`
  width: 100%;
  padding: 1rem 7rem;

  @media screen and (max-width: 688px) {
    padding: 1rem;
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

const AboutMeSkillList: FC = () => {
  return (
    <div css={educationContainer}>
      <h4 css={mediumTitle}>Technical Skills</h4>
      <div css={jobList}>
        <div css={jobItem}>
          <div css={descriptionContainer}>
            <ul css={list}>
              <li>
                <b> Programming Languages: </b>Javascript, Typescript, HTML,
                CSS, Sass, GraphQL
              </li>
              <li>
                <b> Libraries & Frameworks: </b> Next.js, React, Gastby,
                Node.js, Styled Component, Material Ui, Emotion, CapacitorJs{" "}
              </li>
              <li>
                <b> Tools & Platforms: </b> Git, Github, GitLab, Mattermost,
                Netlify, Figma, Firebase, Docker, Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkillList;
