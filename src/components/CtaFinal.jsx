import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle } from 'lucide-react'
import '../styles/CtaFinal.css'

function CtaFinal({ whatsapp }) {
  return (
    <section className="cta-final">
      <div className="cta-container">
        <motion.h2
          className="cta-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Se você quiser continuar sem resultado,<br />
          <span>sem problema.</span>
        </motion.h2>
        <motion.p
          className="cta-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Mas se você quer parar de dar voltas, seja para emagrecer, ganhar massa ou cuidar da sua saúde.<br />
          <span className="hero-destaque">esse é o momento certo pra começar.</span>
        </motion.p>
        <motion.div
          className="cta-vagas"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <span className="vaga-dot" /> Poucas vagas disponíveis este mês
        </motion.div>
        <motion.a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn-primary cta-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <MessageCircle size={18} /> Quero iniciar meu acompanhamento
        </motion.a>
        <motion.div
          className="cta-garantias"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <span><CheckCircle size={15} /> Vagas limitadas pela agenda</span>
          <span><CheckCircle size={15} /> Atendimento online, em todo o Brasil</span>
          <span><CheckCircle size={15} /> Resposta em até 24h</span>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaFinal
