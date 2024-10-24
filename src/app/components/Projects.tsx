import Image from "next/image"
import { BiLogoTypescript } from "react-icons/bi"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiJsBadge, DiReact, DiBootstrap } from "react-icons/di"
import { RiNextjsLine } from "react-icons/ri"
import { SiReactrouter, SiTailwindcss } from "react-icons/si"

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Pokémon Team Builder",
      desc: "An app that uses the Official Pokémon API to generate a randomized team for Pokémon Brilliant Diamond and Shining Pearl.",
      img: "/projects/pokemon_1.png",
      techs: [
        { id: 1, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 2, icon: <DiCss3 className="text-[#1572b6]" /> },
        { id: 3, icon: <DiBootstrap className="text-[#7811F7]" />},
        { id: 4, icon: <DiJsBadge className="text-[#f0db4f]" /> }
      ],
      repoUrl: "https://github.com/heeyupchung/pokemon-team-builder",
      website: "https://heeyupchung.github.io/pokemon-team-builder/"
    },
    {
      id: 2,
      title: "Fleeker",
      desc: "An Flickr clone app that consumes Flickr's RESTful API and displays relevant images.",
      img: "/projects/fleeker_2.png",
      techs: [
        { id: 1, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 2, icon: <DiCss3 className="text-[#1572b6]" /> },
        { id: 3, icon: <DiJsBadge className="text-[#f0db4f]" /> },
        { id: 4, icon: <DiReact className="text-[#61dafb]" /> }
      ],
      repoUrl: "https://github.com/heeyupchung/fleeker-photo-gallery",
      website: "https://heeyupchung.github.io/fleeker-photo-gallery/"
    },
    {
      id: 3,
      title: "Lawrence Wang's Portfolio",
      desc: "A portfolio for my friend Lawrence Wang to help him showcase his work and skills as a chef and food content creator.",
      img: "/projects/lawrence_1.png",
      techs: [
        { id: 1, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 2, icon: <DiCss3 className="text-[#1572b6]" /> },
        { id: 3, icon: <DiBootstrap className="text-[#7811F7]" />},
        { id: 4, icon: <DiJsBadge className="text-[#f0db4f]" /> }
      ],
      repoUrl: "https://github.com/heeyupchung/lawrence-wang",
      website: "https://lawrencewang.info/"
    },
    {
      id: 4,
      title: "Finance Management",
      desc: "An app that dynamically displays saved states of inputted spendings and savings in a graphical user interface.",
      img: "/projects/finance_1.png",
      techs: [
        { id: 1, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 2, icon: <DiCss3 className="text-[#1572b6]" /> },
        { id: 3, icon: <DiJsBadge className="text-[#f0db4f]" /> },
        { id: 4, icon: <DiReact className="text-[#61dafb]" /> }
      ],
      repoUrl: "https://github.com/heeyupchung/finance-tracker",
      website: "https://heeyupchung.github.io/finance-tracker/"
    },
    {
      id: 5,
      title: "Bible Verse Generator",
      desc: "An app that displays different Bible verses for encouragement via user input or automatically.",
      img: "/projects/bible_1.png",
      techs: [
        { id: 1, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 2, icon: <DiCss3 className="text-[#1572b6]" /> },
        { id: 3, icon: <DiJsBadge className="text-[#f0db4f]" /> }
      ],
      repoUrl: "https://github.com/heeyupchung/bible-verse-generator",
      website: "https://heeyupchung.github.io/bible-verse-generator/"
    },
    {
      id: 6,
      title: "Course Directory",
      desc: "A website that displays different courses offered for a Front End Development program.",
      img: "/projects/frontend_2.png",
      techs: [
        { id: 1, icon: <DiHtml5 className="text-[#e44d26]" /> },
        { id: 2, icon: <DiCss3 className="text-[#1572b6]" /> },
        { id: 3, icon: <DiJsBadge className="text-[#f0db4f]" /> },
        { id: 4, icon: <DiReact className="text-[#61dafb]" /> },
        { id: 5, icon: <SiReactrouter className="text-[#f44250]" /> }
      ],
      repoUrl: "https://github.com/heeyupchung/course-directory",
      website: "https://heeyupchung.github.io/course-directory/"
    }
  ]

  return (
    <div className="relative text-white">
      <div className="flex justify-center items-center px-4 text-lg lg:text-3xl font-bold py-8">
        <h2 className="text-purple">Projects</h2>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-14">
        {projects.map((project) => (
          <div key={project.id}
            className="flex flex-col justify-center sm:w-[570px] w-[80vw]">
            <a href={project.website} target="_blank">
              <Image src={project.img} alt={project.title}
              className="rounded-3xl transform transition duration-300 hover:scale-110 hover:rotate-2 hover:border border-white/[0.2]" />
            </a>
            <h3 className="font-bold lg:text-xl md:text-xl text-base mt-4">
              {project.title}
            </h3>
            <p className="lg:text-base lg:font-normal font-light text-sm">
              {project.desc}
            </p>


            <div className="flex items-center justify-between mt-4 mb-3">
              <div className="flex items-center">
                {project.techs.map((tech, index) => (
                  <div key={tech.id}
                    className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center lg:size-10 size-8"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <span className="*:size-5">{tech.icon}</span>
                  </div>
                ))}
              </div>

              <a href={project.repoUrl}
                target="_blank">
                <div className="border flex items-center px-4 py-2 rounded-md text-purple hover:text-white gap-2">
                  <p className="flex lg:text-base md:text-xs text-sm">See Repository</p>
                  <DiGithubBadge className="size-5" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}