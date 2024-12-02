import React from 'react'
import {FaDiscord, FaGithub, FaInstagram, FaTwitch, FaTwitter} from "react-icons/fa";

const socialLinks = [
    {href: "https://discord.com", icon: <FaDiscord />},
    {href: "https://twitter.com", icon: <FaTwitter />},
    {href: "https://instagram.com", icon: <FaInstagram />},
    {href: "https://twitch.com", icon: <FaTwitch />},
    {href: "https://github.com", icon: <FaGithub />}

]

const Footer = () => {
    return (
        <footer className={"w-screen bg-violet-300 py-4 tet-black"}>
            <div className={"container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row"}>
                <p className={"text-center text-sm md:text-left"}>&copy; Nova 2024. All rights reserved</p>
                <div className={"flex justify-center gap-4 md:justify-start"}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={"_blank"} // new screen
                            rel={"noopener noreferrer"}
                            className={"text-black transition-colors duration-500 ease-in-out hover:text-white"}
                        >
                            {link.icon}</a>
                    ))}
                </div>
                <a href={"#privacy-policy"} className={"text-center text-sm hover:underline md:text-right"}>Privacy Policy</a>
            </div>
        </footer>
    )
}
export default Footer

// what does noopener noreferrer mean?
// what does container do
// what does transition-colors do?