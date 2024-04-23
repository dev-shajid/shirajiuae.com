import React, { useEffect, useRef } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {
    const menu_icon_ref = useRef()
    const cross_icon_ref = useRef()
    const nav = useRef()

    const MenuItem = ({ name, to }) => {
        const { pathname } = useLocation()
        return (
            <>
                <NavLink to={to} className={`cursor-pointer rounded-md`}>
                    <div className="text-[1rem] font-normal">{name}</div>
                </NavLink>
            </>
        )
    }

    function close_menu() {
        nav?.current.classList.remove("active");
        document.body.classList.remove("menu-active")
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (!nav?.current.contains(event.target) && !menu_icon_ref?.current.contains(event.target)) {
                close_menu();
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="">
            <div className="container flex justify-between !my-0 !py-2">
                <a href="index.html" className="text-4xl font-semibold">
                    <img className="w-[120px]" src="./images/logo.png" alt="" />
                </a>
                <nav ref={nav} id="sidebar" className="flex items-center gap-4">
                    <div ref={cross_icon_ref} onClick={close_menu} id="cross_icon" className="md:hidde absolute top-[40px] right-[30px] cursor-pointer text-2xl">
                        ✕
                    </div>
                    <MenuItem name="Home" to='/' />
                    <MenuItem name="About" to='/about' />
                    <MenuItem name="Service" to='/service' />
                    <MenuItem name="Project" to='/project' />
                    <MenuItem name="Contact" to='/contact' />
                </nav>
                <div
                    ref={menu_icon_ref}
                    className="md:hidden menu_icon flex gap-1 items-center flex-col justify-center cursor-pointer"
                    onClick={() => {
                        nav?.current.classList.add("active");
                        document.body.classList.add("menu-active")
                    }}
                >
                    <AiOutlineMenuFold className='text-2xl text-black' />
                </div>
            </div>
        </header >
    )
}
