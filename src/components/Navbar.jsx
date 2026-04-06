import { useState, useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

function Navbar({ whatsapp }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo Daniel Henrique" className="logo-icone" />
          <span className="logo-nome">Daniel Henrique</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#metodo" onClick={() => setMenuOpen(false)}>Método</a></li>
          <li><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a></li>
          <li><a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a></li>
          <li>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="navbar-cta">
              <MessageCircle size={16} /> Quero começar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar