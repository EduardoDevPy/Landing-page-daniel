import { motion } from 'framer-motion'
import { RefreshCw, TrendingDown, HelpCircle, Frown, Clock, Brain } from 'lucide-react'
import '../styles/Dor.css'

const dores = [
  { icone: RefreshCw, texto: 'Começa animado e para no meio do caminho' },
  { icone: TrendingDown, texto: 'Perde peso e recupera tudo em pouco tempo' },
  { icone: HelpCircle, texto: 'Não sabe mais em quem confiar ou o que funciona' },
  { icone: Frown, texto: 'Já tentou muita coisa e nenhuma funcionou de verdade' },
  { icone: Clock, texto: 'Não tem tempo pra cozinhar ou seguir cardápio complicado' },
  { icone: Brain, texto: 'Briga com a ansiedade e a compulsão toda semana' },
]

function Dor() {
  return (
    <section className="dor" id="dor">
      <div className="dor-container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Você se reconhece aqui?
        </motion.span>
        <motion.h2
          className="dor-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Se você sente que já tentou de tudo<br />
          <span>e nada funciona</span>
        </motion.h2>
        <div className="dor-grid">
          {dores.map((item, i) => {
            const Icone = item.icone
            return (
              <motion.div
                key={i}
                className="dor-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="dor-icone"><Icone size={28} /></span>
                <p>{item.texto}</p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className="dor-conclusao"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            <strong>O problema não é você.</strong><br />
            Dieta pronta não funciona porque foi feita pra qualquer pessoa, menos pra você.<br />
            Ela ignora sua rotina, seus hábitos, sua ansiedade, sua vida.<br />
            Por isso é tão difícil sustentar. <strong>Até agora.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Dor
