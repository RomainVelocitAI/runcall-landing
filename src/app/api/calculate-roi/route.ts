import { NextRequest, NextResponse } from 'next/server';

interface ROIRequest {
  monthlyLeads: number;
  currentConversionRate: number;
  averageOrderValue: number;
}

interface ROIResponse {
  currentRevenue: number;
  projectedRevenue: number;
  gain: number;
  roi: number;
  percentageIncrease: number;
  breakEvenMonth: number;
}

export async function POST(request: NextRequest) {
  try {
    const data: ROIRequest = await request.json();
    
    // Validate input
    if (!data.monthlyLeads || !data.currentConversionRate || !data.averageOrderValue) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Calculate current revenue
    const currentRevenue = (data.monthlyLeads * data.currentConversionRate / 100) * data.averageOrderValue;
    
    // Calculate projected revenue with Runcall (8% conversion rate guaranteed)
    const runcallConversionRate = 8;
    const projectedRevenue = (data.monthlyLeads * runcallConversionRate / 100) * data.averageOrderValue;
    
    // Calculate gain
    const gain = projectedRevenue - currentRevenue;
    
    // Calculate ROI (assuming 20% commission on average)
    const investmentCost = projectedRevenue * 0.2;
    const roi = investmentCost > 0 ? ((gain / investmentCost) * 100) : 0;
    
    // Calculate percentage increase
    const percentageIncrease = currentRevenue > 0 
      ? ((projectedRevenue - currentRevenue) / currentRevenue * 100) 
      : 100;
    
    // Calculate break-even month (simplified)
    const breakEvenMonth = investmentCost > 0 ? Math.ceil(investmentCost / gain) : 1;

    const response: ROIResponse = {
      currentRevenue: Math.round(currentRevenue),
      projectedRevenue: Math.round(projectedRevenue),
      gain: Math.round(gain),
      roi: Math.round(roi),
      percentageIncrease: Math.round(percentageIncrease),
      breakEvenMonth: Math.max(1, breakEvenMonth),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error calculating ROI:', error);
    return NextResponse.json(
      { error: 'Error calculating ROI' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'ROI Calculator API - POST only',
    example: {
      monthlyLeads: 100,
      currentConversionRate: 2,
      averageOrderValue: 500
    }
  });
}