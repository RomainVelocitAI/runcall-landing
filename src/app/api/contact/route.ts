import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  company: string;
  name: string;
  phone: string;
  sector: string;
  monthlyLeads?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();
    
    // Log the contact for now (in production, save to database)
    console.log('Nouveau lead Runcall:', data);
    
    // Format the message for Slack
    const slackMessage = {
      text: `🔥 Nouveau lead Runcall:
Entreprise: ${data.company}
Contact: ${data.name}
Téléphone: ${data.phone}
Secteur: ${data.sector}
Leads/mois: ${data.monthlyLeads || 'Non renseigné'}
Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Indian/Reunion' })}`
    };

    // Send to Slack webhook if configured
    const slackWebhook = process.env.SLACK_WEBHOOK;
    if (slackWebhook) {
      try {
        await fetch(slackWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage),
        });
      } catch (slackError) {
        console.error('Error sending to Slack:', slackError);
        // Don't fail the request if Slack fails
      }
    }

    // In production, you would also:
    // 1. Save to database (PostgreSQL, MongoDB, etc.)
    // 2. Send confirmation email to the lead
    // 3. Add to CRM (HubSpot, Salesforce, etc.)
    // 4. Trigger automation workflows

    return NextResponse.json({ 
      success: true,
      message: 'Votre demande a été enregistrée avec succès'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API endpoint - POST only' 
  });
}