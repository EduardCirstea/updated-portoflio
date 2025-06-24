'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, XCircle, X } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000) // Auto dismiss after 5 seconds
  }

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Initialize EmailJS (replace with your actual keys)
      const serviceId = 'service_nqdfhoi' // Get from EmailJS dashboard
      const templateId = 'template_3u9zq1e' // Get from EmailJS dashboard  
      const publicKey = 'PTP52oK6TWZU0YA6p' // Get from EmailJS dashboard

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'cirsteamarcueduard@gmail.com',
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
      showToast('success', 'Message sent successfully! I will get back to you soon.')
    } catch (error) {
      console.error('Error sending email:', error)
      showToast('error', 'Sorry, there was an error sending your message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cirsteamarcueduard@gmail.com',
      href: 'mailto:cirsteamarcueduard@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+40 756 677 365',
      href: 'tel:+40756677365'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bucharest, Romania',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/EduardCirstea',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eduard-cirstea-1ba2a022b/',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Let's Talk
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-3xl mx-auto px-4">
          Have a project idea or looking for a passionate developer to join your team? I'd be delighted to hear from you.
           Whether you're hiring or seeking a collaborator, let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/30" style={{boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-800 mb-4 sm:mb-6 lg:mb-8 text-center md:text-left">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-primary-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-primary-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-primary-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Message subject"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 border border-primary-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Write your message here..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl h-full border border-white/30" style={{boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-800 mb-4 sm:mb-6 lg:mb-8 text-center md:text-left">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-primary-500 font-medium">{info.label}</p>
                      <p className="text-sm sm:text-lg text-primary-800 font-semibold break-all sm:break-normal">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-primary-200">
                <h4 className="text-lg font-bold text-primary-800 mb-4 text-center md:text-left">Follow Me</h4>
                <div className="flex space-x-4 justify-center md:justify-start">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 glass-effect rounded-2xl hover-glow transition-all duration-200 text-primary-600 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-8 h-8 transition-colors duration-200 group-hover:text-accent-600" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 50, x: 50 }}
              className="fixed bottom-20 right-6 z-50 max-w-sm md:bottom-6"
            >
              <div className={`glass-effect rounded-2xl p-4 shadow-2xl border ${
                toast.type === 'success' 
                  ? 'border-green-200 bg-green-50/80' 
                  : 'border-red-200 bg-red-50/80'
              }`}>
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 ${
                    toast.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {toast.type === 'success' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <XCircle className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      toast.type === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {toast.message}
                    </p>
                  </div>
                  <button
                    onClick={() => setToast(null)}
                    className={`flex-shrink-0 ${
                      toast.type === 'success' ? 'text-green-400 hover:text-green-600' : 'text-red-400 hover:text-red-600'
                    } transition-colors duration-200`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  )
}

export default Contact 