import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Brain, Shirt, Smile, BookOpen } from 'lucide-react';

const skills = [
  {
    icon: MessageCircle,
    title: 'Communication',
    description: 'Verbal and non-verbal expression',
    color: 'bg-sky-50 text-sky-600'
  },
  {
    icon: Users,
    title: 'Social Interaction',
    description: 'Play and connection with others',
    color: 'bg-violet-50 text-violet-600'
  },
  {
    icon: Brain,
    title: 'Focus & Attention',
    description: 'Learning readiness skills',
    color: 'bg-amber-50 text-amber-600'
  },
  {
    icon: Shirt,
    title: 'Daily Living',
    description: 'Toileting, dressing, eating',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: Smile,
    title: 'Emotional Regulation',
    description: 'Behavior support strategies',
    color: 'bg-rose-50 text-rose-600'
  },
  {
    icon: BookOpen,
    title: 'School Readiness',
    description: 'Routine and structure skills',
    color: 'bg-teal-50 text-teal-600'
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            How ABA Therapy Supports
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
              Children and Families
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            ABA therapy helps children build meaningful, everyday skills
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${skill.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-slate-500">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 mt-12 text-lg"
        >
          Every therapy plan is personalized, realistic, and adjusted as your child grows.
        </motion.p>
      </div>
    </section>
  );
}