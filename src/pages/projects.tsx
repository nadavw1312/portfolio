import Seo from "@/components/Seo";
import Layout from "@/components/layout/Layout";
import ProjectsGridView from "@/components/projects-view/ProjectsGridView";

const projects = () => {
  return (
    <div>
      <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my projects on full-stack development that I'm proud of."
      />
        <div className="layout">
          <ProjectsGridView />
        </div>
      </Layout>
    </div>
  );
};
export default projects;
