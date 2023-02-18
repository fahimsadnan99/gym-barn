import React, { useState } from 'react'
import Style from "./navbar.module.css"
import Link from 'next/link'
import {AiOutlineMenu} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"


const menuList = ["Home", "Program","Blog","About Us","Login"]
const Navbar = () => {
    const [menuIndex,setMenuIndex] = useState(0)
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={Style.navbarWrapper}>
            <div className={Style.navbarItemWrapper}>
                <div className={`space-x-1 ${Style.navbarBrandWrapper}`}>
                  <span>Gym</span>
                  <span>baran</span>
                </div>

<div className={Style.navbarToggleIcon } onClick={()=> setIsOpen(!isOpen)}>
    {isOpen ?  ( <RxCross2></RxCross2>) : (<AiOutlineMenu></AiOutlineMenu>)}

    
</div>
                <ul className={`${Style.navbarMenuWrapper} ${Style.navbarResponsiveMenu} ${isOpen ? "top-24" : "top-[-450px]"}`}>
                    {menuList?.map((menu,index)=>{
                        return (
                        
                        <li >
                        <Link onClick={()=> setMenuIndex(index)}  className={`${Style.menu} ${menuIndex == index && Style.menuSelect}`}   key={index} href={`/#${menu == "About Us" ? menu.split(" ")[0] : menu} `}>{menu}</Link></li>)
                    })}
                </ul>
            </div>
    </div>
  )
}

export default Navbar