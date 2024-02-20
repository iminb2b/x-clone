import { FC } from "react";
import { css } from "@emotion/react";
import { SkillInfo } from "./HomePageMySkillsList";
import colors from "@/value/colors";

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 2rem;
  align-items: center;
  background-color: ${colors.white};
  text-align: center;
  gap: 2rem;
`;

const image = css`
  height: 4.5rem;
  min-height: 4.5rem;
  width: fit-content;
`;

const title = css`
  color: ${colors.purple};
`;

const HomePageMySkillsListItem: FC<{ skill: SkillInfo }> = ({
  skill: { name, img },
}) => {
  return (
    <div css={container}>
      <img src={img} css={image} />
      <h2 css={title}>{name}</h2>
    </div>
  );
};

export default HomePageMySkillsListItem;
