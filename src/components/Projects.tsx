import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "VirtuCart",
      description:
        "E-commerce platform for mobile and tech products with custom authentication, shopping cart, and product management.",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      link: "https://virtucart.vercel.app/",
      code: "https://github.com/yourusername/virtucart",
    },
    {
      title: "HD Challan Payment Portal",
      description:
        "End-to-end challan payment platform enabling users to view, manage, and securely pay traffic challans. Built with smooth animations, dynamic UI components, and a robust backend. Improved transaction flow efficiency and reduced load time by 40%.",
      tech: [
        "React",
        "TypeScript",
        "ShadCN UI",
        "Framer Motion",
        "NestJS",
        "Prisma",
        "PostgreSQL",
      ],
      link: "https://challan.highwaydelite.com/",
      code: "https://github.com/yourusername/challan-portal",
    },

    {
      title: "RakshaDial",
      description:
        "Dashboard platform for viewing statistics of reports, vehicles, users with detailed analytics and reporting features.",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      link: "https://rakshadial.com/home",
      code: "https://github.com/yourusername/rakshadial",
    },
    {
      title: "Well Connect",
      description:
        "Decentralized medical website developed for Hack The League Web3 Hackathon. Blockchain-based healthcare solution.",
      tech: ["React", "TypeScript", "Wagmi", "Web3"],
      link: "https://well-connect.vercel.app/",
      code: "https://github.com/Arj-Codes/WellConnect",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 relative"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Showcase of my recent work in full-stack development, from
            e-commerce platforms to Web3 applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const ProjectCard = () => {
              const [isHovered, setIsHovered] = useState(false);
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              const rotateX = useTransform(y, [-100, 100], [10, -10]);
              const rotateY = useTransform(x, [-100, 100], [-10, 10]);

              const handleMouseMove = (
                event: React.MouseEvent<HTMLDivElement>
              ) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                x.set(event.clientX - centerX);
                y.set(event.clientY - centerY);
              };

              const handleMouseLeave = () => {
                setIsHovered(false);
                x.set(0);
                y.set(0);
              };

              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{
                    perspective: 1000,
                  }}
                >
                  <motion.div
                    className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col cursor-pointer"
                    style={{
                      rotateX: isHovered ? rotateX : 0,
                      rotateY: isHovered ? rotateY : 0,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 30px 80px rgba(23, 162, 184, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                      animate={
                        isHovered ? { color: "hsl(var(--primary))" } : {}
                      }
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 sm:flex-initial"
                      >
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full sm:w-auto text-xs sm:text-sm"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            };

            return <ProjectCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
