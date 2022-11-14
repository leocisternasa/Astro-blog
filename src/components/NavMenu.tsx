import { Menu, Transition } from "@headlessui/react"

import React from 'react'
import { NavMenuInfo } from "./Header"

export default function NavMenu({ title, subMenuList }: NavMenuInfo) {
  
  return (
    <nav>
        <ul className="hidden lg:flex lg:space-x-7 lg:ml-14">
            <li>
            <Menu>
            <Menu.Button className="hover:text-almost-black">
              {title}
              <img
                className="inline-block ml-1"
                src="images/icon-arrow-down.svg"
                alt="Icon arrow down"
              />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                { subMenuList.map(subMenu=>(
                    <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href={subMenu.link}
                    >
                      <img
                        src="images/icon-todo.svg"
                        className="inline w-4 mr-3"
                        alt="Todo List Icon"
                      />
                      {subMenu.title}
                    </a>
                  )}
                </Menu.Item>
                ))}
                
              </Menu.Items>
            </Transition>
          </Menu>
            </li>
        </ul>
    </nav>
  )
}
