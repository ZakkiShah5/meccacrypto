import logo from '../assets/logo.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine  } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className='bg-[#09051C]'>
      <section className='md:flex justify-evenly mx-auto max-w-screen-lg'>
        <div className='md:flex flex-1 gap-5 border-r-2 pt-16 pb-10 px-10 border-[#23262F]'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-36 mb-5 md:mb-0' />
          </Link>
          <div className='flex flex-col text-sm gap-3 uppercase text-light-500'>
            <Link to='/'>Home</Link>
            <Link to='/'>How</Link>
            <Link to='/'>Dashboard</Link>
            <Link to='/'>My Crew</Link>
            <Link to='/'>Organization Chart</Link>
          </div>
        </div>
        <div className='flex-1 text-light-500 flex border-r-2 md:pt-16 pb-10 px-10 border-[#23262F] flex-col gap-4 md:gap-10 justify-center'>
          <div className=''>
            <h4 className='text-xs text-start font-semibold text-white'>CONTACT</h4>
          </div>

          <div className='text-sm flex gap-3 flex-col'>
            <p>43252 Borer Mountains</p>
            <p>Zackerychester</p>
            <p>Bahamas</p>
            <p>732-528-4945</p>
          </div>
        </div>

        <div className='flex-1 flex flex-col gap-4 md:gap-10 md:pt-16 pb-10 px-10'>
          <h4 className='text-xs font-semibold text-white'>NEWSLETTER</h4>
          <div className='flex flex-col gap-3'>
            <p>
              Subscribe our newsletter to get more free design course and
              resource
            </p>

            <div className='flex w-80 justify-between pr-2 rounded-full border-[#23262F] border-2 items-center mt-5'>
              <input
                className='bg-transparent py-2 pl-2'
                type='text'
                placeholder='Enter your email'
              />
              <div className='w-8 cursor-pointer h-8 flex justify-center items-center bg-magenta-50 rounded-full'>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='md:flex justify-between px-10 md:px-0 border-t-2 border-[#23262F] py-5 mx-auto max-w-screen-lg'>
        <p className=' text-light-500 text-xs'>Copyright © 2021 UI8 LLC. All rights reserved</p>
        <div className='text-light-500 mt-2 md:mt-0 flex gap-2'>
          <Link to=''><RiFacebookCircleLine/></Link>
          <Link to=''><RiTwitterLine/></Link>
          <Link to=''><RiInstagramLine/></Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
