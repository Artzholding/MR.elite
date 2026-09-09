// Alternative 1: EmailJS (Client-side email service)
// This runs directly in the browser, no server setup needed

export const sendEmailWithEmailJS = async (formData) => {
  // You need to sign up at https://emailjs.com (free tier available)
  // Then get your Service ID, Template ID, and Public Key
  
  const emailParams = {
    to_email: 'mrelite.nl@gmail.com',
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    client_type: formData.clientType,
    arrangement: formData.arrangement || 'Niet geselecteerd',
    experience: formData.experience || 'Niet geselecteerd',
    companion: formData.companion,
    country: formData.country,
    location_type: formData.locationType,
    date: formData.date,
    time: formData.time,
    duration: formData.duration,
    payment_method: formData.paymentMethod,
    additional_wishes: formData.additionalWishes,
    submission_time: new Date().toLocaleString('nl-NL')
  };

  try {
    // EmailJS send function (you need to include EmailJS SDK)
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',     // Get from EmailJS dashboard
      'YOUR_TEMPLATE_ID',    // Get from EmailJS dashboard
      emailParams,
      'YOUR_PUBLIC_KEY'      // Get from EmailJS dashboard
    );
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email');
  }
};