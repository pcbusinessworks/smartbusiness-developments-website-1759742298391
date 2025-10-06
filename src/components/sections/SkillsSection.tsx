import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { skills } from '@/config/landing'
import { staggerContainer, staggerItem } from '@/utils/animations'

interface SkillsSectionProps {
  className?: string
}

export function SkillsSection({ className }: SkillsSectionProps) {

  return (
    <section id="skills" className={`section-padding bg-slate-50 ${className}`}>
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
            className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6"
          >
            Skills & Expertise
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            What I Do Best
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical skills and creative abilities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={staggerItem}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <Icon
                    name={skill.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Proficiency</span>
                <span className="text-sm font-semibold text-purple-600">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
