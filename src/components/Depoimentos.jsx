import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const gridRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  function handleScroll() {
    const el = gridRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActiveIndex(index)
  }

  function scroll(dir) {
    const el = gridRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  function scrollToIndex(i) {
    const el = gridRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth * 0.85, behavior: 'smooth' })
  }

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
        <div className="depoimentos-grid" ref={gridRef} onScroll={handleScroll}>
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
        <div className="carrossel-nav">
          <button
            className="carrossel-btn"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="carrossel-dots">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                className={`carrossel-dot${activeIndex === i ? ' ativo' : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="carrossel-btn"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <p className="depoimentos-nota">
          * Resultados podem variar de acordo com cada organismo e adesão ao plano.
        </p>
      </div>
    </section>
  )
}

export default Depoimentos
