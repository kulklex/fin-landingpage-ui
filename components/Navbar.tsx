import React, {useState} from 'react'
import { navLinks } from '../constants'
import {close, logo, menu} from '../assets'
import Image from 'next/image'

type Props = {}

export default function Navbar({}: Props) {
  const [isActive, setIsActive] = useState<string>("Home")
  const [toggle, setToggle] = useState<boolean>(false)


  return (
    <nav className="w-full flex py-6 px-2 lg:px-4 justify-between items-center navbar">
      <Image src={logo} alt="logo" className={`w-[124px] h-[32px]`} />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              isActive === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setIsActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image  src={toggle ? close : menu}  alt="menu"  className="w-[28px] h-[28px] object-contain"  onClick={() => setToggle(!toggle)}/>

        <div  className={`${ !toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li  key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  isActive === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setIsActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}