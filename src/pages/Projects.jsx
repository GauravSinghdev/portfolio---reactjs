import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      imgLink: "./projpic/RabbitType.jpg",
      title: "RabbitType",
      description: "Speed Typing Test",
      stack: "",
      gitLink: "https://github.com/GauravSinghdev/rabbitType",
      liveLink: "https://rabbitype.codewithkara.com/",
    },
    {
      imgLink: "./projpic/MediClone.jpg",
      title: "MediClone",
      description: "Medium App Clone",
      stack: "",
      gitLink: "https://github.com/GauravSinghdev/Medium-Clone",
      liveLink: "https://mediclone.codewithkara.com/",
    },
    {
      imgLink: "./projpic/Chitchatly.jpg",
      title: "Chitchatly",
      description: "Chatting App",
      stack: "",
      gitLink: "https://github.com/GauravSinghdev/chitchatly",
      liveLink: "https://chitchatly.codewithkara.com/",
    },
    {
      imgLink: "./projpic/BookHorizon.jpg",
      title: "BookHorizon",
      description: "Book Buying Ecommerce",
      stack: "",
      gitLink: "https://github.com/GauravSinghdev/BookStore-APP---bookHorizon",
      liveLink: "https://bh.codewithkara.com/",
    },
  ];
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-12">
      <Navbar />

      <section>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {projects.map((proj, index) => {
            return (
              <Card
                key={index}
                imgLink={proj.imgLink}
                title={proj.title}
                description={proj.description}
                stack={proj.stack}
                gitLink={proj.gitLink}
                liveLink={proj.liveLink}
              />
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
