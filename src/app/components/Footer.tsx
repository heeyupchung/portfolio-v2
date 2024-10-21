import { LuCopyright } from "react-icons/lu";

import Contact from "./grid/Contact";

export default function Footer() {
  return (
    <footer className="relative text-white pb-10 px-14 mt-12">
      <div className="flex flex-wrap justify-between items-center">
      <p className="flex md:text-base text-sm font-light gap-2 items-center">
        <LuCopyright className="size-5" />
        2024 Hee Yup Chung.
      </p>
      <Contact />
      </div>
    </footer>
  )
}