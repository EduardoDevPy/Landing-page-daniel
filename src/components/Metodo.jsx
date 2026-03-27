import { motion } from 'framer-motion'
import { ClipboardList, Zap, RefreshCw, MessageCircle, Target } from 'lucide-react'
import '../styles/Metodo.css'

const itens = [
  { icone: ClipboardList, titulo: 'Plano feito do zero pra você', desc: 'Nada de cardápio genérico. Tudo montado com base nos seus objetivos, sua rotina e o que você gosta de comer' },
  { icone: Zap, titulo: 'Simples de colocar em prática', desc: 'Sem receita impossível, sem sofrimento. Estratégias que cabem na sua vida do jeito que ela é' },
  { icone: RefreshCw, titulo: 'Ajustes ao longo do caminho', desc: 'O plano muda conforme você evolui. Nada fica travado se a vida mudar' },
  { icone: MessageCircle, titulo: 'Acesso direto ao nutricionista', desc: 'Tem dúvida? Manda mensagem. Sem fila, sem esperar semanas pra falar com alguém' },
  { icone: Target, titulo: 'Você sempre sabe onde está', desc: 'Cada etapa tem um objetivo claro. Sem aquela sensação de estar fazendo tudo certo e não vendo para onde vai' },
]

function Metodo({ whatsapp }) {
  return (
    <section className="metodo" id="metodo">
      <div className="metodo-container">
        <motion.div
          className="metodo-texto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">O Método</span>
          <h2 className="metodo-titulo">
            Um acompanhamento que se encaixa na <span>sua vida</span>, não o contrário
          </h2>
          <p className="metodo-sub">
            Pensado pra quem tem rotina corrida, vida social e mil coisas acontecendo ao mesmo tempo. Sem fórmula mágica, sem promessa vazia.
          </p>
          <motion.a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={18} /> Quero meu acompanhamento
          </motion.a>
        </motion.div>
        <div className="metodo-lista">
          {itens.map((item, i) => {
            const Icone = item.icone
            return (
              <motion.div
                key={i}
                className="metodo-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="metodo-item-icone"><Icone size={22} /></div>
                <div>
                  <h4>{item.titulo}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Metodo
