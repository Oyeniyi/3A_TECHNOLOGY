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
    const result = await submitQuoteRequest(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_FAILED',
            message: result.message,
            fieldErrors: result.errors,
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
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
