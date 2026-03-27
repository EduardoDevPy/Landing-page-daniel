import { motion } from 'framer-motion'
import { Smile, Shirt, Zap, Heart, Unlock, Trophy } from 'lucide-react'
import '../styles/Transformacao.css'

const promessas = [
  { icone: Smile, texto: 'Olhar no espelho e se sentir bem com o que vê' },
  { icone: Shirt, texto: 'Vestir aquela roupa sem precisar pensar duas vezes' },
  { icone: Zap, texto: 'Acordar com energia e manter isso o dia todo' },
  { icone: Heart, texto: 'Comer sem culpa e sem briga com a cabeça' },
  { icone: Unlock, texto: 'Sair de vez do ciclo de dieta, recaída e frustração' },
  { icone: Trophy, texto: 'Ter um resultado que fica, não some em 2 meses' },
]

function Transformacao() {
  return (
    <section className="transformacao" id="transformacao">
      <div className="transformacao-container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A transformação que você merece
        </motion.span>
        <motion.h2
          className="transformacao-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Imagine como seria sua vida se…
        </motion.h2>
        <div className="transformacao-grid">
          {promessas.map((item, i) => {
            const Icone = item.icone
            return (
              <motion.div
                key={i}
                className="transformacao-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <span className="transf-icone"><Icone size={28} /></span>
                <p>{item.texto}</p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className="transformacao-fecho"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Isso não tem nada a ver com sorte, genética ou força de vontade infinita.</p>
          <p className="fecho-destaque">Tem a ver com método, acompanhamento e um plano feito pra você.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Transformacao
