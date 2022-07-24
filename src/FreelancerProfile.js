import React from 'react'
import profile from './assets/profile_template.png';


const FreelancerProfile = () => {
    return (
        <>
            <section className='mt-2 py-16 px-10 text-center bg-teal-900'>
                <div className='mx-auto max-w-6xl text-white'>
                    <h1 className='text-center'>Perfil do Freelancer</h1>
                </div>
            </section>

            <section className='mt-2 py-16 px-10'>
                <div className='mx-auto max-w-6xl grid grid-flow-col gap-2'>
                    <div className=''>
                        <img alt="Workflow" className="w-80 h-80" src={profile} />
                    </div>
                    <div className=''>
                        <h2 className='text-2xl font-semibold'>Etna de Souza</h2>
                        <h6 className='mt-2'>Freelancer | Contabilista</h6>
                        <p className='mt-4'>
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
                        <div className="rounded-md mt-11">
                        <a
                            href="#"
                            className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                        >
                            Negociar    
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FreelancerProfile