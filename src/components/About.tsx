import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Database, Server } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "SCSS"],
    backend: ["Node.js", "Express.js", "NestJS"],
    database: ["PostgreSQL", "MongoDB", "Prisma"],
    languages: ["JavaScript", "TypeScript", "Java"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Innovative and performance-driven Full Stack Developer with over 1
            year of experience in designing, developing, and optimizing
            end-to-end web applications.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  B.Tech in Computer and Communications Engineering
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">
                  Manipal University Jaipur • Aug 2020 – May 2024
                </p>
                <p className="text-sm sm:text-base text-primary font-semibold">
                  GPA: 8.93/10
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 60px rgba(23, 162, 184, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Front-End
            </h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, i) => (
                <motion.li
                  key={skill}
                  className="text-sm sm:text-base text-muted-foreground flex items-center gap-2"
                  custom={i}
                  variants={skillItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 60px rgba(23, 162, 184, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Server className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Back-End
            </h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, i) => (
                <motion.li
                  key={skill}
                  className="text-sm sm:text-base text-muted-foreground flex items-center gap-2"
                  custom={i}
                  variants={skillItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  ></motion.span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 60px rgba(23, 162, 184, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Database
            </h3>
            <ul className="space-y-2">
              {skills.database.map((skill, i) => (
                <motion.li
                  key={skill}
                  className="text-sm sm:text-base text-muted-foreground flex items-center gap-2"
                  custom={i}
                  variants={skillItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  ></motion.span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 60px rgba(23, 162, 184, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Languages
            </h3>
            <ul className="space-y-2">
              {skills.languages.map((skill, i) => (
                <motion.li
                  key={skill}
                  className="text-sm sm:text-base text-muted-foreground flex items-center gap-2"
                  custom={i}
                  variants={skillItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  ></motion.span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
