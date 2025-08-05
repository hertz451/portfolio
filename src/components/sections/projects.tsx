"use client"

import { motion } from "framer-motion"

const projects = [
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
  return (
    <section id="Personal Projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Personal Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {projects.map((project, index) => (
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
                      <img 
                        src={project.icon} 
                        alt={`${project.title} icon`}
                        className="w-full h-full object-cover"
                      />
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
        </motion.div>
      </div>
    </section>
  )
}
