import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import Social from "../Social";
import Image from "../shared/Image";
import ThemeToggle from "../shared/ThemeToggle";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";


const Navbar = () => {
  return (
    <header className="dark:text-white py-4  z-50 relative">
      <div className="custom-container flex items-center justify-between">
        <div className="lg:hidden ">
          <MobileNav />
        </div>
        <div className="max-lg:hidden">
          <Social />
        </div>
        {/* Desctop links */}
        <nav className="hidden lg:flex flex-col gap-4 items-center">
          <div className="">
            <div className="ms-auto">
              <Link to="/" className='!w-40'>
                <Image src={logo} alt="logo" className="!w-40" />
              </Link>
            </div>
          </div>
          <NavLinks />
        </nav>
        {/* Theme Toggle */}
        <div className="max-lg:hidden">
          <ThemeToggle />
        </div>
        {/* Mobile Logo */}
        <div className="ms-auto lg:hidden">
          <Link to="/" className='w-30'>
            <Image src={logo} alt="logo" className="!w-30" />
          </Link>
        </div>
      </div>
    </header >
  );
};

export default Navbar;