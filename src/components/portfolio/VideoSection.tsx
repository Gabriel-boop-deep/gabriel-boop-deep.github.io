import { motion } from "framer-motion";
import { Youtube, Play, Trophy, Rocket, Monitor, Video } from "lucide-react";

const videos = [
  {
    title: "Seu Próximo Nível",
    subtitle: "Não vem do treino",
    embedUrl: "https://www.youtube.com/embed/bvRoZgPVwdM",
    icon: Rocket,
    accent: "primary",
  },
  {
    title: "Conheça o FinDash",
    subtitle: "Dashboard Financeiro",
    embedUrl: "https://www.youtube.com/embed/_06h9hCnJq8",
    icon: Monitor,
    accent: "yellow",
  },
  {
    title: "O GABTUBE",
    subtitle: "Plataforma de Vídeos",
    embedUrl: "https://www.youtube.com/embed/2HLG1LC1-ik",
    icon: Video,
    accent: "amber",
  },
  {
    title: "Conheça Meu Trabalho",
    subtitle: "Desenvolvimento Web & IA",
    embedUrl: "https://www.youtube.com/embed/fGLR5h1n2Fk",
    icon: Play,
    accent: "primary",
  },
  {
    title: "Velotech Bike Yourself",
    subtitle: "Case de Sucesso",
    embedUrl: "https://www.youtube.com/embed/V7wFONGVRew",
    icon: Trophy,
    accent: "yellow",
    badge: "CASE DE SUCESSO",
  },
  {
    title: "Velotech Continuação",
    subtitle: "Parte 2 do Projeto",
    embedUrl: "https://www.youtube.com/embed/IE0kMwtyOfg",
    icon: Play,
    accent: "amber",
    badge: "PARTE 2",
  },
];

const accentStyles: Record<string, { border: string; glow: string; badge: string; text: string }> = {
  primary: {
    border: "border-primary/30",
    glow: "0 0 30px hsl(var(--primary) / 0.2)",
    badge: "bg-gradient-primary text-primary-foreground",
    text: "text-primary",
  },
  yellow: {
    border: "border-yellow-500/30",
    glow: "0 0 30px rgba(234, 179, 8, 0.2)",
    badge: "bg-gradient-to-r from-yellow-500 to-amber-600 text-black",
    text: "text-yellow-500",
  },
  amber: {
    border: "border-amber-500/30",
    glow: "0 0 30px rgba(245, 158, 11, 0.2)",
    badge: "bg-gradient-to-r from-amber-600 to-orange-600 text-black",
    text: "text-amber-500",
  },
};

const VideoSection = () => {
  return (
    <section id="video" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conteúdo em <span className="text-gradient">Vídeo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compartilhando conhecimento e experiências em desenvolvimento web e IA
          </p>
        </motion.div>

        {/* Featured row - 3 new videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {videos.slice(0, 3).map((video, index) => {
            const style = accentStyles[video.accent];
            return (
              <motion.div
                key={video.embedUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`glass rounded-3xl p-5 relative overflow-hidden border ${style.border}`}
              >
                {video.badge && (
                  <div className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.badge} text-[10px] font-bold`}>
                    <video.icon className="w-3 h-3" />
                    {video.badge}
                  </div>
                )}

                <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: style.glow }}>
                  <div className="aspect-video bg-muted">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-1">
                    <span className={style.text}>{video.title}</span>
                  </h3>
                  <p className="text-muted-foreground text-xs">{video.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Second row - existing videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(3).map((video, index) => {
            const style = accentStyles[video.accent];
            return (
              <motion.div
                key={video.embedUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`glass rounded-3xl p-5 relative overflow-hidden border ${style.border}`}
              >
                {video.badge && (
                  <div className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.badge} text-[10px] font-bold`}>
                    <video.icon className="w-3 h-3" />
                    {video.badge}
                  </div>
                )}

                <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: style.glow }}>
                  <div className="aspect-video bg-muted">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-1">
                    <span className={style.text}>{video.title}</span>
                  </h3>
                  <p className="text-muted-foreground text-xs">{video.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.youtube.com/@IdeIA-f7l5i"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-full font-semibold text-primary-foreground text-sm"
          >
            <Youtube className="w-5 h-5" />
            Ver Canal no YouTube
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
