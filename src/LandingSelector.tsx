import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-grey flex items-center justify-center px-5">
      <div className="max-w-[90rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <motion.button
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1, ease: "easeOut" }}
            onClick={() => navigate("/meble")}
            className="group relative overflow-hidden rounded-sm bg-grey border-2 border-yellow/20 hover:border-yellow transition-all duration-500 h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0">
              <img
                src="/k-1.webp"
                alt="Meble kuchenne na wymiar Dark Oak"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
              <h2 className="text-yellow font-bold text-6 md:text-7 mb-4 group-hover:scale-110 transition-transform duration-500">
                Meble
              </h2>
              <p className="text-white text-3 md:text-4 text-center max-w-sm">
                Kuchnie na wymiar, szafy i meble premium
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-yellow font-bold text-4 group-hover:translate-x-2 transition-transform duration-500">
                <span>Zobacz więcej</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => navigate("/kampery")}
            className="group relative overflow-hidden rounded-sm bg-grey border-2 border-yellow/20 hover:border-yellow transition-all duration-500 h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0">
              <img
                src="/kampery-bg.webp"
                alt="Kampery i przyczepy kempingowe - serwis i budowa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
              <h2 className="text-yellow font-bold text-6 md:text-7 mb-4 group-hover:scale-110 transition-transform duration-500">
                Kampery
              </h2>
              <p className="text-white text-3 md:text-4 text-center max-w-sm">
                Serwis, naprawa i budowa kamperów
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-yellow font-bold text-4 group-hover:translate-x-2 transition-transform duration-500">
                <span>Zobacz więcej</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LandingSelector;
