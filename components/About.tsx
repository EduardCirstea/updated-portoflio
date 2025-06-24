'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiGit, SiAmazon, SiNodedotjs, SiNestjs, SiPostgresql, 
  SiMongodb, SiPostman, SiPrisma, SiExpress, SiGraphql, SiVercel, SiDocker,
  SiFigma, SiJest, SiCircleci
} from 'react-icons/si'

const About = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
            I am a full stack developer passionate about creating exceptional digital experiences 
            and innovative technical solutions.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8 shadow-xl" style={{boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center md:text-left">
                My Story
              </h3>
              <div className="space-y-4 text-primary-600 text-center md:text-left">
                <p>
                  I am a full stack developer with over 3.5+ years of experience in creating 
                  modern and scalable web applications. My passion for technology 
                  started in college and since then I haven't stopped learning and exploring 
                  new technologies.
                </p>
                <p>
                  I enjoy working on both frontend and backend, creating intuitive 
                  user experiences and robust architectures. I always stay up to date with 
                  the latest trends in web development and I like to experiment 
                  with emerging technologies.
                </p>
                <p>
                Even outside of work, you'll often find me exploring new frameworks, testing ideas for side projects, or diving into technical deep-dives to better understand how things work under the hood.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8 shadow-xl" style={{boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6 text-center md:text-left">
                Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Years Experience', value: '3.5+' },
                  { label: 'Projects Completed', value: '30+' },
                  { label: 'Technologies Used', value: '15+' },
                  { label: 'Happy Clients', value: '10+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-primary-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
              { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
              { name: 'SCSS', Icon: SiSass, color: '#CC6699' },
              { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
              { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
              { name: 'React', Icon: SiReact, color: '#61DAFB' },
              { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
              { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
              { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
              { name: 'Express', Icon: SiExpress, color: '#000000' },
              { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
              { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
              { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
              { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
              { name: 'Git', Icon: SiGit, color: '#F05032' },
              { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
              { name: 'Vercel', Icon: SiVercel, color: '#000000' },
              { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
              { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
              { name: 'Jest', Icon: SiJest, color: '#C21325' },
              { name: 'Figma', Icon: SiFigma, color: '#F24E1E' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.3 }}
                className="group flex flex-col items-center relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setHoveredTech(hoveredTech === tech.name ? null : tech.name)}
              >
                <div className="p-3 rounded-xl hover:bg-white/80 transition-all duration-150 cursor-pointer shadow-sm hover:shadow-md">
                  <tech.Icon 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl grayscale group-hover:grayscale-0 transition-all duration-150" 
                    style={{ color: tech.color }}
                  />
                </div>
                {/* Tooltip */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-10 left-1 sm:left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-20 shadow-xl"
                  >
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 