import { motion } from 'framer-motion'
import { MailIcon, PhoneIcon, MapPinIcon, Icon } from '@/components/ui/Icon'
import { landingInfo } from '@/config/landing'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { name: 'Facebook', href: landingInfo.socialMedia.facebook, icon: 'Facebook' },
      { name: 'LinkedIn', href: landingInfo.socialMedia.linkedin, icon: 'Linkedin' },
      { name: 'Twitter', href: landingInfo.socialMedia.twitter, icon: 'Twitter' },
      { name: 'Instagram', href: landingInfo.socialMedia.instagram, icon: 'Instagram' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  }

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Portfolio Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {landingInfo.logo ? (
                    <img
                      src={landingInfo.logo}
                      alt={landingInfo.name}
                      className="h-8 w-8"
                    />
                  ) : (
                    <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {landingInfo.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-xl font-bold">{landingInfo.name}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {landingInfo.description}
                </p>
                <div className="flex space-x-4">
                  {Object.entries(landingInfo.socialMedia).map(([platform, url]) => {
                    if (!url) return null
                    const IconComponent = footerLinks.social.find(s => s.name.toLowerCase() === platform)?.icon
                    if (!IconComponent) return null
                    
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-400 transition-colors duration-200"
                      >
                        <Icon name={IconComponent as any} size={20} />
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Navigation</h3>
                <ul className="space-y-2">
                  {footerLinks.navigation.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Follow Me</h3>
                <ul className="space-y-2">
                  {footerLinks.social.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                      >
                        <Icon name={link.icon as any} size={16} />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MailIcon size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${landingInfo.email}`}
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {landingInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <PhoneIcon size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${landingInfo.phone}`}
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {landingInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPinIcon size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <a
                      href={landingInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {landingInfo.website}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-slate-400 text-sm">
              © {currentYear} {landingInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
