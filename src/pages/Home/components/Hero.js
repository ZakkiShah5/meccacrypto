import logo from '../../../assets/logo.png'

const Hero = () => {
  return (
    <div className='mx-auto max-w-screen-lg font-dmSans flex justify-center flex-col text-center items-center h-[100%]'>
      <div className='flex items-center mb-5'>
        <img className='w-[125px] md:w-[381px]' src={logo} alt='logo' />
        <h1 className='text-3xl font-bold'>CRYPTO</h1>
      </div>
      <div className='w-[90%] font-poppins'>
        <p>MECA Crypto is an innovative platform designed to provide ecosystem participants with unlimited and perpetual monetization opportunities.The space combines blockchain technology with a sponsorship reward system to help participants gain sustainable value in a transparent and fair manner. Experience a new blockchain-based economic model with MECA Crypto today and explore a world of endless possibilities.</p>
      </div>
    </div>
  )
}

export default Hero
