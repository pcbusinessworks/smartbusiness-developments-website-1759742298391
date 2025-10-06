import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { features } from '@/config/landing'
import { staggerContainer, staggerItem } from '@/utils/animations'

interface FeaturesSectionProps {
  className?: string
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-100 to-blue-200 text-blue-600',
      green: 'from-green-100 to-green-200 text-green-600',
      purple: 'from-purple-100 to-purple-200 text-purple-600',
      orange: 'from-orange-100 to-orange-200 text-orange-600',
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="features" className={`section-padding bg-white ${className}`}>
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
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            Features
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Everything You Need to Succeed
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Powerful features designed to help you achieve your goals faster and more efficiently.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={staggerItem}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon
                  name={feature.icon as any}
                  size={32}
                />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
