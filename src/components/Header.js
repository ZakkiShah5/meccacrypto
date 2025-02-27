import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";
import { FaBars, FaXmark  } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="font-poppins absolute left-1/2 top-0 md:top-10 -translate-x-1/2 w-[100%] max-w-screen-lg px-4 md:rounded-lg py-2 mx-auto flex justify-between items-center shadow-md z-50">
      <Link to="/">
        <img src={logo} className="w-28 md:w-36" alt="logo" />
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex font-light justify-between items-center gap-7">
        <Link className={location.pathname === "/" ? "active text-magenta-600 font-semibold" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/how" ? "text-magenta-600 font-semibold" : ""} to="/how">How</Link>
        <Link className={location.pathname === "/my_dashboard" ? "text-magenta-600 font-semibold" : ""} to="/my_dashboard">My Dashboard</Link>
        <Link className={location.pathname === "/my_crew" ? "text-magenta-600 font-semibold" : ""} to="/my_crew">My CREW</Link>
        <Link className={location.pathname === "/org_chart" ? "text-magenta-600 font-semibold" : ""} to="/org_chart">Organization Chart</Link>
      </nav>
      
      {/* Mobile Menu Toggle */}
      <div className="flex gap-3 items-center">
        <button className="rounded bg-magenta-600 text-white font-semibold px-4 py-2">Wallet Connect</button>
        <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="p-6 absolute top-[58px] left-0 w-full shadow-lg flex flex-col bg-[#1B1B1E] gap-4 md:hidden">
          <Link onClick={toggleMobileMenu} className={location.pathname === "/" ? "active w-fit text-magenta-600 font-semibold" : ""} to="/">Home</Link>
          <Link onClick={toggleMobileMenu} className={location.pathname === "/how" ? "active w-fit text-magenta-600 font-semibold" : ""} to="/how">How</Link>
          <Link onClick={toggleMobileMenu} className={location.pathname === "/my_dashboard" ? "text-magenta-600 active w-fit font-semibold" : ""} to="/my_dashboard">My Dashboard</Link>
          <Link onClick={toggleMobileMenu} className={location.pathname === "/my_crew" ? "text-magenta-600 active w-fit font-semibold" : ""} to="/my_crew">My CREW</Link>
          <Link onClick={toggleMobileMenu} className={location.pathname === "/org_chart" ? "text-magenta-600 active w-fit font-semibold" : ""} to="/org_chart">Organization Chart</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
