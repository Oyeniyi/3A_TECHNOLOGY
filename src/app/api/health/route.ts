import { NextResponse } from 'next/server';

/**
 * @file route.ts
 * @route GET /api/health
 * @description Health check endpoint for container monitoring, uptime probes, and deployment gates.
 */

export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      service: '3a-technology-web',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
    },
    { status: 200 }
  );
}
