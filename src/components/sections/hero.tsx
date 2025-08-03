"use client"

import { motion } from "framer-motion"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <BackgroundPaths />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center will-change-transform">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Ömer Faruk Kazar</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software Engineer specializing in{" "}
            <span className="text-accent font-semibold">iOS Engineering</span>{" "}
            with a passion for clean code and exceptional user experiences.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href="https://github.com/omerFarukKazar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors group"
          >
            <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/omer-faruk-kazar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors group"
          >
            <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:omer.kazar@icloud.com"
            className="text-muted-foreground hover:text-accent transition-colors group"
          >
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="#projects"
            className="text-muted-foreground hover:text-accent transition-colors group"
          >
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}