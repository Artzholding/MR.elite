// Alternative 2: Formspree (Form handling service)
// Simple form submission service

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const bookingData = JSON.parse(event.body);
    
    // Send to Formspree endpoint
    const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'mrelite.nl@gmail.com',
        subject: `Nieuwe Boeking - ${bookingData.firstName} ${bookingData.lastName}`,
        message: `
Nieuwe Boeking Details:

Klantgegevens:
- Naam: ${bookingData.firstName} ${bookingData.lastName}
- Email: ${bookingData.email}
- Telefoon: ${bookingData.phone}
- Type: ${bookingData.clientType}

Service:
- Arrangement: ${bookingData.arrangement || 'Niet geselecteerd'}
- Experience: ${bookingData.experience || 'Niet geselecteerd'}
- Companion: ${bookingData.companion}

Locatie & Timing:
- Land: ${bookingData.country}
- Locatie: ${bookingData.locationType}
- Datum: ${bookingData.date}
- Tijd: ${bookingData.time}
- Duur: ${bookingData.duration} uur

Betaling: ${bookingData.paymentMethod}

Wensen:
${bookingData.additionalWishes}

Ingediend op: ${new Date().toLocaleString('nl-NL')}
        `
      })
    });

    if (!formspreeResponse.ok) {
      throw new Error('Formspree submission failed');
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Booking submitted successfully' 
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to submit booking' 
      })
    };
  }
};