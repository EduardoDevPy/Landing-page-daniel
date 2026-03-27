import logo from '../assets/images/logo.png'
import '../styles/Footer.css'

function Footer({ whatsapp }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo Daniel Henrique" style={{ height: '36px', width: 'auto' }} />
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