import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { companies } from '../data'
import logo from '../assets/images/logo.svg'

const Footer = () => {
  const fullYear = new Date().getFullYear()
  return (
    <div className="w-full flex flex-col">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-20 items-center justify-between lg:px-[310px] px-5">
        {companies.map((item) => (
          <img src={item.image} alt={item.alt} key={item.alt} />
        ))}
      </div>
      <div className="w-full mt-[100px] flex lg:flex-row flex-col items-start justify-between lg:gap-0 gap-10 lg:px-[310px] px-5">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[100px]" />
          <span className="font-Source text-lg font-light text-secondary max-w-[310px] mt-3">
            Blandit enim pretium purus morbi non tincidunt auctor eu molestie.
          </span>
          <div className="flex items-center gap-5 mt-5">
            <FaFacebook className="text-secondary cursor-pointer" />
            <FaInstagram className="text-secondary cursor-pointer" />
            <FaTwitter className="text-secondary cursor-pointer" />
            <FaYoutube className="text-secondary cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#" className="uppercase text-secondary font-Source text-lg tracking-wider">
            Home
          </a>
          <a href="#" className="uppercase text-secondary font-Source text-lg tracking-wider">
            About us
          </a>
          <a href="#" className="uppercase text-secondary font-Source text-lg tracking-wider">
            Services
          </a>
          <a href="#" className="uppercase text-secondary font-Source text-lg tracking-wider">
            Help & Support
          </a>
          <a href="#" className="uppercase text-secondary font-Source text-lg tracking-wider">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">address 1, location, 123</span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">address 1, location, 123</span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">address 1, location, 123</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">YOurinfo@mail.com</span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">address, location, 123</span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">111 222 333 444 555</span>
        </div>
      </div>
      <div className="w-full h-[70px] mt-[100px] flex items-center justify-center border-t border-border">
        <span className="font-Source text-lg text-secondary font-light">© {fullYear} Kofee. Developed by Me</span>
      </div>
    </div>
  )
}

export default Footer
