import { DiGithubBadge } from "react-icons/di"
import { LiaLinkedin } from "react-icons/lia"
import { TfiEmail } from "react-icons/tfi"

export default function Contact() {

  const socialMedias = [
    {
      id: 1,
      img: <DiGithubBadge className="size-7" />,
      link: "https://github.com/heeyupchung"
    },
    {
      id: 2,
      img: <LiaLinkedin className="size-7" />,
      link: "https://linkedin.com/in/heeyupchung"
    },
    {
      id: 3,
      img: <TfiEmail className="size-5" />,
      link: "mailto:heeyupchung@gmail.com"
    },
  ]

  return (
    
    <div className="flex items-center gap-4 py-4">
      {socialMedias.map((socialMedia) => (
        <a href={socialMedia.link} target="_blank"
          key={socialMedia.id}
          className="cursor-pointer size-10 flex justify-center items-center bg-[#10132e] hover:brightness-200 rounded-lg border border-white/[0.1]"
        >
          <span>{socialMedia.img}</span>
        </a>
      ))}
    </div>

  )
}