import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function DMServiceForm() {
  const [formData, setFormData] = useState({
    client_name: '',
    client_age: '',
    diagnosis_status: '',
    observation_timeframe: '',
    parent_emotion: '',
    current_challenges: [],
    services_of_interest: [],
    delivery_preference: '',
    main_goal: '',
    parent_name: '',
    phone: '',
    email: '',
    location: '',
    consent_to_contact: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [toast, setToast] = useState(null);

  const challenges = [
  'Communication difficulties',
  'Behavioral challenges',
  'Social skills',
  'Motor skills development',
  'Academic support needs',
  'Daily living skills',
  'Attention and focus'];


  const services = [
  'ABA Therapy',
  'Speech Therapy',
  'Occupational Therapy',
  'Homeschooling Support',
  'Shadow Teacher',
  'Parent Training',
  'Staff Training',
  'Sign Language',
  'Assessment'];


  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ?
      prev[field].filter((item) => item !== value) :
      [...prev[field], value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setToast(null);

    if (!formData.parent_name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.consent_to_contact) {
      const message = 'Please complete your name, phone, email, and consent before sending.';
      setErrorMessage(message);
      setToast({ type: 'error', message });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your inquiry. Please try again.');
      }

      setToast({ type: 'success', message: 'Your inquiry was sent successfully. We’ll be in touch soon.' });
      setIsSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      const message = error instanceof Error ? error.message : 'We could not send your inquiry. Please try again.';
      setErrorMessage(message);
      setToast({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="service-form" className="bg-gradient-to-b from-[#f6f2fb]/45 via-white to-[#f1f7fd]/45 py-12 sm:py-16 md:py-20 lg:py-28">
        {toast && <div role="status" aria-live="polite" className="fixed top-5 right-5 z-50 max-w-sm rounded-xl bg-emerald-600 px-5 py-4 text-sm font-medium text-white shadow-2xl">{toast.message}</div>}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-50/80 via-white to-blue-50/60 rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 text-center shadow-2xl border border-[#e5daf3]/50">

            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#845cc5] to-[#0a77e2] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6">We've received your inquiry and will contact you within 2-4 hours to discuss the best support for your child.

            </p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Thank you for getting started with DiverseMinds!

            </p>
          </motion.div>
        </div>
      </section>);

  }

  return (
    <section id="service-form" className="bg-gradient-to-b from-[#f6f2fb]/45 via-white to-[#f1f7fd]/45 py-12 sm:py-16 md:py-20 lg:py-28">
      {toast && <div role="alert" aria-live="assertive" className={`fixed top-5 right-5 z-50 max-w-sm rounded-xl px-5 py-4 text-sm font-medium text-white shadow-2xl ${toast.type === 'error' ? 'bg-red-600' : 'bg-emerald-600'}`}>{toast.message}</div>}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Let's Find the Right Support
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Tell us about your child's needs and we'll help you get started
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 rounded-3xl sm:rounded-[2rem] p-5 sm:p-8 lg:p-12 shadow-2xl space-y-8 sm:space-y-10 border border-[#e5daf3]/50">

          {/* Child Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Child/Client Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client_name">Child's Name (Optional)</Label>
                <Input
                  id="client_name"
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                  placeholder="Enter name"
                  className="mt-1" />

              </div>
              
              <div>
                <Label htmlFor="client_age">Age Range</Label>
                <select
                  id="client_age"
                  value={formData.client_age}
                  onChange={(e) => setFormData({ ...formData, client_age: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">

                  <option value="">Select age range</option>
                  <option value="under_3">2-3 years</option>
                  <option value="3_5">4-5 years</option>
                  <option value="6_9">6-9 years</option>
                  <option value="10_12">10-12 years</option>
                  <option value="13_plus">13-18 years</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="diagnosis_status">Has your child ever received a professional evaluation or diagnosis?</Label>
              <select
                id="diagnosis_status"
                value={formData.diagnosis_status}
                onChange={(e) => setFormData({ ...formData, diagnosis_status: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">

                <option value="">Select status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="in_progress">Currently in progress</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <Label htmlFor="observation_timeframe">How long have you noticed these concerns?</Label>
              <select
                id="observation_timeframe"
                value={formData.observation_timeframe}
                onChange={(e) => setFormData({ ...formData, observation_timeframe: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">

                <option value="">Select timeframe</option>
                <option value="recently">Recently (last few months)</option>
                <option value="over_time">Over time</option>
                <option value="early_childhood">Since early childhood</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
          </div>

          {/* Current Challenges */}
          <div className="space-y-4">
            <Label>What challenges are you experiencing? (Select all that apply)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {challenges.map((challenge) =>
              <div key={challenge} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#f6f2fb]/50 transition-colors">
                  <Checkbox
                  id={challenge}
                  checked={formData.current_challenges.includes(challenge)}
                  onCheckedChange={() => handleCheckboxChange('current_challenges', challenge)} />

                  <label htmlFor={challenge} className="text-sm sm:text-base text-gray-700 cursor-pointer flex-1">
                    {challenge}
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Services of Interest */}
          <div className="space-y-4">
            <Label>Which services are you interested in? (Select all that apply)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) =>
              <div key={service} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#f6f2fb]/50 transition-colors">
                  <Checkbox
                  id={service}
                  checked={formData.services_of_interest.includes(service)}
                  onCheckedChange={() => handleCheckboxChange('services_of_interest', service)} />

                  <label htmlFor={service} className="text-sm sm:text-base text-gray-700 cursor-pointer flex-1">
                    {service}
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Preference */}
          <div>
            <Label htmlFor="delivery_preference">Preferred Service Delivery</Label>
            <select
              id="delivery_preference"
              value={formData.delivery_preference}
              onChange={(e) => setFormData({ ...formData, delivery_preference: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">

              <option value="">Select preference</option>
              <option value="online">Online sessions</option>
              <option value="home_based">Home-based services</option>
              <option value="school_based">School-based services</option>
              <option value="both">Combination of multiple options</option>
              <option value="not_sure">Not sure yet</option>
            </select>
          </div>

          {/* Main Goal */}
          <div>
            <Label htmlFor="main_goal">What's your main goal or concern?</Label>
            <Textarea
              id="main_goal"
              value={formData.main_goal}
              onChange={(e) => setFormData({ ...formData, main_goal: e.target.value })}
              placeholder="Tell us what you hope to achieve..."
              className="mt-1"
              rows={4} />

          </div>

          {/* Parent Emotion */}
          <div>
            <Label htmlFor="parent_emotion">How are you feeling about this right now? (Optional)</Label>
            <select
              id="parent_emotion"
              value={formData.parent_emotion}
              onChange={(e) => setFormData({ ...formData, parent_emotion: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">

              <option value="">Select one</option>
              <option value="just_exploring">Just exploring</option>
              <option value="slightly_concerned">Slightly concerned</option>
              <option value="looking_for_guidance">Looking for guidance</option>
              <option value="feeling_overwhelmed">Feeling overwhelmed</option>
            </select>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Your Contact Information</h3>
            
            <div>
              <Label htmlFor="parent_name">Your Name *</Label>
              <Input
                id="parent_name"
                value={formData.parent_name}
                onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                placeholder="Enter your name"
                className="mt-1"
                required />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number / WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234..."
                  className="mt-1 text-base"
                  required />

              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="mt-1 text-base"
                  required />

              </div>
            </div>

            <div>
              <Label htmlFor="location">Your Location (City/Country)</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Lagos, Nigeria"
                className="mt-1" />

            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent_to_contact}
              onCheckedChange={(checked) => setFormData({ ...formData, consent_to_contact: checked })}
              required />

            <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
              I consent to be contacted by DiverseMinds regarding my inquiry *
            </label>
          </div>

          {/* Submit Button */}
          {errorMessage && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{errorMessage}</p>}
          <div className="flex flex-col items-center gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="bg-gradient-to-r from-[#845cc5] to-[#0a77e2] hover:from-[#7049b5] hover:to-[#075fb8] text-white px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto relative overflow-hidden group">

              {isSubmitting ?
              <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  <span className="relative z-10">Submitting...</span>
                </> :

              <>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Get Started with DiverseMinds</span>
                </>
              }
            </Button>
            <p className="text-sm text-gray-600 text-center max-w-2xl">
              This form is for informational purposes only and does not provide a diagnosis or medical advice.
            </p>
          </div>
        </motion.form>
      </div>
    </section>);

}
