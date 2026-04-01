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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default QuemSou
