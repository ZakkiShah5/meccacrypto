import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import '../App.css'

const Header = () => {
  return (
    <header className="font-poppins absolute left-1/2 top-10  -translate-x-1/2  w-[100%] max-w-screen-lg py-4 rounded-lg px-4 mx-auto flex justify-between items-center">
        <Link to='/' >
           <img src={logo} className="w-36" alt="logo" />
        </Link>
        <nav className="flex font-light justify-between items-center gap-7">
            <Link className="active" to='/'>Home</Link>
            <Link to='/how'>How</Link>
            <Link to='/my_dashboard'>My Dashboard</Link>
            <Link to='/my_crew'>My CREW</Link>
            <Link to='/org_chart'>Organization Chart</Link>
        </nav>
        <div className="normal-btn">
            <button className="rounded bg-magenta-600 font-semibold p-3">Wallet Connect</button>
        </div>
    </header>
)
}

export default Header