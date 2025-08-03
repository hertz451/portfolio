"use client"

import { motion } from "framer-motion"

const keyTechnologies = [
  "Swift", "UIKit", "SwiftUI", 
  "MVVM", "RESTful APIs", "Firebase", "React Native", "TypeScript"
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Key Technologies</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies used across the projects above
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {keyTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-background text-foreground rounded-full text-base font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}