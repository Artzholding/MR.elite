# 📧 EmailJS Setup Guide for Mr. Elite

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to **https://emailjs.com**
2. Click **"Sign Up"** (it's FREE)
3. Use your email to create account
4. Verify your email address

### Step 2: Connect Your Email Service
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Click **"Connect Account"**
5. Sign in with **mrelite.nl@gmail.com**
6. Allow EmailJS permissions
7. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name**: "Mr Elite Booking"
4. **Subject**: `Nieuwe Boeking - {{user_name}}`
5. **Content** (copy this):

```
Nieuwe Boeking - Mr. Elite

Van: {{user_name}}
Email: {{user_email}}
Telefoon: {{user_phone}}

Boekingsdetails:
{{booking_details}}

---
Dit bericht is automatisch verzonden via de Mr. Elite website.
```

6. Click **"Save"**
7. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy the Public Key** (looks like: `user_abcdefghijk`)

### Step 5: Update Your Website
Replace these values in your BookingForm.jsx:

```javascript
// Replace these with your actual values:
emailjs.init("YOUR_PUBLIC_KEY");           // Step 4
'YOUR_SERVICE_ID',    // Step 2
'YOUR_TEMPLATE_ID',   // Step 3
```

### Step 6: Test It!
1. **Save and deploy** your website
2. **Fill out the booking form**
3. **Check mrelite.nl@gmail.com** for the email!

## 🎯 What You'll Get

✅ **Professional emails** with all booking details
✅ **Sent directly** to mrelite.nl@gmail.com  
✅ **No server setup** required
✅ **200 free emails** per month
✅ **Reliable delivery** via Gmail

## 🔧 Your EmailJS Configuration

After setup, your values will look like:
- **Service ID**: `service_abc123`
- **Template ID**: `template_xyz789` 
- **Public Key**: `user_abcdefghijk`

## 📞 Need Help?

If you need assistance with any step, just let me know and I'll guide you through it!

---

**Total setup time: ~5 minutes**
**Cost: FREE (200 emails/month)**
**Result: Professional booking emails in your inbox!**