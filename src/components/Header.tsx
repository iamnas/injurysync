import { useState } from "react";
import { cn } from "../utils/cn";
import Button from "./Button";

export default function Header() {
    const [active, setActive] = useState("Home");

    const navLinks = ["Home", "Pricing", "Contact Us"];

    return (
        <header className="bg-[#ECF3FF] shadow-sm px-4 md:px-7 font-montserrat">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="group.png"
                        alt="Logo"
                        className="h-8 w-auto block md:hidden"
                    />
                    {/* Desktop Logo */}
                    <img
                        src="logo.png"
                        alt="Logo"
                        className="h-8 w-auto hidden md:block"
                    />
                </div>

                {/* Desktop nav & actions */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Nav Links */}
                    <nav className="flex space-x-6 ml-10">
                        {navLinks.map((link) => (
                            <button
                                key={link}
                                className={cn(
                                    "text-base hover:text-[#465FFF] transition-colors",
                                    active === link
                                        ? "text-[#465FFF] font-semibold"
                                        : "text-[#475467] font-normal"
                                )}
                                onClick={() => setActive(link)}
                            >
                                {link}
                            </button>
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2 gap-3">
                        <button className="py-[14px] px-[28px] border border-[#D0D5DD] font-medium rounded-md text-sm hover:border-gray-400 transition">
                            Sign In
                        </button>
                        <Button text="Get Started" />
                    </div>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <img
                        src="menu-2.png"
                        alt="menu"
                        className="h-10 w-10 p-2 rounded-lg bg-white text-[#465FFF]"
                    />
                </div>
            </div>
        </header>
    );
}
