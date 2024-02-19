import { FC } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import { ExperienceInfo } from "./HomePageAboutMe";

const jobItem = css`
  border-left: 2px solid ${colors.textPrimary};
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -7px;
    width: 14px;
    border-radius: 50%;
    background-color: ${colors.purple};
    height: 14px;
  }

  &:last-of-type {
    border: none;
  }
`;

const jobTitle = css`
  font-size: 1.125rem;

  color: ${colors.purple};
`;
const list = css`
  padding: 0.5rem 1.5rem;
  list-style-type: circle;
`;

const descriptionContainer = css`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const HomePageExperienceListItem: FC<{
  item: ExperienceInfo;
}> = ({ item: { name, date, achievements, relevantCourse, description } }) => {
  return (
    <div css={jobItem}>
      <h4 css={jobTitle}>{name}</h4>
      <b>{date}</b>
      {relevantCourse && (
        <p>
          <b> Relevant Coursework: </b>
          {relevantCourse}
        </p>
      )}
      {description && (
        <div css={descriptionContainer}>
          <b> Description: </b>
          <div> {description}</div>
        </div>
      )}
      {achievements && (
        <div>
          <b>Achievement:</b>
          <ul css={list}>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePageExperienceListItem;
