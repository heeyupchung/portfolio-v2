import { FaCopyright } from "react-icons/fa";
import Contact from "./grid/Contact";

export default function Footer() {
  return (
    <footer className="relative text-white pb-10 px-14 mt-12">
      <div className="flex flex-wrap sm:justify-between justify-center  items-center">
      <p className="flex md:text-base text-sm font-light gap-2 items-center">
        <FaCopyright className="size-4" />
        2024 Hee Yup Chung.
      </p>

      <Contact />
      </div>
    </footer>
  )
}