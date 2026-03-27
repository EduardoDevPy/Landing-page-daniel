import { Salad } from 'lucide-react'
import '../styles/Footer.css'

function Footer({ whatsapp }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Salad size={22} />
          <span>Seu Nutricionista</span>
        </div>
        <div className="footer-links">
          <a href="#metodo">Método</a>
          <a href="#transformacao">Resultados</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <p className="footer-legal">
          © {new Date().getFullYear()} · Atendimento online para todo o Brasil
        </p>
      </div>
    </footer>
  )
}

export default Footer