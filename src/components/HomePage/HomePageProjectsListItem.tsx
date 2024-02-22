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
  min-height: min-content;
  max-height: max-content;
  border-radius: 1rem;
  width: 100%;

  @media screen and (max-width: 450px) {
    max-height: 13.375rem;
  }
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
