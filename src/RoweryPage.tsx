import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Mail, Facebook, Zap, Wrench, Star } from "lucide-react";

const RoweryPage = () => {
  return (
    <div className="min-h-screen bg-grey">
      <title>Dark Oak Bike – Rowery Elektryczne i Serwis Rowerowy Toruń</title>
      <meta
        name="description"
        content="Dark Oak Bike – profesjonalna konwersja rowerów na elektryczne, serwis i naprawy rowerów w Toruniu. Zleć projekt lub umów wizytę."
      />

      <nav
        aria-label="Nawigacja strony Rowery"
        className="fixed top-0 left-0 right-0 z-50 bg-grey/95 backdrop-blur-sm border-b border-yellow/20"
      >
        <div className="max-w-[90rem] mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Dark Oak" className="h-10 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/48669004609"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Skontaktuj się przez WhatsApp i zacznij projekt rowerowy"
              className="inline-flex items-center gap-2 bg-yellow hover:bg-hover text-grey font-bold text-2 md:text-3 px-4 md:px-6 py-2 md:py-3 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.4)] hover:translate-y-[-2px]"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              <span>Zacznij projekt</span>
            </a>
            <a
              href="/"
              aria-label="Wróć do strony głównej"
              className="text-grey bg-white hover:text-yellow rounded-sm text-2 md:text-3 px-4 md:px-6 py-2 md:py-3 duration-500 transition-colors font-bold"
            >
              Powrót
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          aria-label="Baner główny Dark Oak Bike"
          className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden"
        >
          <img
            src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Rower elektryczny – profesjonalna konwersja i serwis Dark Oak Bike Toruń"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          <div className="relative z-10 h-full flex items-center justify-center px-5">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-yellow font-bold text-6 md:text-8 lg:text-9 mb-6 tracking-tighter leading-[0.95]"
              >
                Dark Oak Bike
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-white text-3 md:text-4 font-medium leading-relaxed px-4"
              >
                Konwersja rowerów na elektryczne, serwis i naprawy rowerów na zamówienie
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section aria-labelledby="uslugi-heading" className="py-16 md:py-24 px-5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2
                id="uslugi-heading"
                className="text-yellow font-bold text-5 md:text-7 mb-6"
              >
                Nasze Usługi
              </h2>
              <p className="text-white/80 text-3 md:text-4 max-w-3xl mx-auto leading-relaxed">
                Specjalizujemy się w konwersji rowerów na elektryczne oraz
                kompleksowym serwisie rowerowym. Realizujemy indywidualne projekty
                według Twoich potrzeb.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-grey border border-yellow/20 p-8 rounded-sm hover:border-yellow/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-yellow/10 rounded-sm flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-yellow" aria-hidden="true" />
                </div>
                <h3 className="text-yellow font-bold text-4 md:text-5 mb-4">
                  Konwersja na Elektryczny
                </h3>
                <p className="text-white/70 text-3 leading-relaxed">
                  Profesjonalna przebudowa Twojego roweru na elektryczny. Dobór
                  silnika, baterii i elektroniki dostosowany do stylu jazdy.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-grey border border-yellow/20 p-8 rounded-sm hover:border-yellow/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-yellow/10 rounded-sm flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-yellow" aria-hidden="true" />
                </div>
                <h3 className="text-yellow font-bold text-4 md:text-5 mb-4">
                  Serwis i Naprawy
                </h3>
                <p className="text-white/70 text-3 leading-relaxed">
                  Kompleksowy serwis rowerów klasycznych i elektrycznych.
                  Regulacje, wymiana komponentów i diagnostyka układów e-bike.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-grey border border-yellow/20 p-8 rounded-sm hover:border-yellow/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-yellow/10 rounded-sm flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-yellow" aria-hidden="true" />
                </div>
                <h3 className="text-yellow font-bold text-4 md:text-5 mb-4">
                  Projekty na Zamówienie
                </h3>
                <p className="text-white/70 text-3 leading-relaxed">
                  Indywidualne buildy rowerowe od podstaw. Od projektu po
                  realizację – rower szyty na miarę Twoich oczekiwań.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Contact & Opening Hours Section */}
        <section
          aria-labelledby="kontakt-heading"
          className="py-16 md:py-24 px-5 bg-grey border-t border-yellow/20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2
                id="kontakt-heading"
                className="text-yellow font-bold text-5 md:text-7 mb-6"
              >
                Skontaktuj się z nami
              </h2>
              <p className="text-white/80 text-3 md:text-4 max-w-3xl mx-auto leading-relaxed">
                Masz pytania? Chcesz umówić się na serwis lub omówić konwersję?
                <br className="hidden md:block" />
                Jesteśmy do Twojej dyspozycji!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-yellow font-bold text-4 mb-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                    Lokalizacja Warsztatu
                  </h3>
                  <div className="w-full h-[300px] md:h-[350px] rounded-sm overflow-hidden border border-yellow/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.7617471837788!2d18.73123386968659!3d52.96556910600186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ccb059bc88a5d%3A0xf2f5854bdec5552b!2sDark%20Oak%20Bike%20serwis%20rowerowy!5e0!3m2!1sen!2suk!4v1779981569918!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja warsztatu Dark Oak Bike"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-yellow font-bold text-4 mb-2">Telefon</h3>
                    <a
                      href="tel:+48669004609"
                      aria-label="Zadzwoń do Dark Oak Bike pod numer +48 669 004 609"
                      className="text-white/80 text-3 hover:text-yellow transition-colors duration-300 inline-block"
                    >
                      +48 669 004 609
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-yellow font-bold text-4 mb-2">Email</h3>
                    <a
                      href="mailto:biuro@darkoak.pl"
                      aria-label="Napisz email do Dark Oak Bike na adres biuro@darkoak.pl"
                      className="text-white/80 text-3 hover:text-yellow transition-colors duration-300 inline-block"
                    >
                      biuro@darkoak.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-yellow font-bold text-4 mb-2">
                      Godziny Otwarcia
                    </h3>
                    <p className="text-white/80 text-3 leading-relaxed">
                      Poniedziałek – Piątek: 9:00 – 17:00
                      <br />
                      Sobota – Niedziela: Zamknięte
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-yellow font-bold text-4 mb-2">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/people/Dark-Oak-Bike/61581195197436/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Odwiedź profil Dark Oak Bike na Facebooku (otwiera nową kartę)"
                      className="text-white/80 text-3 hover:text-yellow transition-colors duration-300 inline-block"
                    >
                      Dark Oak Bike
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-grey border border-yellow/20 rounded-sm p-8 md:p-10 flex flex-col justify-center"
              >
                <h3 className="text-yellow font-bold text-5 mb-6">
                  Zacznij projekt
                </h3>
                <p className="text-white/70 text-3 leading-relaxed mb-8">
                  Skontaktuj się z nami przez WhatsApp, aby omówić szczegóły
                  Twojego projektu rowerowego. Odpowiemy na wszystkie pytania i
                  pomożemy zrealizować Twoje marzenia o idealnym e-bike.
                </p>
                <a
                  href="https://wa.me/48669004609"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Napisz do Dark Oak Bike przez WhatsApp i zacznij projekt rowerowy"
                  className="inline-flex items-center justify-center gap-3 bg-yellow hover:bg-hover text-grey font-bold text-4 px-10 py-5 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.4)] hover:translate-y-[-2px]"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Zacznij projekt</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-grey border-t border-yellow/20 py-8 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-2">
            © {new Date().getFullYear()} Dark Oak Bike. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RoweryPage;
