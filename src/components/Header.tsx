import React from 'react'
import logo from "../../public/images/logo.svg"
import NavMenu from './NavMenu'
import NavMenuLink from "./NavMenuLink.jsx"
import SideBar from "./SideBar.js";
import { useState } from "react";

export interface NavMenuInfo {
  title: string,
  subMenuList: Array<{
    title: string,
    link: string
  }>
}


export default function Header() {
  const [open, setOpen] = useState(false);
  // En este array se agregan los titulos de los Drop down menus en la navBar //
  const navMenuInfo: NavMenuInfo[] = [
    {
      title: "Tipos", 
      subMenuList: [{title: "Sub Tipo1", link:"https://www.google.cl/"}, {title: "Sub Tipo2", link: ""}, {title: "Sub Tipo3", link: ""}, {title: "Sub Tipo4", link: ""}]   
    }, 
    {
      title: "Marcas", 
      subMenuList: [{title: "Sub Marca1", link:"https://www.google.cl/"}, {title: "Sub Marca2", link: ""}, {title: "Sub Marca3", link: ""}, {title: "Sub Marca4", link: ""}] 
    } 
  ]

  // En este array se agregan los titulos de los NavMenuLink en la navBar //

  const navMenuLinks= [ "Link1", "Link2","Link3"]
  return (
    <header>
      <div className='flex py-5 px-3'>
        <div className='flex item-center pt-3'>
          <img src={logo} alt="Logo" className='bg-white'/>
        </div>
        <div className='flex-grow flex items-center z-20'>
          { navMenuInfo.map(el => (
            <NavMenu title={el.title} subMenuList={el.subMenuList}/>
          ))} 
           { navMenuLinks.map(linkTitle => (
            <NavMenuLink linkTitle={linkTitle} />
           ))}
        </div>
        <div className='flex items-center'>
        <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <img className='block lg:hidden' src='images/icon-menu.svg' alt='Navigation Menu' />
          </button>
          <SideBar open={open} setOpen={setOpen} navMenuInfo={navMenuInfo} navMenuLinks={navMenuLinks} />
        </div>
      </div>
    </header>
  )
}
