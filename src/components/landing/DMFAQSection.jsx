import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function DMFAQSection() {
  const faqs = [
    {
      question: 'What is DiverseMinds Therapy?',
      answer: 'DiverseMinds Therapy provides supportive, child-focused therapy services designed to help children build important life skills such as communication, daily routines, emotional regulation, and social interaction. Our approach is compassionate, respectful, and tailored to each child and family.'
    },
    {
      question: 'Do I need a diagnosis before reaching out?',
      answer: 'No. A diagnosis is not required to contact us or explore support. Many parents reach out simply because they have questions or want guidance. We\'re happy to talk and help you understand possible next steps.'
    },
    {
      question: 'Is this a medical or diagnostic service?',
      answer: 'No. DiverseMinds Therapy does not provide medical diagnoses. Our services focus on support, skill-building, and guidance, and any recommendations are made in collaboration with families and qualified professionals when appropriate.'
    },
    {
      question: 'What age groups do you work with?',
      answer: 'We work with children across different developmental stages. The specific age range we support may vary depending on the service and the child\'s individual needs.'
    },
    {
      question: 'What types of challenges can therapy help with?',
      answer: 'Therapy may be helpful for children who need support with areas such as: Communication and language development, Social interaction, Emotional regulation, Daily routines and transitions, Learning readiness and independence. Every child is different, and support is always individualized.'
    },
    {
      question: 'How involved are parents in the therapy process?',
      answer: 'Parent involvement is encouraged and valued. We believe supporting the family as a whole helps create consistency and meaningful progress for the child.'
    },
    {
      question: 'How long does therapy usually last?',
      answer: 'There is no fixed timeline. Therapy duration depends on the child\'s needs, goals, and progress. Support is always reviewed and adjusted over time.'
    },
    {
      question: 'Will therapy guarantee results?',
      answer: 'No service can guarantee specific outcomes. Progress varies for every child, and development happens at different paces. Our goal is to provide consistent, thoughtful support in a positive environment.'
    },
    {
      question: 'What happens after I submit the intake form?',
      answer: 'After you submit the form: Our care team reviews your information, You receive a follow-up email, We may invite you to a consultation to discuss your concerns and answer questions. Submitting the form does not commit you to services.'
    },
    {
      question: 'Is my information kept private?',
      answer: 'Yes. All information shared with DiverseMinds Therapy is treated with care and confidentiality. We only use your details to communicate with you and support your inquiry.'
    },
    {
      question: 'How do I know if therapy is right for my child?',
      answer: 'A conversation is the best place to start. We\'ll listen to your concerns, answer your questions, and help you explore whether therapy could be a helpful option for your child and family.'
    },
    {
      question: 'How do I get started?',
      answer: 'You can get started by: Filling out our intake form, Contacting us via email or phone, Scheduling a consultation. We\'re here to guide you—no pressure, no obligation.'
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-white via-purple-50/30 to-blue-50/20 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            🌱 Frequently Asked Questions — DiverseMinds Therapy
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e5daf3]/50 shadow-md hover:shadow-lg transition-shadow px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-[#845cc5] py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 pb-4 sm:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            Still have questions? We're happy to listen and help you explore your options.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
