import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abirbanerjee0901@gmail.com",
      href: "mailto:abirbanerjee0901@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6290761818",
      href: "tel:+916290761818",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India",
      href: null,
    },
  ];

  const socials = [
    {
      icon: linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/iamabir/",
    },
    {
      icon: github,
      label: "GitHub",
      href: "https://github.com/Arj-Codes",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mx-auto mb-3 sm:mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-sm sm:text-base font-semibold mb-2">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors inline-block break-words"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.value}
                    </motion.a>
                  ) : (
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            {socials.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10 rounded-full px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </motion.div>
                    {social.label}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12 sm:mt-16 md:mt-20 text-xs sm:text-sm text-muted-foreground px-4"
      >
        <p>© 2025 Abir Banerjee. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
