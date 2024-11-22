import React from "react";
import Navbar from "../components/Navbar";
import img from "../../Photo.png";
import { LuGithub } from "react-icons/lu";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../components/Footer";

const About = () => {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-16">
      <Navbar />

      <section>
        <div className="px-8 flex gap-5">
          <div className="w-[75%] flex flex-col">
            <div>
              <p className="text-5xl font-bold text-gray-200 tracking-wider leading-tight">
                Myself <span className="text-txtFav">Gaurav Singh</span> and
                I&apos;m a Full Stack Engineer.
              </p>
            </div>
            <div className="text-xl text-gray-400 mt-5 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              quisquam explicabo, aperiam repellat ipsum accusantium beatae,
              omnis sequi, doloribus sint temporibus a optio quos velit.
              Assumenda est in dignissimos commodi!
            </div>
          </div>
          <div className="w-[25%] flex flex-col">
            <div className="flex items-center justify-center">
              <img
                src={img}
                alt="profile-pic"
                className="h-[200px] w-[200px] rounded-xl"
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

        <div className="px-8 flex gap-10">
          <div className="text-lg text-gray-400 mt-5 leading-loose">
            Fugit quas accusantium animi officiis, expedita dicta quos hic
            maxime consequatur optio dolore distinctio in officia! Sunt atque
            similique pariatur sit eius aliquam odio et ab aliquid, aspernatur
            reprehenderit cum. Eius odio quod repellat unde sequi laboriosam
            dolor mollitia, magni nihil qui eveniet architecto ipsa fugiat
            natus. Odit necessitatibus pariatur saepe accusamus, ipsa quas,
            magni eligendi libero optio consectetur qui!
          </div>
        </div>

        <div className="px-8 flex gap-10">
          <div className="text-lg text-gray-400 mt-5 leading-loose">
            Eaque totam iure sint. Laudantium recusandae facere deleniti. Beatae
            maxime blanditiis officia dolores? Accusantium id, facere sed beatae
            necessitatibus inventore asperiores ipsa nisi, est blanditiis quas
            suscipit excepturi, laudantium velit. Facere accusamus minima
            officiis laborum, sapiente dicta, error facilis illo tempore, maxime
            explicabo consectetur. Nulla aut officia, harum ad, quasi vel
            quibusdam quae numquam quos, autem modi perferendis sint vitae.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
