import { useState } from "react";
import { cn } from "../utils/cn";
import Button from "./Button";

export default function Header() {
    const [active, setActive] = useState("Home");

    const navLinks = ["Home", "Pricing", "Contact Us"];

    return (
        <header className="bg-[#ECF3FF] shadow-sm pr-7 pl-7 font-montserrat">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={'logo.png'} alt="Logo" className="h-8 w-auto" />
                    </div>

                    <div className="flex gap-2.5">
                        {/* Nav Links */}
                        <nav className="hidden md:flex space-x-6 ml-10 ">
                            {navLinks.map((link) => (
                                <button
                                    key={link}
                                    className={cn(
                                        "gap-2.5 text-base hover:text-[#465FFF] transition-colors",
                                        active === link ? "text-[#465FFF] font-semibold" : "text-[#475467] font-normal"
                                    )}
                                    onClick={() => setActive(link)}
                                >
                                    {link}
                                </button>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center space-x-4 gap-1">
                            <button className="py-[14px] px-[28px] ml-6 border border-[#D0D5DD] font-medium rounded-md text-sm hover:border-gray-400 transition">
                                Sign In
                            </button>
                            <Button text={'Get Started'} />

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
