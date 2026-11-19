import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  Hand, 
  BookOpen, 
  UserCheck, 
  Users, 
  GraduationCap,
  Languages,
  ClipboardCheck
} from 'lucide-react';

export default function DMServicesGrid() {
  const services = [
    {
      icon: Brain,
      title: 'ABA Therapy',
      description: 'Evidence-based behavioral intervention for skill development',
      color: 'from-[#ede6f8] to-[#d9c9ef]'
    },
    {
      icon: MessageSquare,
      title: 'Speech Therapy',
      description: 'Communication and language development support',
      color: 'from-[#dcecfb] to-[#bdd9f5]'
    },
    {
      icon: Hand,
      title: 'Occupational Therapy',
      description: 'Fine motor skills and daily living activities',
      color: 'from-[#d9f0e7] to-[#b9e0cf]'
    },
    {
      icon: BookOpen,
      title: 'Homeschooling Support',
      description: 'Personalized educational programs at home',
      color: 'from-[#f1f7fd] to-[#dcecfb]'
    },
    {
      icon: UserCheck,
      title: 'Shadow Teacher',
      description: 'One-on-one school support services',
      color: 'from-[#eef8f4] to-[#d9f0e7]'
    },
    {
      icon: Users,
      title: 'Parent Training',
      description: 'Coaching and guidance for caregivers',
      color: 'from-[#ede6f8] to-[#d9c9ef]'
    },
    {
      icon: GraduationCap,
      title: 'Staff Training',
      description: 'Professional capacity building programs',
      color: 'from-[#dcecfb] to-[#bdd9f5]'
    },
    {
      icon: Languages,
      title: 'Sign Language',
      description: 'Sign language tutoring and communication',
      color: 'from-[#d9f0e7] to-[#b9e0cf]'
    },
    {
      icon: ClipboardCheck,
      title: 'Assessments',
      description: 'Online and physical developmental evaluations',
      color: 'from-[#f1f7fd] to-[#dcecfb]'
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-r from-[#f6f2fb]/45 via-white to-[#f1f7fd]/50 border-y border-[#e5daf3]/50 shadow-sm py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 px-2">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            Comprehensive support tailored to your child's unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg`}>
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center leading-tight">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center leading-snug">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}