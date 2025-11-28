import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Highway Delite",
      location: "Kolkata, WB",
      period: "July 2024 – Present",
      highlights: [
        "Built and optimized user-friendly web applications using ReactJs, NextJs, NestJs and PostgreSql, increasing website performance by 30%",
        "Designed and implemented RESTful APIs to enhance application functionality and scalability, making APIs 15% faster and 10% more optimized",
        "Collaborated with cross-functional teams to deliver projects on time and improve development",
      ],
    },
    {
      title: "React Developer Internship",
      company: "Birla Pivot",
      location: "Bangalore, KA",
      period: "July 2023 – Sept 2023",
      highlights: [
        "Designed a timeline component for order history helping in tracking and sending details to users",
        "Created a component in the product catalogue to send orders based on roles",
        "Enhanced B2B platform functionality by integrating tailored features for business operations",
      ],
    },
    {
      title: "Front End Developer Internship",
      company: "Highway Delite",
      location: "Kolkata, WB",
      period: "June 2023 – June 2024",
      highlights: [
        "Spearheaded the transition to React, creating reusable components to boost performance by 30%",
        "Implemented Redux for efficient state management, improving data handling processes by 10%",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 md:py-32 relative bg-secondary/30"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 sm:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 sm:left-8 md:left-1/2 top-6 sm:top-8 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full glow z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 20px hsl(var(--glow))",
                    "0 0 40px hsl(var(--glow))",
                    "0 0 20px hsl(var(--glow))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              ></motion.div>

              {/* Content Card */}
              <motion.div
                className={`glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 ml-12 sm:ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 60px rgba(23, 162, 184, 0.3)",
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <motion.div
                    className="bg-primary/10 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-primary font-semibold mb-1 break-words">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm sm:text-base text-muted-foreground flex items-start gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      whileHover={{ x: 5, color: "hsl(var(--foreground))" }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      ></motion.span>
                      <span className="break-words">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
