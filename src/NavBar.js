import logo from './assets/persona_logo.png';
import { Fragment } from 'react'
import { Popover } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full z-10 pb-4 bg-white">
        <Popover>
          <div className="relative pt-6">
            <nav className="px-4 relative flex items-center justify-between" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0">
                <div className="flex items-center justify-between w-full">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img alt="Workflow" className="h-8 w-auto sm:h-10" src={logo} />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                  Produtos
                </a>
                <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                  Portfolio
                </a>
                <Link to="about" className="font-medium text-gray-500 hover:text-gray-900">Sobre Nós</Link>
                <Link to="login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </Link>
              </div>
            </nav>
          </div>

          <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                    Produtos
                  </a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                    Portfolio
                  </a>
                  <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Sobre Nós</Link>
                </div>
                <Link to="login" className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100">
                  Log in
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>);
}
