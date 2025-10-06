import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { benefits } from '@/config/landing'
import { staggerContainer, staggerItem } from '@/utils/animations'

interface BenefitsSectionProps {
  className?: string
}

export function BenefitsSection({ className }: BenefitsSectionProps) {
  return (
    <section id="benefits" className={`section-padding bg-slate-50 ${className}`}>
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
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
          >
            Benefits
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Proven Results
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            See the measurable impact our solution has on businesses like yours.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={staggerItem}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-green-600"
                />
              </div>
              
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {benefit.stat}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
