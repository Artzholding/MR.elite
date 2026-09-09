import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Eye, Lock, Users, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const goBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <motion.button
              onClick={goBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Terug naar Home</span>
            </motion.button>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Beleid MrElite 2025
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8" />
            
            {/* Introduction */}
            <div className="glass-effect rounded-2xl p-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 text-gold-400 mb-4">
                <Shield size={24} />
                <span className="font-semibold">Privacy & Discretie</span>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Welkom bij International High Class Gigolo Service MrElite! Het is onze missie om voor u een onvergetelijke ervaring te verzorgen. Om een boeking voor u te kunnen verzorgen vragen wij u wat persoonlijke gegevens aan ons door te geven bij uw aanvraag. Natuurlijk begrijpen wij dat uw privacy belangrijk voor u is, wij zullen ons daarom te allen tijde inspannen om uw (persoons)gegevens discreet en met vertrouwen te behandelen.
              </p>
            </div>
          </motion.div>

          {/* Privacy Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12 space-y-12"
          >
            {/* Wanneer past MrElite het privacy beleid toe? */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <FileText className="mr-3" size={24} />
                Wanneer past MrElite het privacy beleid toe?
              </h2>
              <div className="text-white/80 leading-relaxed">
                <p>
                  Als u gebruik wilt maken van de dienstverlening van MrElite dient u contact met ons op te nemen middels e-mail, telefoon, WhatsApp of het boekingsformulier. Op alle informatie die voortvloeit uit bovenstaande contactmogelijkheden is het privacy beleid van toepassing.
                </p>
              </div>
            </section>

            {/* Welke informatie verzamelt MrElite? */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <Eye className="mr-3" size={24} />
                Welke informatie verzamelt MrElite?
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  Als u contact met ons opneemt dan levert u tijdens dit contactmoment zelf informatie bij ons aan. Tevens maken wij gebruik van openbare bronnen en verifiëren wij de door u verstrekte informatie. Het is niet toegestaan om onjuiste informatie aan ons te verstrekken. Indien u onjuiste of onvolledige informatie aan ons verstrekt houden wij ons het recht voor om een boeking te annuleren of deze niet met u overeen te komen.
                </p>
                
                <div className="bg-gold-600/10 border border-gold-600/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Bij gehonoreerde boekingsaanvraag verzamelen wij:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Uw naam</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Uw contactgegevens (e-mail en telefoonnummer)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Uw leeftijd</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Uw persoonlijke voorkeuren</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Indien mogelijk aanvullende informatie voor een betere match</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gold-400 font-semibold">
                    Indien uw boekingsaanvraag niet gehonoreerd kan worden door ons, en aldus niet resulteert in een daadwerkelijke boeking, bewaren wij alleen uw e-mailadres en andere correspondentie.
                  </p>
                </div>
              </div>
            </section>

            {/* Voor welke doeleinden verzamelen en verwerken wij persoonlijke gegevens? */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <Users className="mr-3" size={24} />
                Voor welke doeleinden verzamelen en verwerken wij persoonlijke gegevens?
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>Wij verzamelen en verwerken persoonsgegevens om onderstaande redenen:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Om voor u een passende match te maken met een of meerdere van onze high-class gigolo's;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Om een boeking voor u op de perfecte manier samen te stellen;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Om eventuele toekomstige boekingen te optimaliseren;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Om de persoonlijke veiligheid en de gezondheid van onze high-class gigolo's te beschermen;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Wij zijn wettelijk verplicht om bepaalde informatie te verzamelen.</span>
                  </li>
                </ul>

                <div className="bg-gold-600/10 border border-gold-600/20 rounded-lg p-6">
                  <p className="text-gold-400 font-semibold mb-3">Belangrijke principes:</p>
                  <p>
                    Alle persoonlijke informatie die door ons verzameld en verwerkt wordt, wordt nimmer verwerkt of verzameld voor andere doeleinden dan het naar beste kunnen verzorgen en uitvoeren van onze dienstverlening.
                  </p>
                  <p className="mt-3">
                    Wij zullen nimmer contact met u initiëren, dit uit respect voor uw privacy, tenzij hier een dringende reden voor is.
                  </p>
                </div>
              </div>
            </section>

            {/* Hoe lang bewaart MrElite uw gegevens? */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <Lock className="mr-3" size={24} />
                Hoe lang bewaart MrElite uw gegevens?
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  Wij bewaren uw persoonlijke informatie gedurende de periode dat wij deze nodig hebben voor de doelstellingen beschreven in de bovenstaande alinea. De Nederlandse wetgeving verplicht ons bovendien om dergelijke informatie minimaal 7 jaar te bewaren. Nochtans worden uw gegevens na 3 jaar geanonimiseerd.
                </p>
                
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-300">
                    <strong>Uitzondering:</strong> Indien in het verleden sprake is geweest van ongewenst gedrag gericht aan onze onderneming of gericht aan een of meerdere van onze high-class gigolo's, kunnen wij uw gegevens langer bewaren dan de wettelijke bewaartermijn. Dit doen wij om onze onderneming te beschermen.
                  </p>
                </div>
              </div>
            </section>

            {/* Het delen van persoonsgegevens */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Het delen van persoonsgegevens
              </h2>
              <div className="text-white/80 leading-relaxed">
                <p>
                  Uw persoonlijke gegevens worden binnen onze onderneming niet gedeeld, mits dit strikt noodzakelijk is om uitvoering te geven aan uw boekingsaanvraag of indien de veiligheid van een of meerdere van onze high-class gigolo's in gevaar dreigt te komen/ zijn.
                </p>
              </div>
            </section>

            {/* Hoe beschermt MrElite uw persoonsgegevens? */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <Shield className="mr-3" size={24} />
                Hoe beschermt MrElite uw persoonsgegevens?
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  Voor zover dat van ons gevergd kan worden zullen wij ons te allen tijde inspannen om naar alle redelijkheid en billijkheid uw persoonsgegevens en aanverwante informatie te beschermen. Wij hechten veel waarde aan discretie en privacy en baseren ons beleid dan ook op deze kernwaarden.
                </p>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <p>
                    Wij maken net als vele andere websites gebruik van cookies. Dit is nodig voor een optimale belevening van onze website. Helaas is het niet mogelijk om gegevensoverdracht of opslag via internet met een 100% veiligheid garantie te verzekeren.
                  </p>
                </div>
              </div>
            </section>

            {/* De rechten omtrent privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                De rechten omtrent privacy
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  Volgens de Nederlandse toepasselijke privacywetgeving heeft u te allen tijde recht op het inzien van uw persoonsgegevens en aanverwante informatie die wij van u in ons bezit hebben. Als u van mening bent dat de gegevens die MrElite in het bezit heeft onjuist zijn, kunt u een verzoek indienen via het contact formulier om uw gegevens aan te laten passen. Als er volgens u geen gegronde redenen bestaan voor het feit dat wij uw persoonsgegevens bewaren of verwerken kunt u een verzoek indienen om uw persoonsgegevens in zijn geheel of gedeeltelijk te laten wissen.
                </p>
              </div>
            </section>

            {/* Wijzigingen in de wetgeving */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Wijzigingen in de wetgeving
              </h2>
              <div className="text-white/80 leading-relaxed space-y-4">
                <p>
                  Momenteel wordt er nog veel gesleuteld aan een waterdichte privacywet, dit kan resulteren in meerdere aanpassingen van ons privacy beleid. Wijzigingen kunt u vinden op onze website.
                </p>
                <p>
                  Voor vragen en/of opmerkingen kunt u altijd contact met ons op nemen.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Contact & Vragen
              </h2>
              <div className="text-white/80 leading-relaxed space-y-4">
                <p>
                  Voor vragen over dit privacy beleid kunt u contact opnemen met MrElite:
                </p>
                <div className="bg-white/5 rounded-lg p-4 space-y-2">
                  <p><strong className="text-white">Telefoon:</strong> +31 6 16335723</p>
                  <p><strong className="text-white">Email:</strong> mrelite.nl@gmail.com</p>
                  <p><strong className="text-white">Website:</strong> www.mrelite.nl</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Laatst bijgewerkt: Januari 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;