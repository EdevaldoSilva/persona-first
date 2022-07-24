import React from 'react';
import { FaUser } from "react-icons/fa";

function About() {
    return (
        <div>
            {/* Decricao inicial */}
            <section style={{ height: "70vh" }} className='mt-2 py-28 px-10 text-center bg-teal-900'>
                <div className='mx-auto max-w-6xl align-middle text-white'>
                    <h1 className='text-4xl'>Nos focamos em disponibilizar os melhores servicos</h1>
                    <h1 className='text-3xl'>para os nossos freelancers e igualmente os clientes.</h1>
                </div>
            </section>

            {/* O que somos */}
            <section className='mt-2 py-16 px-10 justify-start'>
                <div className='mx-auto max-w-6xl'>
                    <h1 className='mb-3'>O que é a PERSONA?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum odio ipsum,
                        mollis accumsan lacus luctus sit amet. Nullam consequat hendrerit velit,
                        sit amet tempor enim varius nec. Fusce augue nibh, ultrices vitae vulputate non,
                        porttitor eget velit. Sed scelerisque feugiat ante. Etiam rutrum posuere lacus.
                        Duis quis felis luctus libero laoreet dapibus a ac sapien. Proin sagittis odio et pretium
                        scelerisque. Suspendisse potenti.
                        Curabitur fermentum cursus quam, quis tincidunt justo luctus ut.
                        Proin euismod dapibus dignissim.
                        In porta, ante sit amet aliquet blandit, enim nulla accumsan mauris,
                        vitae efficitur orci lectus a orci. Sed urna tellus, rhoncus vitae auctor suscipit,
                        ultricies ut nisl.
                    </p>
                    <br />
                    <p>
                        Duis vel dignissim sapien. Maecenas consequat tortor sit amet orci sollicitudin,
                        at dignissim nibh malesuada. Praesent semper vulputate finibus. Integer iaculis
                        risus sed ultricies maximus. Ut efficitur laoreet leo. Cras interdum sapien eget
                        condimentum aliquet. Aliquam eget dui dictum, imperdiet est vel, aliquet sapien.
                        Donec dictum erat non sem faucibus, at rhoncus ante luctus. Suspendisse ac laoreet magna.
                        Aenean blandit arcu dictum, ornare enim at, tincidunt mauris. Curabitur metus ante,
                        lobortis id nunc quis, euismod ultricies dui.
                    </p>
                </div>
            </section>

            {/* Os integrantes da compania */}
            <section className='mt-2 py-16 px-10 text-center align-middle bg-cyan-100'>
                <div className='mx-auto max-w-6xl'>
                    <h1>Estrutura Organica</h1>
                    <div className="grid grid-cols-3 gap-28 align-middle">
                        <div className='mt-6 p-3 shadow-sm shadow-gray-400'>
                            <div className='mt-4'>
                                <span><FaUser className='h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full' /></span>
                                <h3>Jailson Coluna</h3>
                                <h4>Director de TI</h4>
                            </div>
                        </div>

                        <div className='mt-6 p-3 shadow-sm shadow-gray-400'>
                            <div className='mt-4'>
                                <span><FaUser className='h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full' /></span>
                                <h3>Jailson Coluna</h3>
                                <h4>Director de TI</h4>
                            </div>
                        </div>

                        <div className='mt-6 p-3 shadow-sm shadow-gray-400'>
                            <div className='mt-4'>
                                <span><FaUser className='h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full' /></span>
                                <h3>Jailson Coluna</h3>
                                <h4>Director de TI</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About