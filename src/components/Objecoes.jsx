import { motion } from 'framer-motion'
import '../styles/Objecoes.css'

const objecoes = [
  {
    duvida: '"Não tenho tempo pra seguir dieta nenhuma"',
    resposta: 'O plano é montado pra caber na sua rotina do jeito que ela é. Sem receita complicada, sem horas na cozinha.'
  },
  {
    duvida: '"Minha disciplina é péssima"',
    resposta: 'Você não precisa ser perfeito. Com acompanhamento de verdade, quando você trava, tem alguém pra te ajudar a retomar.'
  },
  {
    duvida: '"Já tentei tanta coisa e nada funcionou"',
    resposta: 'O que não funcionou foi dieta genérica. Você nunca teve um plano feito só pra você, com alguém acompanhando de perto.'
  },
  {
    duvida: '"Vale a pena o investimento?"',
    resposta: 'Pensa em quanto você já gastou em dieta, suplemento e produto que não deu em nada. Um acompanhamento de verdade custa menos e entrega resultado real.'
  },
]

function Objecoes() {
  return (
    <section className="objecoes">
      <div className="objecoes-container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Suas dúvidas respondidas
        </motion.span>
        <motion.h2
          className="objecoes-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Talvez você esteja pensando isso agora
        </motion.h2>
        <div className="objecoes-lista">
          {objecoes.map((item, i) => (
            <motion.div
              key={i}
              className="objecao-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="objecao-duvida">{item.duvida}</p>
              <p className="objecao-resposta">→ {item.resposta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objecoes
