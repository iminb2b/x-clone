import HomePageProjects, {
  projectInfos,
} from "@/components/HomePage/HomePageProjects";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useRouter } from "next/router";
import ErrorPageContent from "@/components/ErrorPageContent";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { colors } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const container = css`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 5rem);
  padding: 2rem 0;
`;

const contentWrapper = ({ darkmode }: { darkmode: boolean }) => css`
  ${contentContainer}

  gap: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${darkmode ? colors.green : colors.purple};
`;

const image = css`
  border-radius: 2rem;
`;

const title = css`
  font-size: clamp(2rem, 5vw, 4rem);
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

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const {
    state: { darkmode },
  } = useContext(AppContext);

  const slug = router.query.slug;

  const project = projectInfos.filter((project) => project.slug === slug)[0];

  if (!project) return <ErrorPageContent />;

  return (
    <PageContainer>
      <PageMeta title="Min - Projects Page" description={"Nhung Nguyen"} />
      <div css={container}>
        <div css={contentWrapper({ darkmode })}>
          <img src={project.img} css={image} />
          <h1 css={title}>{project.title}</h1>

          <p>{project.description}</p>

          <ul css={toolList}>
            {project.tool.map((item, index) => (
              <li key={index} css={toolItem({ darkmode })}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectPage;
