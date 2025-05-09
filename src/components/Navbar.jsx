import { useState } from "react";
import { styles } from "../style";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => { 
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.flexBetween} py-6 w-full`}>
            <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[124px] h-[32px]"
                />
            </a>

            <ul className="flex items-center max-sm:hidden">
                {navLinks.map((navLink, index) => (
                    <li 
                        key={navLink.id}
                        className={`text-[16px] text-dimWhite duration-150 hover:text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}    
                    >
                        <a 
                            href={`#${navLink.id}`}
                        >{navLink.title}</a>
                    </li>
                ))}
            </ul>

            <div className="relative sm:hidden flex flex-1 items-center justify-end">
                <button
                    className="p-2.5 rounded-[4px] bg-black-gradient duration-200 active:scale-[0.95]"
                    onClick={() => setToggle((t) => !t)}
                >
                    <img 
                        src={toggle ? close : menu }
                        alt={toggle ? "Close" : "Menu" }
                        className="w-[20px] h-[20px]"
                    />
                </button>

                <ul className={`${toggle ? "flex" : "hidden" } items-center flex-col sidebar absolute top-12 right-0 py-2 px-4 rounded-sm bg-black-gradient my-2 z-10`}>
                    {navLinks.map((navLink, index) => (
                        <li 
                            key={navLink.id}
                            className={`text-[16px] text-dimWhite duration-150 hover:text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-3"}`}
                        >
                            <a 
                                href={`#${navLink.id}`}
                            >{navLink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;