"use client"

import { useState, useEffect, useRef } from "react"

import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [responsiveMenu, setResponsiveMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth > 600) {
                document.body.style.overflowY = 'auto'
            }
        };

        // Llamamos a handleResize una vez para establecer el estado inicial
        handleResize();

        // Agregamos el event listener para manejar cambios de tamaño
        window.addEventListener('resize', handleResize);

        // Limpiamos el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 


    useEffect(() => {
        if (responsiveMenu) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [setResponsiveMenu, responsiveMenu])

    return (
        <header className="w-full bg-black/90 lg:bg-transparent backcrop-blur-md lg:backdrop-blur-none fixed text-sm z-10">
            <div className="w-full px-3 lg:px-28 py-2 lg:py-6 flex items-center justify-between lg:grid lg:grid-cols-1fr-auto">
                <div>
                    <p className="w-11 p-2 text-center bg-slate-900 rounded-sm text-base mdtext-lg">DB</p>
                </div>
                <div className="hidden lg:block  mx-auto bg-zinc-900 backdrop-blur bg-opacity-70 px-16 py-3 border-2 border-solid border-slate-500 rounded-full">
                    <ul className="list-none flex flex-row gap-x-5 text-slate-300">
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Experience</a>
                        </li>
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50 ">About me</a>
                        </li>
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Skills</a>
                        </li>
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-end">
                    <button className="hidden lg:block px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 font-medium rounded-full
                         hover:from-amber-500  hover:via-yellow-600 hover:to-yellow-700 hover:cursor-pointer">
                        Contact
                    </button>
                </div>

                {/* Menu Responsive */}

                <div className="lg:hidden">
                    <span className="text-yellow-300 text-3xl" onClick={() => setResponsiveMenu(true)} >
                        <CiMenuFries />
                    </span>
                </div>

                {responsiveMenu && (
                <div className={`fixed lg:hidden top-0 left-0 z-20 w-full h-screen px-3 bg-slate-900 transition ${responsiveMenu ? 'expanding' : ''}`}>
                        <div className="w-full flex items-center justify-end py-6">
                            <span className="text-yellow-300 text-4xl" onClick={() => setResponsiveMenu(false)}>
                                <MdOutlineClose />  
                            </span>
                        </div>

                        <ul className="list-none flex flex-col gap-x-5 text-slate-300 text-4xl font-semibold font-raleway gap-6 pl-5">
                            <li>
                                <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Experience</a>
                            </li>
                            <li>
                                <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50 ">About me</a>
                            </li>
                            <li>
                                <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Skills</a>
                            </li>
                            <li>
                                <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Projects</a>
                            </li>
                            <li>
                                <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </header>
    );
}

export default Header;