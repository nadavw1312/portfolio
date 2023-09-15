import MySwiper from "@/components/home/MySwiper";

const HomePageProjects = () => {
  return (
    <div className="lg:w-3/4 mx-auto my-2">
      {/* <Carousel loop>
        {projects.map((project, i) => (
          <div
            className="relative flex-[0_0_100%] flex items-center justify-center px-4 p-20"
            key={i}
          >
            <div className=" max-w-xs">
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                skills={project.skills}
                associated={project.associated}
                link={project.link}
              />
            </div>
          </div>
        ))}
      </Carousel> */}
      <MySwiper />
    </div>
  );
};
export default HomePageProjects;
