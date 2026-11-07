'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactEnquirySchema, ContactEnquiryFormData } from '@/lib/validations/enquiry';
import { submitContactEnquiry } from '@/actions/enquiry';
import { FormField } from './FormField';
import { SelectField } from './SelectField';
import { Honeypot } from './Honeypot';
import { Button } from '@/components/ui/Button';

const enquiryTypeOptions = [
  { value: 'technology-service', label: '3A Technology Solutions — Business / Service Consultation' },
  { value: 'academy-programme', label: '3A Techvolution Academy — AI Course / Seminar / Resource Enquiry' },
  { value: 'academic-research', label: 'Academic Research & Project Support Consultation' },
  { value: 'general-inquiry', label: 'General Enquiry / Partnership' },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const initialSubject = searchParams?.get('subject') || '';
  const initialTypeParam = searchParams?.get('type');
  const initialType =
    initialTypeParam === 'academy'
      ? 'academy-programme'
      : initialTypeParam === 'research'
      ? 'academic-research'
      : initialTypeParam === 'service'
      ? 'technology-service'
      : 'general-inquiry';

  const {
    register,
    handleSubmit,
    setValue,
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
      message: '',
      hp_field: '',
    },
  });

  useEffect(() => {
    const subjectParam = searchParams?.get('subject');
    if (subjectParam) {
      setValue('subject', subjectParam);
    }
    const typeParam = searchParams?.get('type');
    if (typeParam === 'academy') {
      setValue('enquiryType', 'academy-programme');
    } else if (typeParam === 'research') {
      setValue('enquiryType', 'academic-research');
    } else if (typeParam === 'service') {
      setValue('enquiryType', 'technology-service');
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

      <FormField
        label="Subject"
        placeholder="e.g. Technology Consultation / AI Course Enquiry"
        error={errors.subject?.message}
        {...register('subject')}
      />

      <FormField
        label="Message"
        textarea
        rows={5}
        required
        placeholder="Tell us about your project, technology question, or Academy course interest..."
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
