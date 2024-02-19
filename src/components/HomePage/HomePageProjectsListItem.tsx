import { FC } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import { ProjectInfo } from "./HomePageProjects";

const projectContainer = css`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
  background-color: ${colors.white};
  padding: 2rem;
`;

const image = css`
  height: 20rem;
  border-radius: 1rem;
  width: 100%;
  background-color: aliceblue;
`;
const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;
const toolList = css`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;
const toolItem = css`
  color: ${colors.purple};
  border: 1px solid ${colors.purple};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
const title = css`
  font-size: clamp(1.5rem, 2vw, 3rem);
`;
const description = css`
  line-height: 1.4;
`;

const HomePageProjectsListItem: FC<{ project: ProjectInfo }> = ({
  project,
}) => {
  return (
    <div css={projectContainer}>
      <div css={image}></div>
      <div css={infoContainer}>
        <ul css={toolList}>
          {project.tool.map((item, index) => (
            <li key={index} css={toolItem}>
              {item}
            </li>
          ))}
        </ul>
        <h1 css={title}>{project.title}</h1>
        <p css={description}>{project.description}</p>
      </div>
    </div>
  );
};

export default HomePageProjectsListItem;
