import { motion } from 'framer-motion'
import { socialProof } from '@/config/landing'
import { staggerContainer, staggerItem } from '@/utils/animations'

interface SocialProofSectionProps {
  className?: string
}

export function SocialProofSection({ className }: SocialProofSectionProps) {
  return (
    <section className={`py-12 bg-white border-b border-slate-200 ${className}`}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            variants={staggerItem}
            className="text-slate-600 text-sm font-medium mb-8"
          >
            Trusted by leading companies worldwide
          </motion.p>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
          >
            {socialProof.logos.map((company, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-center justify-center"
              >
                <div className="w-32 h-12 bg-slate-200 rounded flex items-center justify-center">
                  <span className="text-slate-500 text-sm font-medium">{company.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
