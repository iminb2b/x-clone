import HomePageProjects from "@/components/HomePage/HomePageProjects";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";

const ContactPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - Contact Me"
        description={"Nhung Nguyen"}
        image={null}
      />
    </PageContainer>
  );
};

export default ContactPage;
