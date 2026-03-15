import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const KamperyPage = () => {
  return (
    <div className="min-h-screen bg-grey">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-grey/95 backdrop-blur-sm border-b border-yellow/20">
        <div className="max-w-[90rem] mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Dark Oak" className="h-10 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/48669004609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow hover:bg-hover text-grey font-bold text-2 md:text-3 px-4 md:px-6 py-2 md:py-3 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.4)] hover:translate-y-[-2px]"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span>Zacznij projekt</span>
            </a>
            <a
              href="/"
              className="text-grey bg-white hover:text-yellow rounded-sm transition-colors duration-300 font-bold text-2 md:text-3"
            >
              Powrót
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Kamper van - profesjonalny serwis i budowa"
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
                Dark Oak Kampery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-white text-3 md:text-4 font-medium leading-relaxed px-4"
              >
                Profesjonalny serwis i naprawy oraz budowy na zamówienie kamperów i przyczep kempingowych
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-yellow font-bold text-5 md:text-7 mb-6">
                Nasze Usługi
              </h2>
              <p className="text-white/80 text-3 md:text-4 max-w-3xl mx-auto leading-relaxed">
                Specjalizujemy się w kompleksowej obsłudze kamperów i przyczep
                kempingowych. Oferujemy profesjonalny serwis, naprawy oraz
                realizujemy indywidualne projekty budowy na zamówienie.
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
                  <svg
                    className="w-8 h-8 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-yellow font-bold text-4 md:text-5 mb-4">
                  Serwis i Naprawy
                </h3>
                <p className="text-white/70 text-3 leading-relaxed">
                  Kompleksowy serwis kamperów i przyczep kempingowych.
                  Diagnostyka, naprawy mechaniczne i elektryczne.
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
                  <svg
                    className="w-8 h-8 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-yellow font-bold text-4 md:text-5 mb-4">
                  Budowa na Zamówienie
                </h3>
                <p className="text-white/70 text-3 leading-relaxed">
                  Indywidualne projekty i budowa kamperów według Twoich
                  potrzeb. Od koncepcji po realizację.
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
                  <svg
                    className="w-8 h-8 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-yellow font-bold text-4 md:text-5 mb-4">
                  Doświadczenie
                </h3>
                <p className="text-white/70 text-3 leading-relaxed">
                  Wieloletnie doświadczenie w branży. Gwarancja jakości i
                  profesjonalizmu na każdym etapie współpracy.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-5 bg-grey border-t border-yellow/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-yellow font-bold text-5 md:text-7 mb-6">
                Skontaktuj się z nami
              </h2>
              <p className="text-white/80 text-3 md:text-4 max-w-3xl mx-auto leading-relaxed">
                Masz pytania? Chcesz umówić się na serwis lub omówić projekt?
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
                    <MapPin className="w-6 h-6" />
                    Lokalizacja Warsztatu
                  </h3>
                  <div className="w-full h-[300px] md:h-[350px] rounded-sm overflow-hidden border border-yellow/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2403.055716401219!2d18.7320836!3d52.9654121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbeb428118e7ff97%3A0xfd6351632a3f0100!2sSerwis%20rowerowy!5e0!3m2!1sen!2suk!4v1773587430633!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja warsztatu Dark Oak Kampery"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow" />
                  </div>
                  <div>
                    <h3 className="text-yellow font-bold text-4 mb-2">
                      Telefon
                    </h3>
                    <a
                      href="tel:+48669004609"
                      className="text-white/80 text-3 hover:text-yellow transition-colors duration-300 inline-block"
                    >
                      +48 669 004 609
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow" />
                  </div>
                  <div>
                    <h3 className="text-yellow font-bold text-4 mb-2">
                      Godziny Otwarcia
                    </h3>
                    <p className="text-white/80 text-3 leading-relaxed">
                      Poniedziałek - Piątek: 9:00 - 17:00
                      <br />
                      Sobota - Niedziela: Zamknięte
                    </p>
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
                  Twojego projektu. Odpowiemy na wszystkie pytania i
                  pomożemy zrealizować Twoje marzenia o idealnym kamperze.
                </p>
                <a
                  href="https://wa.me/48669004609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-yellow hover:bg-hover text-grey font-bold text-4 px-10 py-5 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.4)] hover:translate-y-[-2px]"
                >
                  <MessageCircle className="w-5 h-5" />
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
            © {new Date().getFullYear()} Dark Oak Kampery. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default KamperyPage;
