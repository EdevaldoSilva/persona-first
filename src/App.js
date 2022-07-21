import logo from './assets/persona_logo.png';
import banner from './assets/banner.jpg';
import banner2 from './assets/banner2.jpg';
import { Fragment } from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import style from './App.css';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white">
          <Popover>
            <div className="relative pt-6">
              <nav className="px-4 relative flex items-center justify-between" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0">
                  <div className="flex items-center justify-between w-full">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-10"
                        src={logo}
                      />
                    </a>
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
                    Marketplace
                  </a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                    Produtos
                  </a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                    Portfolio
                  </a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                    Sobre Nós
                  </a>
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
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
                      Marketplace
                    </a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      Produtos
                    </a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      Portfolio
                    </a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      Sobre Nós
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>

      {/* Hero */}
      <main
        style={{ height: '31rem', backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='p-8 relative h-full gap-3 text-center text-white'>
          <h1 className='my-4 py-4 text-4xl'>
            Bem-vindo(a) a Persona
          </h1>
          <p className='my-4 py-4'>
            Encontre novas inspirações e apresente seu trabalho. Temos as
            melhores soluções, escolhidas especialmente para você..
          </p>
          <div>
            <div className="rounded-md">
              <a
                href="#"
                className="w-40 inline-block justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
              >
                Inscreva-se
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Basic Info */}
      <section className="mt-2 py-16 px-10 border-t">
        <div className='mx-auto max-w-6xl grid grid-flow-col gap-2'>
          <div>
            <h1 className='text-4xl'>
              Oferecemos as melhores infos
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra.
              Nullam hendrerit maximus neque in.
            </p>
            <div>
              <a
                href="#"
                className="w-30 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
              >
                Aprenda Sobre Nós
              </a>
            </div>
          </div>
          <div>
            <img
              className="h-56 w-full rounded-md sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={banner}
              alt=""
            />
          </div>
        </div>

      </section>

      {/* Como Funciona */}
      <section className='mt-2 py-16 px-10 text-center align-middle'>
        <div className='mx-auto max-w-6xl'>
          <h1>Como Funciona</h1>
          <div className="flex flex-row gap-24">
            <div className='mt-6 p-3 shadow-sm shadow-gray-400'>
              <img
                className="h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full"
                src={banner}
                alt=""
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu erat tempor, pulvinar velit ut, gravida libero. Donec placerat, nulla at semper iaculis, turpis quam commodo eros, et feugiat
                mauris urna nec leo</p>
            </div>

            <div className='mt-6 p-3 shadow-sm shadow-gray-400'>
              <img
                className="h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full"
                src={banner}
                alt=""
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu erat tempor, pulvinar velit ut, gravida libero. Donec placerat, nulla at semper iaculis, turpis quam commodo eros, et feugiat
                mauris urna nec leo</p>
            </div>

            <div className='mt-6 p-3 shadow-sm shadow-gray-400'>
              <img
                className="h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full"
                src={banner}
                alt=""
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu erat tempor, pulvinar velit ut, gravida libero. Donec placerat, nulla at semper iaculis, turpis quam commodo eros, et feugiat
                mauris urna nec leo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pedidos */}
      <section className='mt-2 py-16 px-10 text-center align-middle'>
        <div className='mx-auto max-w-6xl'>
          <h1>Faça um pedido</h1>
          <div className="mt-3 p-4 grid grid-cols-2 gap-4">
            <div className='mx-4 p-3 flex flex-row gap-4 text-justify shadow-sm shadow-slate-300'>
              <img
                className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
                src={banner}
                alt=""
              />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                </p>
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Ver Mais
                  </a>
                </div>
              </div>

            </div>

            <div className='mx-4 p-3 flex flex-row gap-4 text-justify shadow-sm shadow-slate-300'>
              <img
                className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
                src={banner}
                alt=""
              />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                </p>
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Ver Mais
                  </a>
                </div>
              </div>

            </div>

            <div className='mx-4 p-3 flex flex-row gap-4 text-justify shadow-sm shadow-slate-300'>
              <img
                className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
                src={banner}
                alt=""
              />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                </p>
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Ver Mais
                  </a>
                </div>
              </div>
            </div>

            <div className='mx-4 p-3 flex flex-row gap-4 text-justify shadow-sm shadow-slate-300'>
              <img
                className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
                src={banner}
                alt=""
              />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                </p>
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Ver Mais
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <a
              href="#"
              className="w-40 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
            >
              Ver Todos
            </a>
          </div>
        </div>
      </section>

      {/* Entrar */}
      <section className='mt-2 py-8 px-6'>
        <div className='mx-auto max-w-6xl justify-center flex space-x-10'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in</p>
          <div className="rounded-md">
            <a
              href="#"
              className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
            >
              Ver Mais
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='my-4 mx-auto p-4 border-t'>
        <div className='flex gap-2 justify-center'>
          <span>Sobre Nós</span>
          <span>Contacte-nos</span>
          <span>Projectos</span>
        </div>

        <div className='my-4 flex gap-4 justify-center'>
          <span><FaTwitter className='w-8 h-8' /></span>
          <span><FaLinkedin className='w-8 h-8' /></span>
          <span><FaFacebook className='w-8 h-8' /></span>
        </div>

        <p className='text-center'>Copyright © Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App;
