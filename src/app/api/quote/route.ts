import { NextRequest, NextResponse } from 'next/server';
import { submitQuoteRequest } from '@/actions/quote';

/**
 * @file route.ts
 * @route POST /api/quote
 * @description REST API endpoint for enterprise quote requests (fallback to Server Action).
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown-ip';
    const result = await submitQuoteRequest(body, clientIp);

    if (!result.success) {
      const isRateLimited = result.message.toLowerCase().includes('too many');
      return NextResponse.json(
        {
          success: false,
          error: {
            code: isRateLimited ? 'RATE_LIMIT_EXCEEDED' : 'VALIDATION_FAILED',
            message: result.message,
            fieldErrors: result.errors,
          },
        },
        { status: isRateLimited ? 429 : 400 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred while processing quotation request.',
        },
      },
      { status: 500 }
    );
  }
}
