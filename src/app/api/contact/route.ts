import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'שם וטלפון נדרשים' },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd want to save to a database)
    console.log('New lead submission:', {
      name,
      phone,
      timestamp: new Date().toISOString(),
      source: 'GatRise Landing Page'
    });

    // Send customer details to your WhatsApp using Twilio WhatsApp API
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g., 'whatsapp:+14155238886'
    const yourWhatsAppNumber = process.env.YOUR_WHATSAPP_NUMBER; // e.g., 'whatsapp:+972505772843'

    if (twilioAccountSid && twilioAuthToken && twilioWhatsAppNumber && yourWhatsAppNumber) {
      try {
        // Import Twilio SDK dynamically to avoid unused import error
        const twilio = (await import('twilio')).default;
        const client = twilio(twilioAccountSid, twilioAuthToken);
        
        const messageBody = `🌿 לקוח חדש מאתר GatRise!

👤 שם: ${name}
📞 טלפון: ${phone}
🕒 זמן: ${new Date().toLocaleString('he-IL')}
🌐 מקור: אתר GatRise

הלקוח השאיר פרטים וממתין ליצירת קשר.`;

        const message = await client.messages.create({
          from: twilioWhatsAppNumber,
          to: yourWhatsAppNumber,
          body: messageBody,
        });

        console.log('WhatsApp message sent successfully via Twilio:', message.sid);
      } catch (twilioError) {
        console.error('Twilio WhatsApp error:', twilioError);
        // Continue to fallback options if Twilio fails
      }
    }

    // Fallback: Send to webhook service if Twilio is not configured
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            source: 'GatRise Landing Page',
            timestamp: new Date().toISOString(),
            whatsapp_number: "972505772843",
            message_for_whatsapp: `🌿 לקוח חדש מאתר GatRise!

👤 שם: ${name}
📞 טלפון: ${phone}
🕒 זמן: ${new Date().toLocaleString('he-IL')}
🌐 מקור: אתר GatRise

הלקוח השאיר פרטים וממתין ליצירת קשר.`,
            action: 'send_to_whatsapp'
          }),
        });
        console.log('Webhook sent - customer details will be forwarded to your WhatsApp');
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Continue even if webhook fails
      }
    }

    // Option 2: You can integrate with email services here
    // Example: SendGrid, Mailgun, Resend, etc.

    return NextResponse.json(
      { 
        success: true, 
        message: 'תודה רבה! הפרטים שלך נשלחו בהצלחה. נחזור אליך בהקדם האפשרי.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'שגיאה בשליחת הפרטים. אנא נסה שוב או צור קשר ישירות ב-WhatsApp.' },
      { status: 500 }
    );
  }
}
