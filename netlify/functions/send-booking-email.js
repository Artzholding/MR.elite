const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const bookingData = JSON.parse(event.body);
    
    // Set SendGrid API key from environment variable
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Business notification email HTML
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #000; color: #DAA520; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">MR. ELITE</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px; letter-spacing: 2px;">NIEUWE BOEKING</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Boekingsdetails</h2>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #DAA520; border-bottom: 2px solid #DAA520; padding-bottom: 5px;">Klantgegevens</h3>
            <p><strong>Naam:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Telefoon:</strong> ${bookingData.phone}</p>
            <p><strong>Klant type:</strong> ${bookingData.clientType}</p>
            <p><strong>Eerder geboekt:</strong> ${bookingData.previousBooking}</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #DAA520; border-bottom: 2px solid #DAA520; padding-bottom: 5px;">Service Details</h3>
            <p><strong>Arrangement:</strong> ${bookingData.arrangement || 'Niet geselecteerd'}</p>
            <p><strong>Experience:</strong> ${bookingData.experience || 'Niet geselecteerd'}</p>
            <p><strong>Companion:</strong> ${bookingData.companion}</p>
            <p><strong>Alternatief:</strong> ${bookingData.alternative}</p>
            ${bookingData.extraServices && bookingData.extraServices.length > 0 ? 
              `<p><strong>Extra diensten:</strong> ${bookingData.extraServices.join(', ')}</p>` : ''}
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #DAA520; border-bottom: 2px solid #DAA520; padding-bottom: 5px;">Locatie & Timing</h3>
            <p><strong>Land:</strong> ${bookingData.country}</p>
            <p><strong>Locatie type:</strong> ${bookingData.locationType}</p>
            <p><strong>Datum:</strong> ${bookingData.date}</p>
            <p><strong>Tijd:</strong> ${bookingData.time}</p>
            <p><strong>Duur:</strong> ${bookingData.duration} uur</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #DAA520; border-bottom: 2px solid #DAA520; padding-bottom: 5px;">Betaling & Wensen</h3>
            <p><strong>Betaalmethode:</strong> ${bookingData.paymentMethod}</p>
            <p><strong>Aanvullende wensen:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${bookingData.additionalWishes.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #DAA520; color: white; padding: 15px; border-radius: 5px; text-align: center; margin-top: 30px;">
            <p style="margin: 0; font-weight: bold;">Boeking ontvangen op: ${new Date().toLocaleString('nl-NL')}</p>
          </div>
        </div>
      </div>
    `;

    // Customer confirmation email HTML
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #000; color: #DAA520; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">MR. ELITE</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px; letter-spacing: 2px;">BOEKINGSBEVESTIGING</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Beste ${bookingData.firstName},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Hartelijk dank voor uw boeking bij Mr. Elite. Wij hebben uw aanvraag in goede orde ontvangen 
            en zullen binnen 24 uur discreet contact met u opnemen om de details te bespreken en uw afspraak te bevestigen.
          </p>
          
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #DAA520; margin-top: 0;">Uw Boekingsoverzicht</h3>
            <p><strong>Datum:</strong> ${bookingData.date}</p>
            <p><strong>Tijd:</strong> ${bookingData.time}</p>
            <p><strong>Duur:</strong> ${bookingData.duration} uur</p>
            <p><strong>Locatie:</strong> ${bookingData.country} (${bookingData.locationType})</p>
            ${bookingData.arrangement ? `<p><strong>Arrangement:</strong> ${bookingData.arrangement}</p>` : ''}
            ${bookingData.experience ? `<p><strong>Experience:</strong> ${bookingData.experience}</p>` : ''}
          </div>
          
          <div style="background-color: #DAA520; color: white; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="margin-top: 0; color: white;">Volgende Stappen</h3>
            <ul style="margin: 0; padding-left: 20px; color: white;">
              <li>Wij controleren uw aanvraag binnen 2 uur</li>
              <li>U ontvangt binnen 24 uur een telefonische bevestiging</li>
              <li>Alle details worden discreet besproken</li>
              <li>Betaling wordt afgehandeld volgens uw voorkeur</li>
            </ul>
          </div>
          
          <div style="border-top: 2px solid #DAA520; padding-top: 20px;">
            <h3 style="color: #333;">Contact</h3>
            <p style="color: #666; margin-bottom: 5px;">
              <strong>Telefoon:</strong> +31 6 16335723
            </p>
            <p style="color: #666; margin-bottom: 5px;">
              <strong>Email:</strong> mrelite.nl@gmail.com
            </p>
            <p style="color: #666; font-size: 14px; font-style: italic;">
              Voor vragen kunt u altijd discreet contact met ons opnemen.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Mr. Elite - Premium Companion Service<br>
              Discretie • Kwaliteit • Professionaliteit
            </p>
          </div>
        </div>
      </div>
    `;

    // Email to business
    const businessEmail = {
      to: 'mrelite.nl@gmail.com',
      from: 'noreply@mrelite.nl',
      subject: `Nieuwe Boeking - ${bookingData.firstName} ${bookingData.lastName}`,
      html: businessEmailHtml,
      text: `
        Nieuwe Boeking van ${bookingData.firstName} ${bookingData.lastName}
        
        Email: ${bookingData.email}
        Telefoon: ${bookingData.phone}
        Datum: ${bookingData.date}
        Tijd: ${bookingData.time}
        Duur: ${bookingData.duration} uur
        
        Aanvullende wensen:
        ${bookingData.additionalWishes}
      `
    };

    // Email to customer
    const customerEmail = {
      to: bookingData.email,
      from: 'noreply@mrelite.nl',
      subject: 'Boekingsbevestiging - Mr. Elite',
      html: customerEmailHtml,
      text: `
        Beste ${bookingData.firstName},
        
        Hartelijk dank voor uw boeking bij Mr. Elite. Wij hebben uw aanvraag in goede orde ontvangen 
        en zullen binnen 24 uur discreet contact met u opnemen om de details te bespreken en uw afspraak te bevestigen.
        
        Uw Boekingsoverzicht:
        - Datum: ${bookingData.date}
        - Tijd: ${bookingData.time}
        - Duur: ${bookingData.duration} uur
        - Locatie: ${bookingData.country} (${bookingData.locationType})
        
        Voor vragen kunt u contact opnemen via:
        Telefoon: +31 6 16335723
        Email: mrelite.nl@gmail.com
        
        Met vriendelijke groet,
        Mr. Elite Team
      `
    };

    // Send both emails
    await sgMail.send([businessEmail, customerEmail]);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Emails sent successfully to both customer and business' 
      })
    };

  } catch (error) {
    console.error('Error sending emails:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to send emails',
        details: error.message 
      })
    };
  }
};