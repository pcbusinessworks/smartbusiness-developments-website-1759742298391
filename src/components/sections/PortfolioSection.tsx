import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ExternalLinkIcon, GithubIcon } from '@/components/ui/Icon'
import { projects } from '@/config/landing'
import { staggerContainer, staggerItem } from '@/utils/animations'

interface PortfolioSectionProps {
  className?: string
}

export function PortfolioSection({ className }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6"
          >
            Portfolio
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            My Recent Work
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-8"
          >
            A showcase of my latest projects and creative work.
          </motion.p>
          
          {/* Filter Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600' 
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🎨</div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    {project.liveUrl && (
                      <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                        <ExternalLinkIcon size={16} className="mr-1" />
                        Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">
                        <GithubIcon size={16} className="mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLinkIcon size={16} className="mr-1" />
                      View Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <GithubIcon size={16} className="mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
