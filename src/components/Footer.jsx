import Avatar from "./Avatar";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import DarkMode from "./DarkMode";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="flex justify-between items-center py-16 px-5">
        <div className="flex flex-col gap-2">
          <a href="/" className="flex gap-2 items-center">
            <Avatar size={"big"} />
            <span className="font-bold text-xl">Gaurav Singh</span>
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <DarkMode />
          <div className="flex gap-6 items-center">
            <a href="https://x.com/codewithkara" target="_blank">
              <FaXTwitter className="size-10 hover:bg-txtFav p-2 rounded-lg" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <CiInstagram className="size-10 hover:bg-txtFav p-1 rounded-lg" />
            </a>
            <a href="https://github.com/GauravSinghdev" target="_blank">
              <LuGithub className="size-10 hover:bg-txtFav p-2 rounded-lg" />
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-2 text-lg tracking-wider">
          <a href="/about" className="">
            About
          </a>
          <a href="/projects" className="">
            Projects
          </a>
          <a href="/reviews" className="">
            Reviews
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
