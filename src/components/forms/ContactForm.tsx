'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactEnquirySchema, ContactEnquiryFormData } from '@/lib/validations/enquiry';
import { submitContactEnquiry } from '@/actions/enquiry';
import { FormField } from './FormField';
import { Honeypot } from './Honeypot';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactEnquiryFormData>({
    resolver: zodResolver(ContactEnquirySchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      hp_field: '',
    },
  });

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
    } catch (_error) {
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

        <FormField
          label="Subject"
          placeholder="e.g. Software Consultation"
          error={errors.subject?.message}
          {...register('subject')}
        />
      </div>

      <FormField
        label="Message"
        textarea
        rows={5}
        required
        placeholder="How can 3A Technology Solutions help your business?"
        error={errors.message?.message}
        {...register('message')}
      />

      <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Sending Enquiry...' : 'Send Message'}
      </Button>
    </form>
  );
}
