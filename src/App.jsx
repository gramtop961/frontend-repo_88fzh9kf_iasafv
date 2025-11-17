import Hero from './components/Hero'
import Features from './components/Features'
import Carousel from './components/Carousel'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Top overlay gradient for premium feel */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="select-none text-xl font-extrabold tracking-tight text-white">
          STUDIO<span className="text-gray-400">FLIX</span>
        </div>
        <nav className="hidden gap-6 text-sm text-gray-400 sm:flex">
          {['Home','Browse','Plans','Sign In'].map((item) => (
            <a key={item} href="#" className="transition hover:text-white">{item}</a>
          ))}
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />
        <Carousel />
        <Pricing />
      </main>

      <Footer />
    </div>
  )
}

export default App
