import Button from "../components/Button";
import img from "../../Photo.png";

import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { AiFillLinkedin } from "react-icons/ai";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-16">
      {/* navbar compo */}
      <Navbar />

      {/* hero section */}
      <div className="px-8 mb-20">
        <div className="flex gap-4">
          {/* bio div */}
          <div className="w-[60%] flex flex-col gap-10">
            <p className="text-5xl font-bold text-gray-200 tracking-wider leading-tight">
              Hi there, I&apos;m a{" "}
              <span className="text-txtFav">Software Engineer.</span>
            </p>

            <div className="text-xl text-gray-400">
              Meet Gaurav, he is a skilled web developer with expertise in both
              front-end and back-end technologies and modern web development
              frameworks. Known for writing clean, maintainable code and
              optimizing user experiences.
              <div className="text-secondary mt-2 text-right">~ chatgpt</div>
            </div>

            <div>
              <Button content="Hire me" />
            </div>
          </div>
          {/* pic div */}
          <div className="w-[40%] flex flex-col">
            <div className="flex justify-center items-center">
              <img
                src={img}
                alt="profile-pic"
                className="h-[300px] rounded-2xl mb-2"
              />
            </div>
            {/* socials div */}
            <div className="flex gap-2 items-center justify-center">
              <a
                href="https://x.com/codewithkara"
                target="_blank"
                className="p-3 hover:text-txtFav"
              >
                <FaXTwitter className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-singh-898072176/"
                target="_blank"
                className="p-3 hover:text-txtFav"
              >
                <AiFillLinkedin className="size-6" />
              </a>
              <a
                href="https://github.com/GauravSinghdev"
                target="_blank"
                className="p-3 hover:text-txtFav"
              >
                <LuGithub className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 mb-20">
        <div className="flex flex-col gap-10">
          <div className="text-4xl font-bold tracking-wide">Skills</div>
          <div className="overflow-x-hidden my-20">
            <Skills />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
