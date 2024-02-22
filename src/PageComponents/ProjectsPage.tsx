import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import ProjectsPageContent from "@/components/ProjectsPage/ProjectsPageContent";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Projects Page" description={"Nhung Nguyen"} />
      <ProjectsPageContent />
    </PageContainer>
  );
};

export default ProjectsPage;
