'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactEnquirySchema, ContactEnquiryFormData, ENQUIRY_TYPES } from '@/lib/validations/enquiry';
import { submitContactEnquiry } from '@/actions/enquiry';
import { FormField } from './FormField';
import { SelectField } from './SelectField';
import { Honeypot } from './Honeypot';
import { Button } from '@/components/ui/Button';

const enquiryTypeOptions = [
  { value: 'course-enrolment', label: '3A Techvolution Academy — Course Enrolment' },
  { value: 'course-info', label: '3A Techvolution Academy — Course Information / Next Cohort' },
  { value: 'siwes-support', label: '3A Techvolution Academy — IT / SIWES Training Support' },
  { value: 'academic-project', label: '3A Techvolution Academy — Academic Project Consultation' },
  { value: 'seminar-workshop', label: '3A Techvolution Academy — Seminar & Workshop Registration' },
  { value: 'customized-training', label: '3A Techvolution Academy — Customized Organizational Training' },
  { value: 'technology-service', label: '3A Technology Solutions — Business / Software Consultation' },
  { value: 'academic-research', label: '3A Technology Solutions — Academic Research & Project Support' },
  { value: 'academy-programme', label: '3A Techvolution Academy — General Programme / Resource Enquiry' },
  { value: 'general-inquiry', label: 'General Enquiry / Partnership' },
];

type EnquiryTypeValue = (typeof ENQUIRY_TYPES)[number];

function resolveEnquiryType(typeParam: string | null): EnquiryTypeValue {
  if (!typeParam) return 'general-inquiry';
  if ((ENQUIRY_TYPES as readonly string[]).includes(typeParam)) {
    return typeParam as EnquiryTypeValue;
  }
  const normalized = typeParam.toLowerCase();
  if (normalized.includes('siwes')) return 'siwes-support';
  if (normalized.includes('project')) return 'academic-project';
  if (normalized.includes('seminar') || normalized.includes('workshop')) return 'seminar-workshop';
  if (normalized.includes('custom') || normalized.includes('corporate')) return 'customized-training';
  if (normalized.includes('enrol')) return 'course-enrolment';
  if (normalized === 'academy' || normalized.includes('academy')) return 'academy-programme';
  if (normalized === 'research') return 'academic-research';
  if (normalized === 'service') return 'technology-service';
  return 'general-inquiry';
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const initialSubject = searchParams?.get('subject') || '';
  const initialType = resolveEnquiryType(searchParams?.get('type'));

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactEnquiryFormData>({
    resolver: zodResolver(ContactEnquirySchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      enquiryType: initialType,
      subject: initialSubject,
      institution: '',
      department: '',
      trainingLevel: '',
      technologyArea: '',
      projectArea: '',
      projectStage: '',
      guidanceNeeded: '',
      message: '',
      hp_field: '',
    },
  });

  const selectedEnquiryType = watch('enquiryType');

  useEffect(() => {
    const subjectParam = searchParams?.get('subject');
    if (subjectParam) {
      setValue('subject', subjectParam);
    }
    const typeParam = searchParams?.get('type');
    if (typeParam) {
      setValue('enquiryType', resolveEnquiryType(typeParam));
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactEnquiryFormData) => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await submitContactEnquiry(data);
      if (response.success) {
        setFeedback({ type: 'success', message: response.message });
        reset();
      } else {
        setFeedback({ type: 'error', message: response.message });
      }
    } catch {
      setFeedback({
        type: 'error',
        message: 'A network error occurred. Your inputs have been preserved. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSiwesEnquiry = selectedEnquiryType === 'siwes-support';
  const isProjectEnquiry =
    selectedEnquiryType === 'academic-project' || selectedEnquiryType === 'academic-research';
  const isCustomTrainingEnquiry = selectedEnquiryType === 'customized-training';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {feedback && (
        <div
          role="alert"
          className={`rounded-md p-4 text-sm font-medium ${
            feedback.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {feedback.message}
        </div>
      )}

      <Honeypot {...register('hp_field')} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Full Name"
          required
          placeholder="e.g. Ibrahim Adeyemi"
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <FormField
          label="Email Address"
          type="email"
          required
          placeholder="e.g. ibrahim@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Phone / WhatsApp Number"
          type="tel"
          placeholder="e.g. +234 801 234 5678"
          error={errors.phone?.message}
          {...register('phone')}
        />

        <SelectField
          label="Enquiry Category"
          options={enquiryTypeOptions}
          error={errors.enquiryType?.message}
          {...register('enquiryType')}
        />
      </div>

      {/* Contextual Fields for IT / SIWES Support Enquiries */}
      {isSiwesEnquiry && (
        <div className="rounded-xl border border-brand-border bg-brand-gray/50 p-5 space-y-5">
          <div className="border-b border-brand-border pb-2">
            <h3 className="text-sm font-bold text-brand-navy">
              IT / SIWES Training Context (Optional)
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">
              Provide your institution and training details so our mentors can recommend the right weekly learning track.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Institution (University / Polytechnic)"
              placeholder="e.g. Kwara State University / Unilorin"
              error={errors.institution?.message}
              {...register('institution')}
            />
            <FormField
              label="Course or Department"
              placeholder="e.g. Computer Science / Software Engineering"
              error={errors.department?.message}
              {...register('department')}
            />
            <FormField
              label="Current Level or SIWES Duration"
              placeholder="e.g. 300 Level • 6-Month SIWES"
              error={errors.trainingLevel?.message}
              {...register('trainingLevel')}
            />
            <FormField
              label="Technology Area Requiring Support"
              placeholder="e.g. Web Development, Python, Data Science, or AI"
              error={errors.technologyArea?.message}
              {...register('technologyArea')}
            />
          </div>
        </div>
      )}

      {/* Contextual Fields for Academic Project Support Enquiries */}
      {isProjectEnquiry && (
        <div className="rounded-xl border border-brand-border bg-brand-gray/50 p-5 space-y-5">
          <div className="border-b border-brand-border pb-2">
            <h3 className="text-sm font-bold text-brand-navy">
              Academic Project Context (Optional)
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">
              Share your discipline and current project stage so our technical mentors can prepare for your consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Institution"
              placeholder="e.g. University or Polytechnic Name"
              error={errors.institution?.message}
              {...register('institution')}
            />
            <FormField
              label="Department"
              placeholder="e.g. Computer Science / Mathematics / Data Science"
              error={errors.department?.message}
              {...register('department')}
            />
            <FormField
              label="Project Area or Discipline"
              placeholder="e.g. Machine Learning, Computer Vision, Web System"
              error={errors.projectArea?.message}
              {...register('projectArea')}
            />
            <FormField
              label="Current Project Stage"
              placeholder="e.g. Topic Selection, Implementation, Data Analysis, or Report"
              error={errors.projectStage?.message}
              {...register('projectStage')}
            />
          </div>
          <FormField
            label="Type of Guidance Required"
            placeholder="e.g. Topic refinement, dataset & model mentorship, software implementation walkthrough, or defence prep"
            error={errors.guidanceNeeded?.message}
            {...register('guidanceNeeded')}
          />
        </div>
      )}

      {/* Contextual Field for Customized Organizational Training */}
      {isCustomTrainingEnquiry && (
        <div className="rounded-xl border border-brand-border bg-brand-gray/50 p-5">
          <FormField
            label="Organization, School, or Community Name (Optional)"
            placeholder="e.g. Company Name, University Department, or NYSC CDS Group"
            error={errors.institution?.message}
            {...register('institution')}
          />
        </div>
      )}

      <FormField
        label="Subject"
        placeholder="e.g. Course Enrolment / IT-SIWES Support / Academic Project Consultation"
        error={errors.subject?.message}
        {...register('subject')}
      />

      <FormField
        label="Message"
        textarea
        rows={5}
        required
        placeholder="Tell us about your learning goals, IT/SIWES training needs, academic project, or organizational training request..."
        error={errors.message?.message}
        {...register('message')}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        data-analytics-event="submit_contact_form"
      >
        {isSubmitting ? 'Sending Enquiry...' : 'Send Message'}
      </Button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading enquiry form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
