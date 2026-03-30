import { motion } from 'framer-motion'
import { RefreshCw, TrendingDown, HelpCircle, Dumbbell, Clock, Brain } from 'lucide-react'
import '../styles/Dor.css'

const dores = [
  { icone: RefreshCw, texto: 'Começa animado e para no meio do caminho' },
  { icone: TrendingDown, texto: 'Treina pesado mas não vê o músculo crescer' },
  { icone: HelpCircle, texto: 'Não sabe mais em quem confiar ou o que de fato funciona' },
  { icone: Dumbbell, texto: 'Quer emagrecer sem perder a massa que tanto batalhou' },
  { icone: Clock, texto: 'Não tem tempo pra cozinhar ou seguir cardápio complicado' },
  { icone: Brain, texto: 'Sabe que precisa cuidar da saúde, mas não sabe por onde começar' },
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
          Você sabe o que quer alcançar,<br />
          <span>mas o resultado não aparece</span>
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
            <span className="hero-destaque">O problema não é você.</span><br />
            Dieta pronta não funciona porque foi feita pra qualquer pessoa, menos pra você.<br />
            Ela ignora sua rotina, seus objetivos, seu treino, sua vida.<br />
            Por isso é tão difícil evoluir. <span className="hero-destaque">Até agora.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Dor
