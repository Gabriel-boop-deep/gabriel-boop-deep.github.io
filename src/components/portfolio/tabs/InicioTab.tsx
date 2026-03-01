import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.jpeg";
import VideoSection from "@/components/portfolio/VideoSection";

interface InicioTabProps {
  onNavigate: (tab: string) => void;
}

const InicioTab = ({ onNavigate }: InicioTabProps) => {
  const { t } = useLanguage();
  
  const urgencyPoints = [
    { icon: CheckCircle2, textKey: "hero.point1" },
    { icon: CheckCircle2, textKey: "hero.point2" },
    { icon: CheckCircle2, textKey: "hero.point3" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center pt-44 md:pt-32 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-green-500/50 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-green-400">{t("hero.available")}</span>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-gradient">Gabriel Nunes</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">{t("hero.title")}</p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              {t("hero.headline1")}
              <br />
              <span className="text-gradient">{t("hero.headline2")}</span>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal">
                {t("hero.headline3")}
              </span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            {/* Urgency points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-2 mb-6"
            >
              {urgencyPoints.map((point, index) => (
                <motion.div
                  key={point.textKey}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <point.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground font-medium">{t(point.textKey)}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-4 md:gap-8 mb-8"
            >
              {[
                { number: "20+", labelKey: "hero.projects", icon: TrendingUp },
                { number: "100%", labelKey: "hero.satisfaction", icon: CheckCircle2 },
                { number: "7d", labelKey: "hero.delivery", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <stat.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    <span className="text-xl md:text-2xl font-bold text-gradient">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                    {t(stat.labelKey)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                onClick={() => onNavigate("contato")}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold rounded-full px-6 py-5 text-sm md:text-base glow-primary animate-pulse-glow"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => onNavigate("portfolio")}
                variant="outline"
                size="lg"
                className="rounded-full px-6 py-5 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold text-sm md:text-base"
              >
                {t("hero.results")}
              </Button>
            </motion.div>

            {/* Micro-commitment */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-sm text-muted-foreground mt-4 flex items-center gap-2 justify-center lg:justify-start"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              {t("hero.commitment")}
            </motion.p>
          </motion.div>

          {/* Profile Image - Larger and less gap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
              
              {/* Increased image size significantly */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-3xl border-gradient p-1">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Gabriel Nunes - Desenvolvedor Web Profissional" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute -top-2 -left-2 w-10 h-10 md:w-12 md:h-12 border-l-2 border-t-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 border-r-2 border-t-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-10 h-10 md:w-12 md:h-12 border-l-2 border-b-2 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 border-r-2 border-b-2 border-primary rounded-br-lg" />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 md:-top-4 md:-right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-lg glass-strong text-xs md:text-sm font-bold border border-green-500/30"
                >
                  <span className="text-green-400">✓</span> {t("hero.webExpert")}
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 px-3 py-1.5 md:px-4 md:py-2 rounded-lg glass-strong text-xs md:text-sm font-bold border border-primary/30"
                >
                  <span className="text-primary">⚡</span> {t("hero.fast")}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <VideoSection />
      </div>
    </motion.div>
  );
};

export default InicioTab;
