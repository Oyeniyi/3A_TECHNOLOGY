import { NextRequest, NextResponse } from 'next/server';
import { submitContactEnquiry } from '@/actions/enquiry';

/**
 * @file route.ts
 * @route POST /api/contact
 * @description REST API endpoint for contact enquiries (fallback to Server Action).
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await submitContactEnquiry(body);

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
          message: 'An unexpected error occurred while processing contact inquiry.',
        },
      },
      { status: 500 }
    );
  }
}
