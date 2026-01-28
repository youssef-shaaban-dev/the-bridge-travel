import React, { useState } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Search, ChevronDown, Globe, Plane, MapPin, Ship, Home, Mail } from 'lucide-react';
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const checkActive = (to) => {
        if (to === '/') return location.pathname === '/';
        if (location.pathname.startsWith(to)) return true;
        if (to === '/egypt-tour-packages' && location.pathname.includes('/Egypt-tours-package/')) return true;
        if (to === '/nile-cruises' && location.pathname.includes('/nile-cruise/')) return true;
        if (to === '/day-excursions' && location.pathname.includes('/day-excursion/')) return true;
        return false;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#22455C]/90 backdrop-blur-md border-b border-white/10 text-white font-playfair">
            <div className="container-custom">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-4">
                        <div className="w-40 h-18 relative flex items-center justify-center">
                            <img
                                src={logo}
                                alt="the bridge travel"
                                className="h-full object-contain brightness-0 invert"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center space-x-1">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/">Home</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/egypt-tour-packages") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/egypt-tour-packages">Egypt Tour Packages</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/nile-cruises") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/nile-cruises">Nile Cruises</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/day-excursions") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/day-excursions">Day Excursions</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4 ",
                                        checkActive("/custom-egypt-tours") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/custom-egypt-tours">Custom Egypt Tours</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>


                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/travel-guide") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/travel-guide">Travel Guide</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/about-us") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>

                                    <NavigationMenuLink asChild className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4",
                                        checkActive("/contact-us") && "bg-white/10 text-white"
                                    )}>
                                        <NavLink to="/contact-us">Contact Us</NavLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>



                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center gap-2">

                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="text-white hover:bg-white/10 h-12 w-12 p-0 flex items-center justify-center transition-all">
                                    <AnimatedHamburger isOpen={isMenuOpen} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-[#22455C] border-l border-white/10 p-0 text-white font-playfair overflow-y-auto">
                                <div className="flex flex-col h-full">
                                    <SheetHeader className="p-6 border-b border-white/10 text-left">
                                        <SheetTitle className="text-white flex items-center gap-3">
                                            <img
                                                src={logo}
                                                alt="Logo"
                                                className="h-8 brightness-0 invert"
                                            />
                                            <span
                                                className="text-lg font-bold">
                                                The Bridge Travel
                                            </span>
                                        </SheetTitle>
                                    </SheetHeader>

                                    <nav className="flex-1 px-4 py-8 space-y-4">
                                        <MobileNavItem to="/" icon={<Home className="h-5 w-5" />} label="Home" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/egypt-tour-packages" icon={<MapPin className="h-5 w-5" />} label="Egypt Tour Packages" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/nile-cruises" icon={<Ship className="h-5 w-5" />} label="Nile Cruises" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/day-excursions" icon={<Globe className="h-5 w-5" />} label="Day Excursions" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/custom-egypt-tours" icon={<Plane className="h-5 w-5 text-[#BC8B22]" />} label="Custom Egypt Tours" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/travel-guide" icon={<Globe className="h-5 w-5" />} label="Travel Guide" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/about-us" icon={<Home className="h-5 w-5" />} label="About Us" onClick={() => setIsMenuOpen(false)} />
                                        <MobileNavItem to="/contact-us" icon={<Mail className="h-5 w-5" />} label="Contact Us" onClick={() => setIsMenuOpen(false)} />

                                    </nav>

                                    <div className="p-6 border-t border-white/10 text-[#67e8f9]">
                                        <p className="text-[10px] tracking-widest uppercase text-center opacity-50">The Bridge to Luxury Egypt Tours</p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </header>
    );
};

const MobileNavItem = ({ icon, label, hasChildren = false, to, onClick }) => {
    const location = useLocation();
    const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to) ||
        (to === '/nile-cruises' && location.pathname.includes('/nile-cruise/')) ||
        (to === '/day-excursions' && location.pathname.includes('/day-excursion/')) ||
        (to === '/egypt-tour-packages' && location.pathname.includes('/Egypt-tours-package/'));

    return (
        <NavLink to={to} onClick={onClick} className={cn(
            "flex items-center w-full px-4 py-4 rounded-xl transition-colors font-medium group text-left",
            icon ? "text-lg" : "text-sm py-2 opacity-80",
            isActive ? "bg-white/15 text-[#BC8B22]" : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
        )}>
            {icon && (
                <span className={cn(
                    "mr-4 transition-transform group-hover:scale-110",
                    isActive ? "text-[#BC8B22]" : "text-[#BC8B22]"
                )}>
                    {icon}
                </span>
            )}
            {label}
            {hasChildren && <ChevronDown className="ml-auto h-4 w-4 opacity-50" />}
        </NavLink>
    );
};

const AnimatedHamburger = ({ isOpen }) => (
    <div className="relative flex h-6 w-8 flex-col justify-between items-center py-1">
        <motion.span
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="h-1 w-full bg-white rounded-full origin-center"
        />
        <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="h-1 w-full bg-white rounded-full"
        />
        <motion.span
            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="h-1 w-full bg-white rounded-full origin-center"
        />
    </div>
);

export default Navbar;
