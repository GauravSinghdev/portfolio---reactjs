import { motion } from "framer-motion";

const Skills = () => {
  const front = [
    { path: "./front/html.png", name: "HTML5" },
    { path: "./front/css.png", name: "CSS3" },
    { path: "./front/javascript.png", name: "JavaScript" },
    { path: "./front/react.png", name: "React" },
    { path: "./front/tailwindcss.png", name: "Tailwind CSS" },
    { path: "./front/nextjs.png", name: "Next.js" },
    { path: "./front/nodejs.png", name: "Node.js" },
  ];

  const back = [
    { path: "./back/express.png", name: "Express" },
    { path: "./back/mongodb.png", name: "MongoDB" },
    { path: "./back/mysql.png", name: "MySQL" },
    { path: "./back/postgresql.png", name: "PostgreSQL" },
    { path: "./back/redis.png", name: "Redis" },
    { path: "./back/websocket.png", name: "WebSocket" },
  ];

  const devops = [
    { path: "./devops/aws.png", name: "AWS" },
    { path: "./devops/cloudflare.png", name: "Cloudflare" },
    { path: "./devops/docker.png", name: "Docker" },
    { path: "./devops/github.png", name: "GitHub" },
    { path: "./devops/java.png", name: "Java" },
    { path: "./devops/python.png", name: "Python" },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-10">
      {/* front skill */}
      <div className="flex MyGrad">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
        >
          {front.map((image, indx) => {
            return (
              <img className="size-16 mr-20 ms-10" key={indx} src={image.path} title={image.name} />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
        >
          {front.map((image, indx) => {
            return (
              <img className="size-16 mr-20 ms-10" key={indx} src={image.path} title={image.name} />
            );
          })}
        </motion.div>
      </div>

      {/* back skill */}
      <div className="flex MyGrad">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
        >
          {back.map((image, indx) => {
            return (
              <img className="size-16 mr-20 ms-10" key={indx} src={image.path} title={image.name} />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
        >
          {back.map((image, indx) => {
            return (
              <img className="size-16 mr-20 ms-10" key={indx} src={image.path} title={image.name} />
            );
          })}
        </motion.div>
      </div>

      {/* devops skill */}
      <div className="flex MyGrad">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
        >
          {devops.map((image, indx) => {
            return (
              <img className="size-16 mr-20 ms-10" key={indx} src={image.path} title={image.name} />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
        >
          {devops.map((image, indx) => {
            return (
              <img className="size-16 mr-20 ms-10" key={indx} src={image.path} title={image.name} />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
