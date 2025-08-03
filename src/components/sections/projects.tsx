"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "DigitAll",
    description: "Native iOS application developed for Allianz",
    icon: "images/digitall.webp",
    technologies: ["Swift", "UIKit", "MVVM"],
    appStoreUrl: "https://apps.apple.com/tr/app/digitall/id6467190986",
    type: "team" as const,
  },
  {
    title: "Globby",
    description: "Mobile game with character progression",
    icon: "images/globby.webp",
    technologies: ["React Native", "Game Logic"],
    appStoreUrl: "https://apps.apple.com/us/app/globby/id6474294730",
    type: "team" as const,
  },
  {
    title: "Elefant",
    description: "Crypto wallet app for secure asset management",
    icon: "images/elefant.webp",
    technologies: ["React Native", "TypeScript", "Zustand"],
    appStoreUrl: "https://apps.apple.com/us/app/elefant/id6455080665",
    type: "team" as const,
  },
  {
    title: "JpegWiz",
    description: "JPEG to PDF Converter",
    icon: "images/jpegwiz.webp",
    technologies: ["SwiftUI", "PDF Generation"],
    appStoreUrl: "https://apps.apple.com/us/app/jpeg-to-pdf-converter-jpegwiz/id6748865454",
    type: "personal" as const,
  },
  {
    title: "ArtVisio",
    description: "AI-powered art recognition app",
    icon: "images/artvisio.webp",
    technologies: ["SwiftUI", "AI Integration", "Firebase"],
    appStoreUrl: "https://apps.apple.com/us/app/artvisio-daily-art/id6744556080",
    type: "personal" as const,
  },
  {
    title: "PhoDone",
    description: "Minimalist to-do list with photo organization",
    icon: "images/phodone.webp",
    technologies: ["SwiftUI", "Core Data"],
    appStoreUrl: "https://apps.apple.com/us/app/phodone-to-do-list-with-photo/id6743808011",
    type: "personal" as const,
  },
]

export function Projects() {
  const teamProjects = projects.filter(project => project.type === "team")
  const personalProjects = projects.filter(project => project.type === "personal")

  const ProjectGrid = ({ projects: projectList }: { projects: typeof projects }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
      {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a 
                href={project.appStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-110 transition-transform duration-350 cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow bg-muted">
                    {project.title === "DigitAll" ? (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl md:text-3xl">
                          D
                        </span>
                      </div>
                    ) : (
                      <img 
                        src={project.icon} 
                        alt={`${project.title} icon`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
    </div>
  )

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">

        {/* Team Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Team Projects</h3>
          <ProjectGrid projects={teamProjects} />
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Personal Projects</h3>
          <ProjectGrid projects={personalProjects} />
        </motion.div>
      </div>
    </section>
  )
}