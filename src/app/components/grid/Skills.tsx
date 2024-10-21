import { BiLogoTypescript } from "react-icons/bi";
import { DiCss3, DiGithubBadge, DiHtml5, DiJsBadge, DiReact, DiSass, DiBootstrap, DiJqueryLogo } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiFigma, SiTailwindcss } from "react-icons/si";

export const skills = [
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    color: "text-[#61dafb]"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: <DiJsBadge />,
    color: "text-[#f0db4f]"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    color: "text-[#3178c6]"
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass />, color: "text-[#bf4080]"
  },
  {
    id: "jquery",
    name: "jQuery",
    icon: <DiJqueryLogo />,
    color: "text-[#0672B3]"
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    color: "text-[#1572b6]"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <DiBootstrap />,
    color: "text-[#7811F7]"
  },
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    color: "text-[#e44d26]"
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-[#38bdf8]"
  },
  {
    id: "figma",
    name: "Figma",
    icon: <SiFigma />
  }
]

export default function Skills() {


  return (
    <>
      <div className="font-semibold text-lg lg:text-3xl text-center py-6 lg:p-10">
        <h2 className="text-purple items-center">Skills</h2>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`relative flex items-center flex-col gap-1 text-xs opacity-100 text-center ${skill.color} hover:brightness-200 duration-200`}>
            <span className={`*:size-10 rounded-lg p-2 bg-[#10132e]`}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}