import { Footer, Header } from '../../components'
import FeeSection from './components/FeeSection'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='hero'>
        <Hero />
      </div>
      <div className='fee-sec'>
        <FeeSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
