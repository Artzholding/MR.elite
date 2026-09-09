# 🔍 Domain Setup QA Test - mrelite.nl

## ✅ Pre-Setup Checklist
- [x] Netlify site claimed successfully
- [x] Custom domain added in Netlify (mrelite.nl)
- [x] Netlify nameservers obtained
- [ ] GoDaddy nameservers updated
- [ ] Old A record removed

## 🔧 Nameservers Configuration

### Netlify Nameservers (from screenshot):
```
dns1.p07.nsone.net
dns2.p07.nsone.net
dns3.p07.nsone.net
dns4.p07.nsone.net
```

### GoDaddy Setup Steps:
1. [ ] Go to GoDaddy DNS management
2. [ ] Scroll to "Name servers" section
3. [ ] Click "Change"
4. [ ] Select "I'll use my own nameservers"
5. [ ] Enter all 4 Netlify nameservers
6. [ ] Remove existing A record (75.2.60.5)
7. [ ] Save changes

## 🧪 Testing Protocol

### Immediate Tests (0-15 minutes):
- [ ] DNS propagation check: https://dnschecker.org
- [ ] Nameserver verification: `nslookup mrelite.nl`
- [ ] Basic connectivity test

### Short-term Tests (15 minutes - 2 hours):
- [ ] HTTP access: `http://mrelite.nl`
- [ ] HTTPS access: `https://mrelite.nl`
- [ ] WWW redirect: `https://www.mrelite.nl`
- [ ] SSL certificate status in browser

### Long-term Tests (2-24 hours):
- [ ] Full SSL certificate provisioning
- [ ] Global DNS propagation
- [ ] Performance testing
- [ ] Mobile compatibility

## 🚨 Expected Issues & Solutions

### Issue 1: "Site not found" (First 15-30 minutes)
**Cause**: DNS propagation in progress
**Solution**: Wait, test with different DNS servers
**Test**: `nslookup mrelite.nl 8.8.8.8`

### Issue 2: SSL Certificate Error (First 2-6 hours)
**Cause**: Netlify provisioning SSL certificate
**Solution**: Wait for automatic provisioning
**Check**: Netlify dashboard → Domain settings → SSL status

### Issue 3: "This site can't be reached"
**Cause**: Nameservers not updated correctly
**Solution**: Verify nameservers in GoDaddy match Netlify exactly
**Test**: `dig NS mrelite.nl`

## 📊 Success Criteria

### ✅ Fully Working Setup:
- [ ] `https://mrelite.nl` loads without SSL warnings
- [ ] `https://www.mrelite.nl` redirects to main domain
- [ ] Green padlock icon in browser
- [ ] Page loads in under 3 seconds
- [ ] Mobile responsive design works
- [ ] All website features functional

### 🔍 Technical Validation:
- [ ] SSL certificate valid for mrelite.nl
- [ ] DNS A record points to Netlify IP
- [ ] CNAME for www subdomain configured
- [ ] HTTP redirects to HTTPS automatically

## 🕐 Timeline Expectations

| Time | Expected Status |
|------|----------------|
| 0-15 min | DNS propagation starting |
| 15-30 min | Basic HTTP access working |
| 30 min-2 hours | HTTPS with SSL working |
| 2-6 hours | Full global propagation |
| 6-24 hours | All edge cases resolved |

## 🛠️ Troubleshooting Commands

### DNS Testing:
```bash
# Check nameservers
dig NS mrelite.nl

# Check A record
dig A mrelite.nl

# Check from different DNS server
nslookup mrelite.nl 8.8.8.8
```

### SSL Testing:
```bash
# Check SSL certificate
openssl s_client -connect mrelite.nl:443 -servername mrelite.nl

# Online SSL test
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=mrelite.nl
```

## 📞 Support Contacts

- **Netlify Support**: https://netlify.com/support
- **GoDaddy Support**: For nameserver issues only
- **Backup URL**: https://gorgeous-melba-24f0d2.netlify.app

## 🎯 Final Validation

Once everything is working:
- [ ] Test booking form functionality
- [ ] Test contact form
- [ ] Test mobile responsiveness
- [ ] Test page load speeds
- [ ] Test all navigation links
- [ ] Test language switching (NL/EN)
- [ ] Test cookie banner
- [ ] Verify Google Analytics (if configured)

---

**Status**: ⏳ Waiting for GoDaddy nameserver update
**Next Step**: Update nameservers in GoDaddy
**ETA**: 2-6 hours for full functionality