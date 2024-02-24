import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Preloader } from './components/Preloader'

function App() {

  return (
    <>
      <Preloader />
      <div className="page-wrap">
        <Header />
        <Main />
        <Footer />
      </div>
      <div id="cursor"></div>
    </>
  )
}

export default App
