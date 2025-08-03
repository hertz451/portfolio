"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Software Engineer with 2+ years at Wunder Innovation Studio, specializing in iOS Engineering. 
            I&apos;m passionate about crafting elegant, performant mobile applications using modern iOS frameworks 
            and clean architecture principles that deliver exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}