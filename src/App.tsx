import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Greeting } from './components/Greeting'
import { Identity } from './components/Identity'
import { StyleGallery } from './components/StyleGallery'
import { Menu } from './components/Menu'
import { Salon } from './components/Salon'
import { Reservation } from './components/Reservation'
import { Access } from './components/Access'
import { Footer } from './components/Footer'
import { MobileCta } from './components/MobileCta'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Greeting />
        <Identity />
        <StyleGallery />
        <Menu />
        <Salon />
        <Reservation />
        <Access />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
