import React from 'react'

export default function NavMenuLink({ linkTitle }) {
  return (
    <div className="hidden lg:flex lg:space-x-7 lg:ml-14">
    <button className= "hover:text-almost-black">    
    <a href="#">{ linkTitle }</a>
    </button>
</div>
  )
}
