import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import routeLinks from "@/routeLinks";
import { ProjectInfo } from "@/value/projectsInfo";

const projectContainer = ({ darkmode }: { darkmode: boolean }) => css`
  box-shadow: ${darkmode
    ? "rgba(255, 255, 255, 0.24) 0px 5px 8px"
    : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  border-radius: 2rem;
  background-color: ${darkmode ? "rgba(20,0,157,0.3)" : colors.white};
  padding: 1rem;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 15px 5px ${colors.pink},
      -9px 5px 15px 5px ${colors.yellow}, -7px -5px 15px 5px #8cff85,
      12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
      -10px 10px 15px 7px #ff616b, -10px -7px 27px 1px #8e5cff,
      0px 0px 50px 12px rgba(0, 0, 0, 0);
  }
`;

const image = css`
  height: fit-content;
  border-radius: 1rem;
  width: 100%;
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
  flex-wrap: wrap;
`;
const toolItem = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.green : colors.purple};
  border: 1px solid ${darkmode ? colors.green : colors.purple};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
const title = css`
  font-size: clamp(1.5rem, 3vw, 3rem);
`;

const HomePageProjectsListItem: FC<{ project: ProjectInfo }> = ({
  project,
}) => {
  const {
    state: { darkmode, lang },
  } = useContext(AppContext);

  return (
    <Link
      css={projectContainer({ darkmode })}
      href={routeLinks.project({ lang, slug: project.slug })}
    >
      <img css={image} src={project.img} />
    </Link>
  );
};

export default HomePageProjectsListItem;
