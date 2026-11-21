import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { dataClient } from '@/api/dataClient';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function TherapyFitForm() {
  const [formData, setFormData] = useState({
    child_name: '',
    child_age: '',
    diagnosis_status: '',
    communication_skills: [],
    behavior_concerns: [],
    daily_living_skills: [],
    learning_attention: [],
    therapy_preference: '',
    main_concern: '',
    parent_name: '',
    phone: '',
    email: '',
    consent_to_contact: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await dataClient.entities.ServiceInquiry.create(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="assessment-form" className="bg-gradient-to-b from-cream-50/30 via-white to-teal-50/20 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#eef8f4] rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 text-center shadow-2xl border border-teal-100/50"
          >
            <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Thank you for sharing about your child.
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 px-4">
              A member of our team will review your responses and contact you to discuss whether ABA therapy may be helpful, 
              and which therapy option could be the best fit.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-teal-700 px-4">
              You're taking a positive step — and you don't have to figure this out alone.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment-form" className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 leading-tight">
            Not Sure If Your Child Needs ABA Therapy?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-2 px-4">
            Answer a few simple questions about your child's daily behaviors and skills.
          </p>
          <p className="text-sm sm:text-base text-gray-500 px-4">
            This helps us understand your situation and guide you on the next best step.
          </p>
          <p className="text-xs sm:text-sm text-teal-600 font-medium mt-2">
            This is not a diagnosis and takes about 2–3 minutes.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 lg:p-12 shadow-2xl space-y-8 sm:space-y-10 border border-teal-100/50"
        >
          {/* Section 1: About Your Child */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-teal-200 pb-3">
              About Your Child
            </h3>
            
            <div>
              <Label htmlFor="child_name" className="text-gray-700 mb-2 block">
                Child's first name (optional)
              </Label>
              <Input
                id="child_name"
                value={formData.child_name}
                onChange={(e) => setFormData({ ...formData, child_name: e.target.value })}
                className="border-gray-300"
              />
            </div>

            <div>
              <Label className="text-gray-700 mb-3 block">Child's age</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: 'under_3', label: 'Under 3' },
                  { value: '3_5', label: '3–5' },
                  { value: '6_9', label: '6–9' },
                  { value: '10_plus', label: '10+' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, child_age: option.value })}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      formData.child_age === option.value
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-gray-300 hover:border-teal-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-gray-700 mb-3 block">
                Has your child been diagnosed with autism or another developmental condition?
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                  { value: 'not_sure', label: 'Not sure' },
                  { value: 'being_evaluated', label: 'Currently being evaluated' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, diagnosis_status: option.value })}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      formData.diagnosis_status === option.value
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-gray-300 hover:border-teal-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Communication & Social Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-200 pb-3">
              Communication & Social Skills
            </h3>
            <p className="text-gray-600">Which best describes your child? (Select all that apply)</p>
            
            <div className="space-y-3">
              {[
                'Limited or no speech',
                'Difficulty expressing needs',
                'Rarely responds to name',
                'Difficulty playing or interacting with others',
                'Communicates well for their age'
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <Checkbox
                    id={`comm_${option}`}
                    checked={formData.communication_skills.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('communication_skills', option)}
                  />
                  <Label htmlFor={`comm_${option}`} className="text-gray-700 cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Behavior & Daily Life */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-200 pb-3">
              Behavior & Daily Life
            </h3>
            <p className="text-gray-600">Have you noticed any of the following?</p>
            
            <div className="space-y-3">
              {[
                'Frequent meltdowns or tantrums',
                'Aggression (hitting, biting, throwing objects)',
                'Difficulty following instructions',
                'Repetitive behaviors',
                'Difficulty with transitions',
                'None of the above'
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <Checkbox
                    id={`behavior_${option}`}
                    checked={formData.behavior_concerns.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('behavior_concerns', option)}
                  />
                  <Label htmlFor={`behavior_${option}`} className="text-gray-700 cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Daily Living Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-teal-200 pb-3">
              Daily Living Skills
            </h3>
            
            <div className="space-y-3">
              {[
                'Difficulty with toileting',
                'Difficulty with eating or feeding',
                'Difficulty with dressing or hygiene',
                'Difficulty with sleep routines',
                'Manages daily routines well'
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-teal-50 transition-colors">
                  <Checkbox
                    id={`daily_${option}`}
                    checked={formData.daily_living_skills.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('daily_living_skills', option)}
                  />
                  <Label htmlFor={`daily_${option}`} className="text-gray-700 cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Learning & Attention */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-200 pb-3">
              Learning & Attention
            </h3>
            
            <div className="space-y-3">
              {[
                'Short attention span',
                'Difficulty following simple instructions',
                'Struggles in school or daycare',
                'Learns best with structure and repetition',
                'No major concerns'
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <Checkbox
                    id={`learning_${option}`}
                    checked={formData.learning_attention.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('learning_attention', option)}
                  />
                  <Label htmlFor={`learning_${option}`} className="text-gray-700 cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Therapy Setting Preference */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-200 pb-3">
              Therapy Setting Preference
            </h3>
            <p className="text-gray-600">Where do you feel your child would be most comfortable receiving therapy?</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: 'at_home', label: 'At home' },
                { value: 'in_clinic', label: 'In a clinic setting' },
                { value: 'combination', label: 'A combination of both' },
                { value: 'not_sure', label: "Not sure — I'd like guidance" }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, therapy_preference: option.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.therapy_preference === option.value
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                      : 'border-gray-300 hover:border-teal-400'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 7: Main Concern */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-teal-200 pb-3">
              Your Biggest Concern or Goal
            </h3>
            <div>
              <Label htmlFor="main_concern" className="text-gray-700 mb-2 block">
                What would you most like help with for your child right now?
              </Label>
              <Textarea
                id="main_concern"
                value={formData.main_concern}
                onChange={(e) => setFormData({ ...formData, main_concern: e.target.value })}
                rows={4}
                className="border-gray-300"
                placeholder="Share your thoughts..."
              />
            </div>
          </div>

          {/* Section 8: Contact Information */}
          <div className="space-y-6 bg-teal-50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            
            <div>
              <Label htmlFor="parent_name" className="text-gray-700 mb-2 block">
                Parent/Caregiver Name *
              </Label>
              <Input
                id="parent_name"
                value={formData.parent_name}
                onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                required
                className="border-gray-300 bg-white"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                Phone number or WhatsApp
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-gray-300 bg-white"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 mb-2 block">
                Email address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-gray-300 bg-white"
              />
            </div>

            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
              <Checkbox
                id="consent"
                checked={formData.consent_to_contact}
                onCheckedChange={(checked) => setFormData({ ...formData, consent_to_contact: checked })}
                required
              />
              <Label htmlFor="consent" className="text-gray-700 cursor-pointer">
                I agree to be contacted to discuss next steps for my child. *
              </Label>
            </div>
          </div>

          <div className="text-center pt-4 sm:pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto relative overflow-hidden group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  <span className="relative z-10">Submitting...</span>
                </>
              ) : (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">See If ABA Therapy May Help My Child</span>
                </>
              )}
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-4">
              Your information is private and confidential.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
