import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AppList } from './components/AppList'
import { SubmitSection } from './components/SubmitSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <Header />
      <main>
        <Hero />
        <AppList />
        <SubmitSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
