import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import '../styles/Objecoes.css'

const objecoes = [
  {
    duvida: '"Não tenho tempo pra seguir dieta nenhuma"',
    resposta: 'O plano é montado pra caber na sua rotina do jeito que ela é. Sem receita complicada, sem horas na cozinha.'
  },
  {
    duvida: '"Já treino há meses e não estou evoluindo"',
    resposta: 'Treino sem nutrição adequada é esforço desperdiçado. A alimentação certa potencializa seu treino e faz o músculo crescer de verdade.'
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
  const [aberto, setAberto] = useState(null)

  function toggle(i) {
    setAberto(aberto === i ? null : i)
  }

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
              className={`objecao-item${aberto === i ? ' aberto' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <button className="objecao-toggle" onClick={() => toggle(i)}>
                <span className="objecao-duvida">{item.duvida}</span>
                <ChevronDown size={20} className="objecao-chevron" />
              </button>
              <AnimatePresence initial={false}>
                {aberto === i && (
                  <motion.p
                    className="objecao-resposta"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    → {item.resposta}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objecoes
