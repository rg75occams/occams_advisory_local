"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    const isParentActive = (children) => {
        return children?.some((child) => isActive(child.path));
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const nav_menu = [
        { label: 'About', path: '/about' },
        {
            label: 'Services',
            children: [
                { label: 'Brand Story', path: '/brand-story' },
                { label: 'Researchers', path: '/researchers' },
            ]
        },
        { label: 'Team', path: '/team' },
        {
            label: 'Resources',
            children: [
                { label: 'Brand Story', path: '/brand' },
                { label: 'Researchers', path: '/resechers' },
            ]
        },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mt-7.5 sm:px-10 px-5">
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <img src='./images/occams_advisory.svg' alt='occams Advisory' className="w-max h-max" />
                </Link>

                <div className={`xl:flex items-center md:text-base text-base hidden h-19.5 pr-4 pl-2.5 py-2.5
                   rounded-[50px] text-white font-medium bg-[#9F9F9F1A] backdrop-blur-md`}
                >
                    <Link href="/" className={`flex items-center rounded-[50px] justify-center py-4 shrink-0 transition-all 
                        px-8 duration-300 ${isActive("/") ? "linear-background text-white" : "hover:bg-white/10"}`}
                    >
                        <img src='./icons/home_icon.svg' alt='Home Icon' />
                    </Link>

                    {nav_menu?.map((nav, index) => {
                        const activeParent = nav.children ? isParentActive(nav.children) : false;

                        return (
                            <div key={index} className="relative group">
                                {nav?.children ? (
                                    <div className='cursor-pointer'>
                                        <div className={`flex items-center gap-1.5 px-8 py-4 rounded-full transition-all 
                                            duration-300 ${activeParent ? "linear-background text-white" : ""}`}
                                        >
                                            <span className='block inter'>{nav.label}</span>
                                            <i className="fa-sharp fa-solid fa-angle-down mt-1.25"></i>
                                        </div>

                                        <div className="absolute left-0 p-[15px_10px_13px_20px] bg-white text-[#1E1E1E] 
                                                rounded-xl opacity-0 group-hover:opacity-100 w-max invisible 
                                                group-hover:visible transition-all duration-200 z-50 top-13.5 border border-[#E4E4E7]"
                                        >
                                            <div className="flex flex-col space-y-2">
                                                {nav.children.map((child, idx) => (
                                                    <Link key={idx} href={child?.path} className='flex items-center 
                                                            gap-2.5 pr-5'
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={nav.path} className={`block px-8 py-4 rounded-full transition-all duration-300 
                                        whitespace-nowrap ${isActive(nav.path) ? "linear-background text-white" : ""}`}
                                    >
                                        {nav?.label}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="xl:flex hidden xl:gap-7.5 md:gap-5 gap-8 items-center" data-aos="fade-right">
                    <img src='./icons/search_icon.svg' alt='Search Icon' className="w-max h-max" />

                    <button className={`group inline-flex flex-nowrap items-center rounded-full text-base py-2.5 w-37.5
                        h-11.5 justify-center whitespace-nowrap gap-2.5 btn-professional bg-[#F36B21] text-white 
                        cursor-pointer`}
                    >
                        <div className="flex items-center gap-2">
                            <span className='block inter'>Login</span>

                            <div className="flex items-center justify-center bg-[#FFFFFF63] rounded-full w-5 h-5">
                                <i className="fa-sharp fa-solid fa-arrow-right text-[10px] mt-0.5"></i>
                            </div>
                        </div>
                    </button>
                </div>

                <div className="xl:hidden flex sm:gap-8 gap-7 items-center">
                    <img src='./icons/search_icon.svg' alt='Search Icon' className="w-max h-max" />

                    <button className="cursor-pointer text-4xl" onClick={toggleMenu}>
                        {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : (
                            <img src='./icons/toggle-bar.svg' alt='Toggle Bar' />
                        )}
                    </button>
                </div>
            </div>

            <div className={`md:hidden fixed top-0 right-0 w-[70%] bg-white text-black z-50
                shadow-lg transform transition-transform duration-300 ease-in-out rounded-[30px]
                ${isMenuOpen ? 'translate-x-0 mx-10 my-28' : 'translate-x-full mx-0 my-26'}`}
            >
                <div className="py-8 px-6 flex flex-col">
                    <ul className="grow space-y-2">
                        {nav_menu?.map((nav, index) => (
                            <div key={index}>
                                {nav?.children ? (
                                    <>
                                        <button className="flex items-center justify-center gap-2 inter"
                                            onClick={() => setOpen(open === index ? null : index)}
                                        >
                                            {nav.label}

                                            {open === index ? (
                                                <FiChevronUp className="mt-1" />
                                            ) : (
                                                <FiChevronDown className="mt-1" />
                                            )}
                                        </button>

                                        {open === index && (
                                            <div className="rounded-[20px] px-5 py-3.5 ml-3 mt-2 inter"
                                                style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                                            >
                                                <div className="flex flex-col space-y-2.5">
                                                    {nav?.children?.map((child, idx) => (
                                                        <Link key={idx} href={child?.path}
                                                            onClick={() => {
                                                                setIsMenuOpen(false); setOpen(null);
                                                            }}
                                                        >
                                                            {child.label}

                                                            {idx !== nav.children.length - 1 && (
                                                                <div className="border-b border-gray-200 pt-2.5" />
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link href={nav?.path} className='block' onClick={() => setIsMenuOpen(false)}>
                                        {nav?.label}
                                    </Link>
                                )}

                                <div className="border-b border-gray-200 pt-2.5" />
                            </div>
                        ))}
                    </ul>

                    <ul className="grow mt-2">
                        <Link href='/contact' className='block' onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </Link>

                        <div className="border-b border-gray-200 pt-2.5" />
                    </ul>

                    <Link href='/login' className="w-full bg-[#9D4EDD] px-6 py-3.75 text-base text-white 
                        rounded-full cursor-pointer text-start inter mt-3"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar