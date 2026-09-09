import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Heart, Users, CreditCard, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const BookingForm = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    // Booking verification
    previousBooking: '',
    clientType: '',
    
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    
    // Service Selection
    arrangement: '',
    experience: '',
    companion: '',
    extraServices: [],
    
    // Location & Timing
    country: '',
    locationType: '',
    date: '',
    time: '',
    duration: '',
    
    // Payment
    paymentMethod: '',
    
    // Additional
    privacy: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.previousBooking) newErrors.previousBooking = t('errorRequired');
    if (!formData.clientType) newErrors.clientType = t('errorRequired');
    if (!formData.firstName.trim()) newErrors.firstName = t('errorFirstName');
    if (!formData.lastName.trim()) newErrors.lastName = t('errorLastName');
    if (!formData.email.trim()) newErrors.email = t('errorEmail');
    if (!formData.confirmEmail.trim()) newErrors.confirmEmail = t('errorConfirmEmail');
    if (!formData.phone.trim()) newErrors.phone = t('errorPhone');
    if (!formData.companion) newErrors.companion = t('selectCompanion');
    if (!formData.country) newErrors.country = t('errorCountry');
    if (!formData.locationType) newErrors.locationType = t('errorLocationType');
    if (!formData.date) newErrors.date = t('errorDate');
    if (!formData.time) newErrors.time = t('errorTime');
    if (!formData.duration) newErrors.duration = t('errorDuration');
    if (!formData.paymentMethod) newErrors.paymentMethod = t('errorPayment');
    if (!formData.privacy) newErrors.privacy = t('errorPrivacy');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = t('errorInvalidEmail');
    }
    
    // Email confirmation
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = t('errorEmailMatch');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleExtraServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      extraServices: prev.extraServices.includes(service)
        ? prev.extraServices.filter(s => s !== service)
        : [...prev.extraServices, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Submitting form with data:', formData);
      await sendBookingEmail(formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      
    } catch (error) {
      console.error('Form submission error:', error);
      // Don't reset form on error so user can try again
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendBookingEmail = async (data) => {
    try {
      console.log('=== DEBUGGING EMAIL SEND ===');
      console.log('Form data received:', data);
      
      // Initialize EmailJS
      emailjs.init("x_UC5z_qew7XLm3GA");
      console.log('EmailJS initialized');
      
      const emailParams = {
        user_name: `${data.firstName} ${data.lastName}`,
        user_email: data.email,
        user_phone: data.phone,
        previous_booking: data.previousBooking || 'Niet ingevuld',
        client_type: data.clientType || 'Niet ingevuld',
        arrangement: data.arrangement || 'Niet geselecteerd',
        experience: data.experience || 'Niet geselecteerd',
        companion: data.companion || 'Niet geselecteerd',
        extra_services: data.extraServices.length > 0 ? data.extraServices.join(', ') : 'Geen',
        country: data.country || 'Niet ingevuld',
        location_type: data.locationType || 'Niet ingevuld',
        booking_date: data.date || 'Niet ingevuld',
        booking_time: data.time || 'Niet ingevuld',
        duration: data.duration ? `${data.duration} uur` : 'Niet ingevuld',
        payment_method: data.paymentMethod || 'Niet ingevuld',
        submission_date: new Date().toLocaleString(language === 'nl' ? 'nl-NL' : 'en-US')
      };

      console.log('Sending email with params:', emailParams);

      // Send email
      const response = await emailjs.send(
        'service_8m7q1v4',
        'template_bn2nax6',
        emailParams
      );
      
      console.log('EmailJS response:', response);
      
      if (response.status === 200) {
        console.log('Email sent successfully!');
        return { success: true, message: 'Email sent successfully' };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      throw error;
    }
  };

  // Alternative: Simple email sending function

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      previousBooking: '',
      clientType: '',
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      phone: '',
      arrangement: '',
      experience: '',
      companion: '',
      extraServices: [],
      country: '',
      locationType: '',
      date: '',
      time: '',
      duration: '',
      paymentMethod: '',
      privacy: false
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 md:py-32 bg-ink-950 bg-grain relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold-600/[0.06] rounded-full blur-[120px]" />
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card p-12"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/10 border border-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-400" size={32} />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-white mb-4">
              {t('bookingConfirmationTitle')}
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed font-light">
              {t('bookingConfirmationMessage')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetForm}
              className="px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
            >
              {t('newBooking')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 md:py-32 bg-ink-950 bg-grain relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-600/[0.05] rounded-full blur-[120px]" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 block">Booking</span>
          <h2 className="section-title mb-6">
            {t('bookingTitle')}
          </h2>
          <p className="text-lg text-white/50 font-light mb-8">
            {t('bookingSubtitle')}
          </p>
          <div className="divider-gold mb-8" />
          
          {/* Notice */}
          <div className="glass-card p-5 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gold-400 mb-2">
              <Shield size={18} />
              <span className="font-medium text-sm tracking-wide">{t('importantNotice')}</span>
            </div>
            <p className="text-white/55 text-sm font-light">
              {t('bookingNoticeText')}
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Booking History */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="text-gold-400 mr-3" size={18} />
                {t('bookingHistory')}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    {t('previousBookingLabel')}
                  </label>
                  <p className="text-white/60 text-sm mb-3">{t('previousBookingHint')}</p>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="previousBooking"
                        value="ja"
                        checked={formData.previousBooking === 'ja'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('yes')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="previousBooking"
                        value="nee"
                        checked={formData.previousBooking === 'nee'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('no')}</span>
                    </label>
                  </div>
                  {errors.previousBooking && (
                    <p className="text-red-400 text-sm mt-1">{errors.previousBooking}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    {t('clientTypeLabel')}
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="clientType"
                        value="man"
                        checked={formData.clientType === 'man'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('male')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="clientType"
                        value="vrouw"
                        checked={formData.clientType === 'vrouw'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('female')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="clientType"
                        value="koppel"
                        checked={formData.clientType === 'koppel'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('couple')}</span>
                    </label>
                  </div>
                  {errors.clientType && (
                    <p className="text-red-400 text-sm mt-1">{errors.clientType}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-6 flex items-center">
                <User className="text-gold-400 mr-3" size={18} />
                {t('personalInformation')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('firstName')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    placeholder={t('firstNamePlaceholder')}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('lastName')} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    placeholder={t('lastNamePlaceholder')}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-6 flex items-center">
                <Mail className="text-gold-400 mr-3" size={18} />
                {t('contactInformation')}
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder={t('emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('confirmEmailLabel')}
                  </label>
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.confirmEmail ? 'error' : ''}`}
                    placeholder={t('confirmEmailPlaceholder')}
                  />
                  {errors.confirmEmail && (
                    <p className="text-red-400 text-sm mt-1">{errors.confirmEmail}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder={t('phonePlaceholder')}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-6 flex items-center">
                <Heart className="text-gold-400 mr-3" size={18} />
                {t('serviceSelection')}
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    {t('arrangementLabel')}
                  </label>
                  <div className="space-y-2">
                    {[
                      'Companionship Only',
                      'Dinner Date',
                      'Internationale boeking',
                      'Luxe privé rondvaart',
                      'Paren- swingersclub of erotisch feest',
                      'Men for Men'
                    ].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="arrangement"
                          value={option}
                          checked={formData.arrangement === option}
                          onChange={handleInputChange}
                          className="mr-3 accent-gold-500"
                        />
                        <span className="text-white/80 text-sm font-light">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    {t('experienceLabel')}
                  </label>
                  <div className="space-y-2">
                    {[
                      'BFE (Boyfriend Experience)',
                      'Fifty Shades of Perfect',
                      'Koppel Experience',
                      'Trio Experience',
                      'Spa Experience',
                      'First Time Experience',
                      'Double Couple Experience'
                    ].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={option}
                          checked={formData.experience === option}
                          onChange={handleInputChange}
                          className="mr-3 accent-gold-500"
                        />
                        <span className="text-white/80 text-sm font-light">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('companionLabel')}
                  </label>
                  <div className="relative">
                    <select
                      name="companion"
                      value={formData.companion}
                      onChange={handleInputChange}
                      required
                      className={`form-select ${errors.companion ? 'error' : ''}`}
                    >
                      <option value="" className="bg-zinc-800 text-white">{t('selectCompanion')}</option>
                      <option value="Adam" className="bg-zinc-800 text-white">Adam</option>
                      <option value="Rick" className="bg-zinc-800 text-white">Rick</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.companion && (
                    <p className="text-red-400 text-sm mt-1">{errors.companion}</p>
                  )}
                </div>


                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    {t('extraServiceLabel')}
                  </label>
                  <div className="space-y-2">
                    {[
                      { name: 'Rollenspel', price: '+ € 50,-' },
                      { name: 'A-Level', price: '+ € 50,-' },
                      { name: 'Tantra Experience', price: '+ € 50,-' },
                      { name: 'Fetish & Fantasy', price: '+ € 50,-' },
                      { name: 'Magic Mike', price: '+ € 50,-' }
                    ].map((service) => (
                      <label key={service.name} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.extraServices.includes(service.name)}
                          onChange={() => handleExtraServiceChange(service.name)}
                          className="mr-3 accent-gold-500"
                        />
                        <span className="text-white/80 text-sm font-light">{service.name} {service.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Timing */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-6 flex items-center">
                <MapPin className="text-gold-400 mr-3" size={18} />
                {t('locationTiming')}
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('countryLabel')}
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="country"
                        value="nederland"
                        checked={formData.country === 'nederland'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('netherlands')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="country"
                        value="europa"
                        checked={formData.country === 'europa'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('europe')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="country"
                        value="buiten-europa"
                        checked={formData.country === 'buiten-europa'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('outsideEurope')}</span>
                    </label>
                  </div>
                  {errors.country && (
                    <p className="text-red-400 text-sm mt-1">{errors.country}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('locationTypeLabel')}
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="locationType"
                        value="hotel"
                        checked={formData.locationType === 'hotel'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('hotel')}</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="locationType"
                        value="prive-gelegenheid"
                        checked={formData.locationType === 'prive-gelegenheid'}
                        onChange={handleInputChange}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-white/80 text-sm font-light">{t('privateVenue')}</span>
                    </label>
                  </div>
                  {errors.locationType && (
                    <p className="text-red-400 text-sm mt-1">{errors.locationType}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      {t('dateLabel')}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={`form-input ${errors.date ? 'error' : ''}`}
                    />
                    <p className="text-white/50 text-xs mt-1">{t('dateNote')}</p>
                    {errors.date && (
                      <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      {t('timeLabel')}
                    </label>
                    <p className="text-white/60 text-xs mb-2">
                      (Houdt alstublieft rekening met minimaal 1 uur reis- en voorbereidingstijd.)
                    </p>
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className={`form-select ${errors.time ? 'error' : ''}`}
                      >
                        <option value="" className="bg-zinc-800 text-white">{t('selectTime')}</option>
                        <option value="00.00" className="bg-zinc-800 text-white">00.00 uur</option>
                        <option value="01.00" className="bg-zinc-800 text-white">01.00 uur</option>
                        <option value="02.00" className="bg-zinc-800 text-white">02.00 uur</option>
                        <option value="03.00" className="bg-zinc-800 text-white">03.00 uur</option>
                        <option value="04.00" className="bg-zinc-800 text-white">04.00 uur</option>
                        <option value="05.00" className="bg-zinc-800 text-white">05.00 uur</option>
                        <option value="06.00" className="bg-zinc-800 text-white">06.00 uur</option>
                        <option value="07.00" className="bg-zinc-800 text-white">07.00 uur</option>
                        <option value="08.00" className="bg-zinc-800 text-white">08.00 uur</option>
                        <option value="09.00" className="bg-zinc-800 text-white">09.00 uur</option>
                        <option value="10.00" className="bg-zinc-800 text-white">10.00 uur</option>
                        <option value="11.00" className="bg-zinc-800 text-white">11.00 uur</option>
                        <option value="12.00" className="bg-zinc-800 text-white">12.00 uur</option>
                        <option value="13.00" className="bg-zinc-800 text-white">13.00 uur</option>
                        <option value="14.00" className="bg-zinc-800 text-white">14.00 uur</option>
                        <option value="15.00" className="bg-zinc-800 text-white">15.00 uur</option>
                        <option value="16.00" className="bg-zinc-800 text-white">16.00 uur</option>
                        <option value="17.00" className="bg-zinc-800 text-white">17.00 uur</option>
                        <option value="18.00" className="bg-zinc-800 text-white">18.00 uur</option>
                        <option value="19.00" className="bg-zinc-800 text-white">19.00 uur</option>
                        <option value="20.00" className="bg-zinc-800 text-white">20.00 uur</option>
                        <option value="21.00" className="bg-zinc-800 text-white">21.00 uur</option>
                        <option value="22.00" className="bg-zinc-800 text-white">22.00 uur</option>
                        <option value="23.00" className="bg-zinc-800 text-white">23.00 uur</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.time && (
                      <p className="text-red-400 text-sm mt-1">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      {t('durationLabel')}
                    </label>
                    <div className="relative">
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                        className={`form-select ${errors.duration ? 'error' : ''}`}
                      >
                        <option value="" className="bg-zinc-800 text-white">{t('selectDuration')}</option>
                        <option value="2" className="bg-zinc-800 text-white">2 uur</option>
                        <option value="3" className="bg-zinc-800 text-white">3 uur</option>
                        <option value="4" className="bg-zinc-800 text-white">4 uur</option>
                        <option value="5" className="bg-zinc-800 text-white">5 uur</option>
                        <option value="6" className="bg-zinc-800 text-white">6 uur</option>
                        <option value="7" className="bg-zinc-800 text-white">7 uur</option>
                        <option value="8" className="bg-zinc-800 text-white">8 uur</option>
                        <option value="9" className="bg-zinc-800 text-white">9 uur</option>
                        <option value="10" className="bg-zinc-800 text-white">10 uur</option>
                        <option value="11" className="bg-zinc-800 text-white">11 uur</option>
                        <option value="12" className="bg-zinc-800 text-white">12 uur</option>
                        <option value="13" className="bg-zinc-800 text-white">13 uur</option>
                        <option value="14" className="bg-zinc-800 text-white">14 uur</option>
                        <option value="15" className="bg-zinc-800 text-white">15 uur</option>
                        <option value="16" className="bg-zinc-800 text-white">16 uur</option>
                        <option value="17" className="bg-zinc-800 text-white">17 uur</option>
                        <option value="18" className="bg-zinc-800 text-white">18 uur</option>
                        <option value="19" className="bg-zinc-800 text-white">19 uur</option>
                        <option value="20" className="bg-zinc-800 text-white">20 uur</option>
                        <option value="21" className="bg-zinc-800 text-white">21 uur</option>
                        <option value="22" className="bg-zinc-800 text-white">22 uur</option>
                        <option value="23" className="bg-zinc-800 text-white">23 uur</option>
                        <option value="24" className="bg-zinc-800 text-white">24 uur</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.duration && (
                      <p className="text-red-400 text-sm mt-1">{errors.duration}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-white mb-6 flex items-center">
                <CreditCard className="text-gold-400 mr-3" size={18} />
                {t('paymentSection')}
              </h3>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  {t('paymentLabel')}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="contant"
                      checked={formData.paymentMethod === 'contant'}
                      onChange={handleInputChange}
                      className="mr-3 accent-gold-500"
                    />
                    <span className="text-white/80 text-sm font-light">{t('cashEuros')}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bankoverschrijving"
                      checked={formData.paymentMethod === 'bankoverschrijving'}
                      onChange={handleInputChange}
                      className="mr-3 accent-gold-500"
                    />
                    <span className="text-white/80 text-sm font-light">{t('bankTransfer')}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="betaalverzoek"
                      checked={formData.paymentMethod === 'betaalverzoek'}
                      onChange={handleInputChange}
                      className="mr-3 accent-gold-500"
                    />
                    <span className="text-white/80 text-sm font-light">{t('paymentRequest')}</span>
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-400 text-sm mt-1">{errors.paymentMethod}</p>
                )}
              </div>
            </div>

            {/* Privacy Agreement */}
            <div className="border-t border-white/[0.06] pt-8">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-5 h-5 bg-white/[0.04] border border-white/[0.1] rounded focus:ring-2 focus:ring-gold-400/15 text-gold-500 cursor-pointer accent-gold-500"
                />
                <span className="text-white/55 text-sm leading-relaxed font-light">
                  {t('privacyAgreementText')} <a href="#privacy" className="text-gold-400 hover:text-gold-300 underline">{t('privacyTerms')}</a> {t('and')} <a href="#terms" className="text-gold-400 hover:text-gold-300 underline">{t('generalTerms')}</a>.
                </span>
              </label>
              {errors.privacy && (
                <p className="text-red-400 text-sm mt-2">{errors.privacy}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`px-12 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-ink-950 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-gold-500/25 flex items-center space-x-3 mx-auto ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-gold-400 hover:to-gold-500'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                    <span>{t('submitting')}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('submitBooking')}</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Contact Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/45 mb-4 text-sm font-light">
            {t('preferDirectContact')}
          </p>
          <motion.a
            href={`tel:${t('phone')}`}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors text-lg font-medium"
          >
            <Phone size={20} />
            <span>{t('phone')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;