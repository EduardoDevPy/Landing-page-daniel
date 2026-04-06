import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Dor from './components/Dor.jsx'
import Metodo from './components/Metodo.jsx'
import Diferencial from './components/Diferencial.jsx'
import Transformacao from './components/Transformacao.jsx'
import QuemSou from './components/QuemSou.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Planos from './components/Planos.jsx'
import CtaFinal from './components/CtaFinal.jsx'
import Footer from './components/Footer.jsx'
import WhatsappButton from './components/WhatsappButton.jsx'

const WHATSAPP_LINK = 'https://wa.me/1999815790?text=Ol%C3%A1%2C%20Daniel!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento%20nutricional.'

function App() {
  return (
    <>
      <Navbar whatsapp={WHATSAPP_LINK} />
      <Hero whatsapp={WHATSAPP_LINK} />
      <Dor />
      <Metodo whatsapp={WHATSAPP_LINK} />
      <Diferencial />
      <Planos />
      <Transformacao />
      <QuemSou />
      <Depoimentos />
      <CtaFinal whatsapp={WHATSAPP_LINK} />
      <Footer whatsapp={WHATSAPP_LINK} />
      <WhatsappButton whatsapp={WHATSAPP_LINK} />
    </>
  )
}

export default App