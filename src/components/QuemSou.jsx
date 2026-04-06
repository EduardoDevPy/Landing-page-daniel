import { motion } from 'framer-motion'
import nutriDaniel from '../assets/images/nutriDaniel.jpeg'
import '../styles/QuemSou.css'

function QuemSou() {
  return (
    <section className="quem-sou" id="quem-sou">
      <div className="quem-sou-container">
        <motion.div
          className="quem-sou-foto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img src={nutriDaniel} alt="Daniel Henrique, Nutricionista" />
        </motion.div>

        <motion.div
          className="quem-sou-conteudo"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <span className="section-tag">Quem sou</span>
          <h2 className="quem-sou-titulo">
            Daniel Henrique<br />
            <span>Nutricionista</span>
          </h2>
          <p>
            Meu nome é Daniel Henrique, sou nutricionista e apaixonado por transformar vidas através da alimentação. Minha trajetória na nutrição começou com o propósito de ir além do básico, não apenas montar dietas, mas criar estratégias personalizadas que realmente funcionam na rotina de cada pessoa.
          </p>
          <p>
            Sou técnico em nutrição e dietética, graduado em nutrição e pós graduado em emagrecimento, hipertrofia e recomposição corporal avançada. Minhas especializações são emagrecimento, hipertrofia, comportamento alimentar, performance e qualidade de vida. Ao longo da minha carreira, venho me aprofundando constantemente em métodos atualizados e baseados em ciência para oferecer resultados reais e sustentáveis.
          </p>
          <p>
            Já ajudei mais de 1.000 vidas a conquistarem resultados como emagrecimento definitivo, melhora da autoestima, mais energia no dia a dia e uma relação mais equilibrada com a comida, sem dietas restritivas e sem efeito sanfona.
          </p>
          <p>
            Acredito que a nutrição não deve ser um peso, e sim uma ferramenta de liberdade. Meu propósito é mostrar que é possível emagrecer e ter resultados sem sofrimento, sem radicalismos e sem abrir mão da sua vida social.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default QuemSou
