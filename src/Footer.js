import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            {/* Entrar */}
            <section section className='mt-2 py-8 px-6' >
                <div className='mx-auto max-w-6xl justify-center flex space-x-10'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus neque in</p>
                    <div className="rounded-md">
                        <a
                            href="#"
                            className="w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                        >
                            Inscreva-se
                        </a>
                    </div>
                </div>
            </section >

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
                <p className='text-center'>© 2022 Persona. Todos os direitos reservados</p>
            </footer>
        </>
    );
}
