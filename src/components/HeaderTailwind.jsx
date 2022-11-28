import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const tiposDeMaquinas = [
  {
    name: "Máquina de bobina",
    href: "/maquina-de-bobina",
    icon: ChartBarIcon,
  },
  {
    name: "Máquina rotativa",
    href: "/maquina-rotativa",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Máquina de tatuar Pen",
    href: "/maquina-de-tatuar-pen",
    icon: ShieldCheckIcon,
  },
];

const marcas = [
  {
    name: "Cheyenne",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/marcas",
    icon: LifebuoyIcon,
  },
  {
    name: "Dragonhawk",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Hawink",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Stigma",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Atomus",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Solong Tattoo",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-slate-300 h-[90px]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-[90px] w-[90px]"
                src="/images/Tatoo-machines-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-slate-300 text-lg font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    <span>Tipos de máqunas de tatuar</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-500",
                        "ml-2 h-5 w-5 group-hover:text-gray-700"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {tiposDeMaquinas.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-lg font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-slate-300 text-lg font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    <span>Marcas</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-500",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {marcas.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-lg font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="/kit-tatuaje-principiante"
              className="text-lg font-medium text-gray-500 hover:text-gray-900"
            >
              Kit tatuaje principiante
            </a>
            <a
              href="/kit-tatuaje-profesional"
              className="text-lg font-medium text-gray-500 hover:text-gray-900"
            >
              Kit tatuaje profesional
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
        >
          <div className="divide-y-2  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <a href="/">
                    <img
                      className="h-[90px] w-auto"
                      src="/images/Tatoo-machines-logo.png"
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {tiposDeMaquinas.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-lg font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {marcas.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-lg font-medium text-gray-900 hover:text-gray-700"
                >
                  Kit tatuaje principiante
                </a>

                <a
                  href="/kit-tatuaje-profesional"
                  className="text-lg font-medium text-gray-900 hover:text-gray-700"
                >
                  Kit tatuaje profesional
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
