import { IoMenu } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'

import logo from '../assets/images/logo.svg'
import { navItems } from '../data'

const Navbar = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-transparent border-b border-border lg:px-[310px] px-5 flex items-center justify-between h-[40px]">
        <span className="text-secondary font-Source">Tired ? Let’s have a cup of coffee.</span>
        <span className="text-secondary font-Source">Call us: 123 456 789 241</span>
        <span className="text-secondary font-Source lg:block hidden">Our location: Your location, Country</span>
      </div>
      <div className="w-full flex items-center justify-between h-[73px] lg:px-[310px] px-5">
        <img src={logo} alt="logo" />
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <a href={item.path} key={item.title} className={`font-Source text-lg ${item.active ? 'text-primary' : 'text-secondary'}`}>
              {item.title}
            </a>
          ))}
          <CiSearch className="cursor-pointer text-secondary" />
        </div>
        <div className="block lg:hidden">
          <IoMenu size={35} className="cursor-pointer text-secondary" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
