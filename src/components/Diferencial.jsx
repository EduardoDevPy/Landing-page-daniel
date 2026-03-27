import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import '../styles/Diferencial.css'

function Diferencial() {
  return (
    <section className="diferencial">
      <div className="diferencial-container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Por que funciona?
        </motion.span>
        <motion.h2
          className="diferencial-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Eu não entrego dieta.<br />
          <span>Eu entrego estratégia personalizada + acompanhamento real.</span>
        </motion.h2>
        <div className="diferencial-grid">
          <motion.div
            className="diferencial-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <X size={20} className="icon-no" />
            <h4>Dieta comum</h4>
            <ul>
              <li>Genérica para qualquer pessoa</li>
              <li>Sem acompanhamento</li>
              <li>Não considera sua rotina</li>
              <li>Resultado temporário</li>
            </ul>
          </motion.div>
          <motion.div
            className="diferencial-vs"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            VS
          </motion.div>
          <motion.div
            className="diferencial-card destaque"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Check size={20} className="icon-yes" />
            <h4>Meu acompanhamento</h4>
            <ul>
              <li>Analisado individualmente</li>
              <li>Suporte direto e contínuo</li>
              <li>Adaptado à sua realidade</li>
              <li>Resultado sustentável</li>
            </ul>
          </motion.div>
        </div>
        <motion.p
          className="diferencial-fecho"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Cada paciente é analisado individualmente: metabolismo, rotina, preferências, dificuldades e objetivos.<br />
          <strong>Nada genérico. Nada automático. Tudo pensado para você evoluir.</strong>
        </motion.p>
      </div>
    </section>
  )
}

export default Diferencial
