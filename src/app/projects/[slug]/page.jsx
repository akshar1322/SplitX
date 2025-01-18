  /* eslint-disable react-hooks/rules-of-hooks */
  'use client';
  import { useEffect } from "react";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { use } from "react";
  import Image from "next/image";

  // componets
  import projects from "../../data/projectsData";
  import Headerimage from "../../components/ui/Share/Headerimage";
  import Footer from "../../components/Footer/footer";
  import ProjectCard from '../../components/ui/Cards/ProjectCard';
  import DeviceCheck from "../../components/DeviceCheck";
  import ScrollProgress from "../../components/ui/ScrollProgress";
  import Navigationbar from "../../components/ui/Navigationbar";
  import Error from "../../components/ui/Share/404Error";


  gsap.registerPlugin(ScrollTrigger);

  export default function ProjectDetailPage({ params }) {
    const { slug } = use(params);

    const project = projects.find(
      (proj) =>
        proj. projectId.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!project) {
      return (
        <div className=" font-PoppinsMedium text-white min-h-screen flex justify-center items-center">
          <Error/>
        </div>
      );
    }

    useEffect(() => {
      gsap.utils.toArray(".parallax-effect").forEach((img) => {
        gsap.fromTo(
          img,
          { y: -100, opacity: 0 },
          {
            y: 100,
            opacity: 1,
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "top 20%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, []);


  // Filter and slice projects for display
  const allowedIds = [2, 3];
  const filteredProjects = projects.filter(project => allowedIds.includes(project.id));


    return (
      <DeviceCheck>
        <ScrollProgress />
        <Navigationbar/>
        <div className="bg-black text-white min-h-screen relative">
        <Headerimage
          backgroundImageUrl="https://images.unsplash.com/photo-1736296972130-e964c1cfe618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text={project.projectName}
        />
        <div className="px-4 py-16 max-w-7xl mx-auto relative">
          <div className="flex justify-between mb-12">
            <div>
              <h2 className="text-lg uppercase font-semibold">Client</h2>
              <br />
              <p className="text-sm ">{project.clientName}</p>
              <br />
              <a
                href={project.liveWebsiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-8 font-semibold text-lime-400 hover:text-amber-300"
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Visit Live Website
              </a>
            </div>
            <div>
              <h2 className="text-lg uppercase font-semibold">What we worked on</h2> <br />
              <p className="text-sm w-[30rem] capitalize">{project.whatWeWork}</p>
            </div>
            <div>
              <h2 className="text-lg uppercase font-semibold">Year</h2> <br />
              <p className="text-sm">{project.year}</p>
            </div>
          </div>

          {/* First Images */}
          <div className="parallax-container relative mb-8 z-10">
            {project.images.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="parallax-image mt-20 pt-10 mb-8 h-[40rem] bg-fixed bg-center rounded-lg p-4 flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={`Project image ${index + 1}`}
                  width={1920}
                  height={5080}
                  className="w-full rounded-lg parallax-effect"
                />
              </div>
            ))}
          </div>

          {/* Description Section */}
          <section className="relative z-20 uppercase bg-black py-20">
            <div className="w-1/2 pr-4">
              <p className="mb-8">{project.description}</p>
            </div>
          </section>

          {/* 2 Column Images */}
          <div className="image-container grid grid-cols-2 gap-4 mb-8 relative z-10">
            {project.images.slice(3, 9).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Image ${index + 4}`}
                width={800}
                height={450}
                className="rounded-lg"
              />
            ))}
          </div>

          {/* weThinkAlong Section */}
          <section className="relative z-20 bg-black uppercase py-20">
            <div className="flex justify-between">
              <h2 className="text-3xl text-lime-500  font-semibold mb-4">
                {project.weThinkAlong}
              </h2>
              <p className="mb-8 pl-40">{project.weThinkAlongDescription}</p>
            </div>
          </section>

          {/* Last Images */}
          <div className="parallax-container mb-8 relative z-10">
            {project.images.slice(9).map((img, index) => (
              <div
                key={index}
                className="parallax-image mt-20 pt-10 mb-8 h-[40rem] bg-fixed bg-center rounded-lg p-4 flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={`Project image ${index + 8}`}
                  width={2000}
                  height={1000}
                  className="w-full rounded-lg parallax-effect"
                />
              </div>
            ))}
          </div>

          {/* creativeThinking Section */}
          <section className="relative z-20 uppercase bg-black py-20">
            <div className="flex justify-between">
              <h2 className="text-3xl font-semibold text-lime-500 mb-4">
                {project.creativeThinking}
              </h2>
              <p className="mb-8 pl-40">{project.creativeThinkingDescription}</p>
            </div>
          </section>
        </div>
        {/* Display More Projects */}
        <div className="grid grid-cols-1 pt-20 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        <Footer />
      </div>
      </DeviceCheck>

    );
  }
