import { motion } from 'framer-motion'
import { Leaf, MessageCircle, CheckCircle } from 'lucide-react'
import nutriDaniel from '../assets/images/nutriDaniel.jpeg'
import '../styles/Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

function Hero({ whatsapp }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" />
      <div className="hero-container">
        <div className="hero-layout">
          <div className="hero-content">
            <motion.span className="section-tag" {...fadeUp(0.1)}>
              <Leaf size={14} /> Nutrição Personalizada
            </motion.span>
            <motion.h1 className="hero-titulo" {...fadeUp(0.25)}>
              Cansado de tentar evoluir, se esforçar, e mesmo assim<br />
              <span className="hero-destaque">não ver resultados?</span>
            </motion.h1>
            <div className="hero-foto-mobile">
              <motion.img src={nutriDaniel} alt="Daniel Henrique, Nutricionista" className="hero-img" {...fadeUp(0.35)} />
            </div>
            <motion.p className="hero-subtitulo" {...fadeUp(0.4)}>
              Seja qual for o seu objetivo, você não precisa de mais uma dieta genérica. Precisa de um <strong className="hero-destaque">plano feito pra você</strong>, com acompanhamento de verdade e um caminho claro até o resultado.
            </motion.p>
            <motion.div className="hero-btns" {...fadeUp(0.55)}>
              <motion.a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={18} /> Quero meu plano personalizado
              </motion.a>
              <a href="#metodo" className="btn-outline">
                Como funciona →
              </a>
            </motion.div>
            <motion.div className="hero-badges" {...fadeUp(0.7)}>
              <span><CheckCircle size={15} /> Atendimento online e presencial </span>
              <span><CheckCircle size={15} /> Plano 100% individualizado</span>
              <span><CheckCircle size={15} /> Suporte contínuo</span>
            </motion.div>
          </div>
          <motion.div
            className="hero-foto-desktop"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <img src={nutriDaniel} alt="Daniel Henrique, Nutricionista" className="hero-img" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
