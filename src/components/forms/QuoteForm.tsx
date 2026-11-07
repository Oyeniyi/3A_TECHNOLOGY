'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  QuoteRequestSchema,
  QuoteRequestFormData,
  SERVICE_SLUGS,
  BUDGET_TIERS,
  TIMELINE_OPTIONS,
} from '@/lib/validations/quote';
import { submitQuoteRequest } from '@/actions/quote';
import { FormField } from './FormField';
import { SelectField } from './SelectField';
import { Honeypot } from './Honeypot';
import { Button } from '@/components/ui/Button';
import { ServiceSlug } from '@/types/content';

const serviceOptions: { value: ServiceSlug; label: string }[] = [
  { value: 'web-development', label: 'Web & Digital Product Development' },
  { value: 'custom-software', label: 'Custom Software Engineering' },
  { value: 'ai-automation', label: 'Artificial Intelligence & Automation' },
  { value: 'data-science-analytics', label: 'Data Science & Analytics' },
  { value: 'technology-consulting', label: 'Technology Consulting' },
  { value: 'academic-research-support', label: 'Academic Research & Project Support' },
];

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const initialService = (searchParams?.get('service') as ServiceSlug) || 'custom-software';
  const validatedService = SERVICE_SLUGS.includes(initialService) ? initialService : 'custom-software';

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteRequestFormData>({
    resolver: zodResolver(QuoteRequestSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: validatedService,
      budgetRange: '1m-3m',
      timeline: '1-3-months',
      projectDescription: '',
      hp_field: '',
    },
  });

  useEffect(() => {
    const serviceParam = searchParams?.get('service') as ServiceSlug;
    if (serviceParam && SERVICE_SLUGS.includes(serviceParam)) {
      setValue('service', serviceParam);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: QuoteRequestFormData) => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await submitQuoteRequest(data);
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
          label="Your Full Name"
          required
          placeholder="e.g. Ngozi Okafor"
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <FormField
          label="Company / Organization"
          placeholder="e.g. Okafor Logistics Ltd or University Dept (Optional)"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Commercial Email"
          type="email"
          required
          placeholder="e.g. ngozi@okaforlogistics.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <FormField
          label="Phone / WhatsApp Number"
          type="tel"
          required
          placeholder="e.g. +234 809 876 5432"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <SelectField
          label="Primary Service Needed"
          required
          options={serviceOptions}
          error={errors.service?.message}
          {...register('service')}
        />

        <SelectField
          label="Estimated Budget Range"
          required
          options={BUDGET_TIERS}
          error={errors.budgetRange?.message}
          {...register('budgetRange')}
        />

        <SelectField
          label="Desired Timeline"
          required
          options={TIMELINE_OPTIONS}
          error={errors.timeline?.message}
          {...register('timeline')}
        />
      </div>

      <FormField
        label="Project Scope & Objectives"
        textarea
        rows={6}
        required
        placeholder="Describe your business or research requirements, existing systems, target users, and desired outcomes."
        error={errors.projectDescription?.message}
        {...register('projectDescription')}
      />

      <Button
        type="submit"
        variant="accent"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        data-analytics-event="submit_quote_form"
      >
        {isSubmitting ? 'Submitting Scope Brief...' : 'Request Formal Project Quote'}
      </Button>
    </form>
  );
}

export function QuoteForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading quote intake...</div>}>
      <QuoteFormInner />
    </Suspense>
  );
}
