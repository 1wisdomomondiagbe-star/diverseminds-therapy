import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { dataClient } from '@/api/dataClient';
import { 
  ArrowRight, 
  ArrowLeft, 
  ClipboardList, 
  User, 
  MessageSquare, 
  AlertCircle,
  Calendar,
  Brain,
  Home,
  Loader2,
  CheckCircle2,
  Heart
} from 'lucide-react';

const steps = [
  { id: 1, title: 'About Your Child', icon: User },
  { id: 2, title: 'Communication', icon: MessageSquare },
  { id: 3, title: 'Behavior', icon: AlertCircle },
  { id: 4, title: 'Daily Living', icon: Calendar },
  { id: 5, title: 'Learning', icon: Brain },
  { id: 6, title: 'Setting', icon: Home },
  { id: 7, title: 'Your Goal', icon: Heart },
  { id: 8, title: 'Contact', icon: ClipboardList }
];

export default function ReadinessForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    hasDiagnosis: '',
    communication: [],
    behaviors: [],
    dailyLiving: [],
    learning: [],
    therapySetting: '',
    biggestConcern: '',
    parentName: '',
    phone: '',
    email: '',
    consent: false
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const handleSubmit = async () => {
    if (!formData.consent) return;
    
    setIsSubmitting(true);
    try {
      await dataClient.entities.ServiceInquiry.create(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 8));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <section id="readiness-form" className="py-20 md:py-28 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 bg-white rounded-3xl border border-emerald-100 shadow-lg text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Thank You for Sharing
            </h3>
            <p className="text-slate-600 mb-4">
              A member of our team will review your responses and contact you to discuss whether ABA therapy may be helpful, and which therapy option could be the best fit.
            </p>
            <p className="text-lg font-medium text-slate-700">
              You're taking a positive step — and you don't have to figure this out alone.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="readiness-form" className="py-20 md:py-28 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Not Sure If Your Child Needs ABA Therapy?
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Answer a few simple questions about your child's daily behaviors and skills. 
            This helps us understand your situation and guide you on the next best step.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            This is not a diagnosis • Takes about 2–3 minutes
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-500">Step {currentStep} of 8</span>
            <span className="text-sm text-slate-400">{steps[currentStep - 1].title}</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 8) * 100}%` }}
              className="h-full bg-gradient-to-r from-sky-500 to-teal-500 rounded-full"
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {/* Step 1: About Child */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <User className="w-6 h-6 text-sky-500" />
                    About Your Child
                  </h3>
                  
                  <div>
                    <Label className="text-slate-700 mb-2 block">Child's first name (optional)</Label>
                    <Input
                      value={formData.childName}
                      onChange={(e) => updateFormData('childName', e.target.value)}
                      placeholder="Enter child's name"
                      className="rounded-xl border-slate-200"
                    />
                  </div>

                  <div>
                    <Label className="text-slate-700 mb-3 block">Child's age</Label>
                    <RadioGroup
                      value={formData.childAge}
                      onValueChange={(value) => updateFormData('childAge', value)}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                    >
                      {['Under 3', '3–5', '6–9', '10+'].map((age) => (
                        <div key={age}>
                          <RadioGroupItem value={age} id={age} className="peer sr-only" />
                          <Label
                            htmlFor={age}
                            className="flex items-center justify-center p-4 rounded-xl border-2 border-slate-100 cursor-pointer peer-data-[state=checked]:border-sky-500 peer-data-[state=checked]:bg-sky-50 hover:bg-slate-50 transition-all"
                          >
                            {age}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-slate-700 mb-3 block">Has your child been diagnosed with autism or another developmental condition?</Label>
                    <RadioGroup
                      value={formData.hasDiagnosis}
                      onValueChange={(value) => updateFormData('hasDiagnosis', value)}
                      className="grid grid-cols-2 gap-3"
                    >
                      {['Yes', 'No', 'Not sure', 'Currently being evaluated'].map((option) => (
                        <div key={option}>
                          <RadioGroupItem value={option} id={`diagnosis-${option}`} className="peer sr-only" />
                          <Label
                            htmlFor={`diagnosis-${option}`}
                            className="flex items-center justify-center p-4 rounded-xl border-2 border-slate-100 cursor-pointer peer-data-[state=checked]:border-sky-500 peer-data-[state=checked]:bg-sky-50 hover:bg-slate-50 transition-all text-center"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 2: Communication */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-violet-500" />
                    Communication & Social Skills
                  </h3>
                  <p className="text-slate-500 mb-4">Which best describes your child? (Select all that apply)</p>
                  
                  <div className="space-y-3">
                    {[
                      'Limited or no speech',
                      'Difficulty expressing needs',
                      'Rarely responds to name',
                      'Difficulty playing or interacting with others',
                      'Communicates well for their age'
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => toggleArrayItem('communication', item)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.communication.includes(item)
                            ? 'border-violet-500 bg-violet-50'
                            : 'border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <Checkbox
                          checked={formData.communication.includes(item)}
                          onCheckedChange={() => toggleArrayItem('communication', item)}
                        />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Behavior */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-500" />
                    Behavior & Daily Life
                  </h3>
                  <p className="text-slate-500 mb-4">Have you noticed any of the following?</p>
                  
                  <div className="space-y-3">
                    {[
                      'Frequent meltdowns or tantrums',
                      'Aggression (hitting, biting, throwing objects)',
                      'Difficulty following instructions',
                      'Repetitive behaviors',
                      'Difficulty with transitions',
                      'None of the above'
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => toggleArrayItem('behaviors', item)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.behaviors.includes(item)
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <Checkbox
                          checked={formData.behaviors.includes(item)}
                          onCheckedChange={() => toggleArrayItem('behaviors', item)}
                        />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Daily Living */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-emerald-500" />
                    Daily Living Skills
                  </h3>
                  <p className="text-slate-500 mb-4">Select any that apply:</p>
                  
                  <div className="space-y-3">
                    {[
                      'Difficulty with toileting',
                      'Difficulty with eating or feeding',
                      'Difficulty with dressing or hygiene',
                      'Difficulty with sleep routines',
                      'Manages daily routines well'
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => toggleArrayItem('dailyLiving', item)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.dailyLiving.includes(item)
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <Checkbox
                          checked={formData.dailyLiving.includes(item)}
                          onCheckedChange={() => toggleArrayItem('dailyLiving', item)}
                        />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Learning */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <Brain className="w-6 h-6 text-rose-500" />
                    Learning & Attention
                  </h3>
                  <p className="text-slate-500 mb-4">Select any that apply:</p>
                  
                  <div className="space-y-3">
                    {[
                      'Short attention span',
                      'Difficulty following simple instructions',
                      'Struggles in school or daycare',
                      'Learns best with structure and repetition',
                      'No major concerns'
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => toggleArrayItem('learning', item)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.learning.includes(item)
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <Checkbox
                          checked={formData.learning.includes(item)}
                          onCheckedChange={() => toggleArrayItem('learning', item)}
                        />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Setting */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <Home className="w-6 h-6 text-teal-500" />
                    Therapy Setting Preference
                  </h3>
                  <p className="text-slate-500 mb-4">Where do you feel your child would be most comfortable receiving therapy?</p>
                  
                  <RadioGroup
                    value={formData.therapySetting}
                    onValueChange={(value) => updateFormData('therapySetting', value)}
                    className="space-y-3"
                  >
                    {[
                      { value: 'home', label: 'At home' },
                      { value: 'clinic', label: 'In a clinic setting' },
                      { value: 'both', label: 'A combination of both' },
                      { value: 'guidance', label: "Not sure — I'd like guidance" }
                    ].map((option) => (
                      <div key={option.value}>
                        <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                        <Label
                          htmlFor={option.value}
                          className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-100 cursor-pointer peer-data-[state=checked]:border-teal-500 peer-data-[state=checked]:bg-teal-50 hover:bg-slate-50 transition-all"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 7: Goal */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-pink-500" />
                    Your Biggest Concern or Goal
                  </h3>
                  <p className="text-slate-500 mb-4">What would you most like help with for your child right now?</p>
                  
                  <Textarea
                    value={formData.biggestConcern}
                    onChange={(e) => updateFormData('biggestConcern', e.target.value)}
                    placeholder="Share your thoughts..."
                    className="min-h-[150px] rounded-xl border-slate-200"
                  />
                </div>
              )}

              {/* Step 8: Contact */}
              {currentStep === 8 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <ClipboardList className="w-6 h-6 text-sky-500" />
                    Contact Information
                  </h3>
                  
                  <div>
                    <Label className="text-slate-700 mb-2 block">Parent/Caregiver Name *</Label>
                    <Input
                      value={formData.parentName}
                      onChange={(e) => updateFormData('parentName', e.target.value)}
                      placeholder="Your name"
                      className="rounded-xl border-slate-200"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-slate-700 mb-2 block">Phone number or WhatsApp *</Label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="Your phone number"
                      className="rounded-xl border-slate-200"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-slate-700 mb-2 block">Email address *</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="your@email.com"
                      className="rounded-xl border-slate-200"
                      required
                    />
                  </div>

                  <div
                    onClick={() => updateFormData('consent', !formData.consent)}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.consent
                        ? 'border-sky-500 bg-sky-50'
                        : 'border-slate-100 hover:bg-slate-50'
                    }`}
                  >
                    <Checkbox
                      checked={formData.consent}
                      onCheckedChange={(checked) => updateFormData('consent', checked)}
                      className="mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">
                      I agree to be contacted to discuss next steps for my child.
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 text-center">
                    Your information is private and confidential.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="px-8 pb-8 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="text-slate-500 hover:text-slate-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {currentStep < 8 ? (
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white rounded-xl px-6"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.consent || !formData.email || !formData.phone || !formData.parentName || isSubmitting}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl px-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    See If ABA Therapy May Help
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
