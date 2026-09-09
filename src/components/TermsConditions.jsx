import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Users, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const TermsConditions = () => {
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
              Algemene voorwaarden
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8" />
            
            {/* Introduction */}
            <div className="glass-effect rounded-2xl p-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 text-gold-400 mb-4">
                <FileText size={24} />
                <span className="font-semibold">Belangrijke Informatie</span>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Door gebruik te maken van de diensten van MrElite aanvaardt de klant onderstaande voorwaarden.
              </p>
            </div>
          </motion.div>

          {/* Terms Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12 space-y-12"
          >
            {/* Artikel 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <Users className="mr-3" size={24} />
                Artikel 1 – Begripsbepalingen
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">High-class gigolo's:</strong> de door MrElite ingeschakelde personen met minimale leeftijd 21 jaar</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Klant:</strong> rechtspersonen/natuurlijke personen 18+ die boekingsovereenkomst wensen</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Partijen:</strong> MrElite en Klant tezamen</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">MrElite:</strong> onderneming ingeschreven onder Simply Services BV</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Website:</strong> www.mrelite.nl</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Boeking:</strong> overeenkomst van opdracht en dienstverlening</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Arrangement/Experience:</strong> pakket diensten op basis van klantwensen</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Boekingsbevestiging:</strong> bevestiging van afspraken tussen partijen</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong className="text-white">Boekingsaanvraag:</strong> verzoek van klant via website/email/telefoon</p>
                </div>
              </div>
            </section>

            {/* Artikel 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6 flex items-center">
                <Shield className="mr-3" size={24} />
                Artikel 2 – Toepasselijkheid
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Deze voorwaarden zijn van toepassing op alle aanbiedingen en boekingen van MrElite</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>MrElite mag deze voorwaarden te allen tijde aanpassen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Eventuele voorwaarden van de klant zijn uitgesloten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Bij het plaatsen van een boeking gaat de klant akkoord met deze voorwaarden</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Bij nietigheid van bepalingen blijven de overige bepalingen van kracht</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Stilzwijgende instemming geldt bij latere boekingen</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Artikel 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Artikel 3 – Onderneming
              </h2>
              <div className="text-white/80 leading-relaxed space-y-4">
                <p>
                  MrElite is een volledig legale High Class Gigolo Service die internationaal werkzaam is. 
                  Onze gigolo's worden zorgvuldig geselecteerd en zijn minimaal 21 jaar oud, conform de Nederlandse wetgeving.
                </p>
                <div className="bg-gold-600/10 border border-gold-600/20 rounded-lg p-4">
                  <p className="text-gold-400 font-semibold">
                    Wij opereren volledig binnen de kaders van de Nederlandse wet- en regelgeving en hanteren de hoogste standaarden 
                    voor professionaliteit en discretie.
                  </p>
                </div>
              </div>
            </section>

            {/* Artikel 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Artikel 4 – Totstandkoming Boeking
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Alle aanbiedingen van MrElite zijn vrijblijvend</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>Een boeking komt tot stand bij uitdrukkelijke aanvaarding door MrElite</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>De boekingsbevestiging dient juist en volledig te zijn</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                    <span>MrElite behoudt zich het recht voor om een boekingsaanvraag te weigeren</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Artikel 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Artikel 5 – Boekingen
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Algemene Bepalingen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>MrElite zorgt voor de matching tussen klant en gigolo</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Beveiliging kan worden ingezet indien noodzakelijk</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Minimale boekingsduur is 2 uur</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Locatie Vereisten</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>De locatie dient hygiënisch en veilig te zijn</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Bij hotelboekingen: minimaal 4-sterren accommodatie</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Hygiëne en Veiligheid</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Persoonlijke hygiëne is verplicht voor alle partijen</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>MrElite hanteert een strict safe seks beleid</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Klant Verplichtingen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>De klant dient bereikbaar te zijn voor communicatie</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Gebruik van drugs of overmatig alcohol is niet toegestaan</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                      <span>Respectvolle behandeling van onze gigolo's is verplicht</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-400 mb-3">Strikte Verboden</h3>
                  <ul className="space-y-2 text-red-300">
                    <li>• Geen dwang tot handelingen die niet zijn afgesproken</li>
                    <li>• Geen misleiding of intimidatie</li>
                    <li>• Geen geweld of bedreiging</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-gold-400 mb-6">
                Contact & Vragen
              </h2>
              <div className="text-white/80 leading-relaxed space-y-4">
                <p>
                  Voor vragen over deze algemene voorwaarden kunt u contact opnemen met MrElite:
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

export default TermsConditions;