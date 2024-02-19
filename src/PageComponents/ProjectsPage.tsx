import HomePageProjects from "@/components/HomePage/HomePageProjects";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - Projects Page"
        description={"Nhung Nguyen"}
        image={null}
      />
      <HomePageProjects />
    </PageContainer>
  );
};

export default ProjectsPage;
