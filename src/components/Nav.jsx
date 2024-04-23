import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {


    const MenuItem = ({ icon, name, to }) => {
        const { pathname } = useLocation()
        return (
            <>
                <NavLink to={to} className={`cursor-pointer rounded-md`}>
                    <div className="text-[1rem] font-normal">{name}</div>
                </NavLink>
            </>
        )
    }


    // useEffect(() => {
    //     let menu_icon = document.getElementById('menu_icon')
    //     let cross_icon = document.getElementById('cross_icon')
    //     let nav = document.getElementById('sidebar')
    //     menu_icon.addEventListener('click', () => {
    //         nav.classList.add("active");
    //         document.body.classList.add("menu-active")
    //     })
    //     function close_menu() {
    //         nav.classList.remove("active");
    //         document.body.classList.remove("menu-active")
    //     }
    //     document.body.addEventListener('click', (e) => {
    //         if (nav.classList.contains('active') && e.target != menu_icon && (e.target != nav || e.target == cross_icon)) {
    //             console.log(true)
    //             close_menu()
    //         }
    //     })
    // })

    return (
        <header className="">
            <div className="container flex justify-between !my-0 !py-2">
                <a href="index.html" className="text-4xl font-semibold">
                    <img className="w-[120px]" src="./images/logo.png" alt="" />
                </a>
                <nav id="sidebar" className="flex items-center gap-4">
                    <div id="cross_icon" className="md:hidde absolute top-[20px] right-[20px] cursor-pointer text-2xl">
                        ✕
                    </div>
                    <MenuItem name="Home" to='/' />
                    <MenuItem name="About" to='/about' />
                    <MenuItem name="Service" to='/service' />
                    <MenuItem name="Project" to='/project' />
                    <MenuItem name="Contact" to='/contact' />
                </nav>
                <div id="menu_icon" className="md:hidden flex gap-1 items-center flex-col justify-center cursor-pointer">
                    <span className="w-[20px] h-[2px] bg-black"></span>
                    <span className="w-[20px] h-[2px] bg-black"></span>
                    <span className="w-[20px] h-[2px] bg-black"></span>
                </div>
            </div>
        </header>
    )
}
