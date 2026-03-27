import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import '../styles/Depoimentos.css'

const depoimentos = [
  {
    nome: 'Ana Lima',
    texto: 'Em 3 meses consegui o que não consegui em 3 anos tentando sozinha. O acompanhamento muda tudo!',
    estrelas: 5,
    resultado: '- 8kg em 90 dias'
  },
  {
    nome: 'Carlos Mendes',
    texto: 'Nunca imaginei que conseguiria manter uma alimentação saudável com minha rotina de viagens. O plano se adaptou perfeitamente.',
    estrelas: 5,
    resultado: 'Mais disposição e energia'
  },
  {
    nome: 'Fernanda Rocha',
    texto: 'Parei de fazer dieta maluca e finalmente entendi como me alimentar de verdade. Sem sofrimento, sem culpa.',
    estrelas: 5,
    resultado: 'Relação saudável com a comida'
  },
]

function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="depoimentos-container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resultados reais
        </motion.span>
        <motion.h2
          className="depoimentos-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Quem já viveu a transformação
        </motion.h2>
        <div className="depoimentos-grid">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              className="depoimento-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="dep-estrelas">
                {Array.from({ length: dep.estrelas }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="dep-texto">"{dep.texto}"</p>
              <div className="dep-rodape">
                <div className="dep-avatar">{dep.nome.charAt(0)}</div>
                <div>
                  <strong>{dep.nome}</strong>
                  <span className="dep-resultado">{dep.resultado}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="depoimentos-nota">
          * Resultados podem variar de acordo com cada organismo e adesão ao plano.
        </p>
      </div>
    </section>
  )
}

export default Depoimentos
