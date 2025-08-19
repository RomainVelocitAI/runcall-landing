import { NextRequest, NextResponse } from 'next/server';

interface TrackingEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  userId?: string;
  properties?: Record<string, any>;
}

export async function POST(request: NextRequest) {
  try {
    const data: TrackingEvent = await request.json();
    
    // Get user information from request
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'Unknown';
    const referer = request.headers.get('referer') || 'Direct';
    
    // Create tracking record
    const trackingRecord = {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent,
      ip,
      referer,
      sessionId: request.cookies.get('sessionId')?.value || 'anonymous',
    };
    
    // Log the event (in production, send to analytics service)
    console.log('Tracking event:', trackingRecord);
    
    // In production, you would:
    // 1. Send to Google Analytics 4
    // 2. Send to Facebook Pixel
    // 3. Store in your own analytics database
    // 4. Send to other marketing tools (Segment, Mixpanel, etc.)
    
    // Example: Send to Google Analytics Measurement Protocol
    if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
      const gaEndpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`;
      
      const gaPayload = {
        client_id: trackingRecord.sessionId,
        events: [{
          name: data.event,
          params: {
            category: data.category,
            label: data.label,
            value: data.value,
            ...data.properties,
          }
        }]
      };
      
      // Fire and forget - don't wait for response
      fetch(gaEndpoint, {
        method: 'POST',
        body: JSON.stringify(gaPayload),
      }).catch(err => console.error('GA tracking error:', err));
    }

    return NextResponse.json({ 
      success: true,
      message: 'Event tracked successfully'
    });
  } catch (error) {
    console.error('Error tracking event:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Error tracking event'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Tracking API endpoint - POST only',
    example: {
      event: 'button_click',
      category: 'engagement',
      action: 'click',
      label: 'hero_cta',
      value: 100
    }
  });
}