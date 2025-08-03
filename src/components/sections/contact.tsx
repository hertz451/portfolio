"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8">Let&apos;s Connect</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <a 
                href="mailto:omer.kazar@icloud.com"
                className="flex flex-col items-center space-y-4 group cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-2">Email</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    omer.kazar@icloud.com
                  </p>
                </div>
              </a>

              <a 
                href="tel:+905302347865"
                className="flex flex-col items-center space-y-4 group cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-2">Phone</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    +90 530 234 78 65
                  </p>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps/search/Edirne,+Türkiye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-4 group cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-lg group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-2">Location</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    Edirne, Türkiye
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}