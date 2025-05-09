import { styles } from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => (
    <footer className={`bg-black flex flex-col ${styles.paddingX} pt-10 md:pt-16`}>
        <section className={`flex flex-col lg:flex-row gap-10 ${styles.boxWidth}`}>
            <div className={`${styles.flexStartCol}`}>
                <img 
                    src={logo}
                    alt="Footer logo"
                    className="w-[200px] h-[50px] -translate-x-4"
                />
                <p className={`${styles.paragraph} mt-3 max-w-[312px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 mb-10">
                {footerLinks.map(footerLink => (
                    <div
                        key={footerLink.title}
                    >
                        <h2 className="text-white text-lg mb-5">{footerLink.title}</h2>
                        <ul className={`${styles.flexStartCol} gap-2`}>
                            {footerLink.links.map(linkObj => (
                                <li
                                    key={linkObj.name}
                                    className="text-dimWhite text-[15px] duration-200 hover:text-white"
                                >
                                    <a href={linkObj.link}>{linkObj.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <div className={`w-full ${styles.flexBetween} flex-col md:flex-row gap-4 py-5 sm:py-7 border border-t-dimWhite`}>
            <p className={`${styles.paragraph}`}>Copyright <span className="mx-2">&copy;</span> {new Date().getFullYear()} HooBank. All Rights Reserved.
            </p>
            <ul className="flex items-center">
                {socialMedia.map((info, index) => (
                    <li
                        key={info.id}
                        className={index !== (socialMedia.length - 1) ? "mr-5" : "mr-0"}
                    >
                        <a href={info.link}>
                            <img 
                                src={info.icon}
                                alt={info.id} 
                                className="w-[25px] h-[25px] duration-200 brightness-50 hover:brightness-100"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
)


export default Footer;