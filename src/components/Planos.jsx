import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Planos.css'

const planos = [
  {
    nome: 'Basic',
    de: 'R$200,00',
    por: 'R$179,90',
    parcelas: 'ou 2x s/ juros',
    consultas: '1 consulta',
    dias: '30 dias de acompanhamento',
    destaque: false,
    itens: [
      'Plano alimentar individualizado',
      'Suporte via WhatsApp',
      'Avaliação física',
      'Orientação de suplementação',
    ],
  },
  {
    nome: 'Platinum',
    de: 'R$600,00',
    por: 'R$499,90',
    parcelas: 'ou 4x s/ juros',
    consultas: '3 consultas',
    dias: '90 dias de acompanhamento',
    destaque: false,
    itens: [
      'Plano alimentar individualizado',
      'Suporte via WhatsApp',
      'Avaliação física',
      'Orientação de suplementação',
    ],
  },
  {
    nome: 'Black',
    de: 'R$1.200,00',
    por: 'R$899,90',
    parcelas: 'ou 4x s/ juros',
    consultas: '6 consultas',
    dias: '180 dias de acompanhamento',
    destaque: true,
    itens: [
      'Plano alimentar individualizado',
      'Suporte via WhatsApp',
      'Avaliação física',
      'Orientação de suplementação',
    ],
  },
]

function Planos({ whatsapp }) {
  const gridRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    el.scrollLeft = 0
    setCanPrev(false)
    setCanNext(el.scrollWidth > el.clientWidth)
  }, [])

  function handleScroll() {
    const el = gridRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
    const index = Math.round(el.scrollLeft / (el.clientWidth * 0.68))
    setActiveIndex(Math.min(index, planos.length - 1))
  }

  function scroll(dir) {
    const el = gridRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  function scrollToIndex(i) {
    const el = gridRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth * 0.68, behavior: 'smooth' })
  }

  return (
    <section className="planos" id="planos">
      <div className="planos-container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Planos de consulta
        </motion.span>
        <motion.h2
          className="planos-titulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Escolha o plano ideal<br />
          <span>para o seu objetivo</span>
        </motion.h2>
        <div className="planos-grid" ref={gridRef} onScroll={handleScroll}>
          {planos.map((plano, i) => (
            <motion.div
              key={plano.nome}
              className={`plano-card${plano.destaque ? ' destaque' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plano.destaque && (
                <div className="plano-badge">
                  <Star size={13} /> Mais completo
                </div>
              )}
              <h3 className="plano-nome">Plano {plano.nome}</h3>
              <div className="plano-preco">
                <span className="plano-de">{plano.de}</span>
                <span className="plano-por">{plano.por}</span>
                <span className="plano-vista">à vista</span>
                <span className="plano-parcelas">{plano.parcelas}</span>
              </div>
              <div className="plano-consultas">
                <strong>{plano.consultas}</strong>
                <span>{plano.dias}</span>
              </div>
              <ul className="plano-itens">
                {plano.itens.map((item) => (
                  <li key={item}>
                    <CheckCircle size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className={plano.destaque ? 'btn-primary plano-btn' : 'btn-plano-outline'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={16} /> Quero este plano
              </motion.a>
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
            {planos.map((_, i) => (
              <button
                key={i}
                className={`carrossel-dot${activeIndex === i ? ' ativo' : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para plano ${i + 1}`}
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
      </div>
    </section>
  )
}

export default Planos
