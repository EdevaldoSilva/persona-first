import React from 'react'

const VerAnuncios = () => {
    return (
        <>
            <section className='mt-2 py-16 px-10 text-center bg-teal-900'>
                <div className='mx-auto max-w-6xl text-white'>
                    <h1 className='text-center'>Encontre Propostas de Trabalho</h1>
                </div>
            </section>

            <section className='mt-2 px-10'>

            </section>

            <section className='mt-2 py-16 px-10'>
                <div className='flex justify-end'>
                    <div class="mb-3 form-control w-30">
                        <label class="label">
                            <span class="label-text">Ordenar Por:</span>
                        </label>
                        <select class="select select-bordered">
                            <option>Data Mais Recente</option>
                            <option>Data Mais Antigo</option>
                            <option>Titulo</option>
                        </select>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-8 align-middle">
                    <div className='p-4 border rounded-lg shadow-md'>
                        <div className='mb-3'>
                            <h3 className='relative'>Advogado para defender o Elliot<span className='text-sm font-normal absolute right-0'>Publicado a 10 horas</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nunc urna,
                            suscipit rhoncus tortor placerat a. In semper dolor id suscipit auctor.
                            Nulla vitae venenatis sapien. Phasellus vestibulum dignissim viverra.
                            Duis purus ligula, porta ac aliquam eu, rhoncus sed diam.
                        </p>
                        <div className="mt-3 rounded-md">
                            <a
                                href="#"
                                className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                            >
                                Inscreva-se
                            </a>
                        </div>
                    </div>

                    <div className='p-4 border rounded-lg shadow-md'>
                        <div className='mb-3'>
                            <h3 className='relative'>Pedreiro para fazer 1 quarto e sala<span className='text-sm font-normal absolute right-0'>Publicado a 10 horas</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nunc urna,
                            suscipit rhoncus tortor placerat a. In semper dolor id suscipit auctor.
                            Nulla vitae venenatis sapien. Phasellus vestibulum dignissim viverra.
                            Duis purus ligula, porta ac aliquam eu, rhoncus sed diam.
                        </p>
                        <div className="mt-3 rounded-md">
                            <a
                                href="#"
                                className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                            >
                                Inscreva-se
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mt-3 flex justify-center'>
                    <button className="btn btn-outline">Ver mais</button>
                </div>

            </section>

        </>
    )
}

export default VerAnuncios