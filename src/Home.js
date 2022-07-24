import React from 'react'
import logo from './assets/persona_logo.png';
import banner from './assets/banner.jpg';
import banner2 from './assets/banner2.jpg';
import pedido from './assets/pedido-template.jpg';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
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
                            <Link
                                to="about"
                                className="w-30 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                            >
                                Aprenda Sobre Nós
                            </Link>
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
                                src={pedido}
                                alt=""
                            />
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                                </p>
                                <h3 className='my-2'>Freelancer: <Link to='freelancer'>Etna de Souza</Link></h3>
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
                                src={pedido}
                                alt=""
                            />
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                                </p>
                                <h3 className='my-2'>Freelancer: <Link to='freelancer'>Etna de Souza</Link></h3>
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
                                src={pedido}
                                alt=""
                            />
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                                </p>
                                <h3 className='my-2'>Freelancer: <Link to='freelancer'>Etna de Souza</Link></h3>
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
                                src={pedido}
                                alt=""
                            />
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in.
                                </p>
                                <h3 className='my-2'>Freelancer: <Link to='freelancer'>Etna de Souza</Link></h3>
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
        </>
    )
}

export default Home