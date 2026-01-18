import React, { useState } from 'react';
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
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#22455C]/90 backdrop-blur-md border-b border-white/10 text-white font-playfair">
            <div className="container-custom">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo Area */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative flex items-center justify-center">
                            <img
                                src={logo}
                                alt="the bridge travel"
                                className="h-full object-contain brightness-0 invert"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center space-x-1">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        Home
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        About Us
                                    </NavigationMenuLink>
                                </NavigationMenuItem>


                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        Egypt Tour Packages
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        Nile River Cruises
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        Day Excursions
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4 text-[#BC8B22]")}>
                                        Custom Egypt Tours (Form)
                                    </NavigationMenuLink>
                                </NavigationMenuItem>


                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        Travel Guide
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-white hover:text-white font-medium px-4")}>
                                        Contact Us
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Desktop Right Actions */}
                    <div className="hidden xl:flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-10 w-10">
                            <Search className="h-5 w-5" />
                        </Button>

                        <Button className="hidden xl:flex bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-full px-6  items-center gap-2 font-bold shadow-lg shadow-pink-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Travel Deals
                        </Button>

                        <Button className="hidden xl:flex bg-[#BC8B22] hover:bg-[#A67A1D] text-white rounded-full px-6  items-center gap-2 font-bold shadow-lg shadow-amber-500/20">
                            <Plane className="h-4 w-4" />
                            Tailor-made
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center gap-2">
                        <Button className="flex lg:hidden bg-[#BC8B22] hover:bg-[#BC8B22] text-white rounded-md h-10 w-10 p-0 focus:ring-2 focus:ring-[#BC8B22] focus:ring-offset-2">
                            <Search className="h-5 w-5" />
                        </Button>

                        <Sheet onOpenChange={setIsMenuOpen}>
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
                                            <span className="text-lg font-bold">the bridge travel</span>
                                        </SheetTitle>
                                    </SheetHeader>

                                    <nav className="flex-1 px-4 py-8 space-y-4">
                                        <MobileNavItem icon={<Home className="h-5 w-5" />} label="Home" />
                                        <MobileNavItem icon={<Home className="h-5 w-5" />} label="About Us" />
                                        <MobileNavItem icon={<MapPin className="h-5 w-5" />} label="Egypt Tour Packages" />
                                        <MobileNavItem icon={<Ship className="h-5 w-5" />} label="Nile River Cruises" />
                                        <MobileNavItem icon={<Globe className="h-5 w-5" />} label="Day Excursions" />
                                        <MobileNavItem icon={<Plane className="h-5 w-5" />} label="Custom Egypt Tours (Form)" />

                                        <MobileNavItem icon={<Globe className="h-5 w-5" />} label="Travel Guide" />
                                        <MobileNavItem icon={<Mail className="h-5 w-5" />} label="Contact Us" />
                                        <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                                            <Button className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-lg h-14 font-bold flex items-center justify-start px-4 gap-4">
                                                <Search className="h-5 w-5 opacity-70" />
                                                Travel Deals
                                            </Button>

                                            <Button className="w-full bg-[#BC8B22] hover:bg-[#BC8B22]/90 text-white rounded-lg h-14 font-bold flex items-center justify-start px-4 gap-4">
                                                <Plane className="h-5 w-5 opacity-70" />
                                                Tailor-made
                                            </Button>

                                            <Button variant="ghost" className="w-full text-white hover:bg-white/10 justify-start px-4 h-14 text-lg border border-white/10">
                                                <Globe className="h-5 w-5 opacity-70 mr-4" />
                                                Language
                                                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </div>
                                    </nav>

                                    <div className="p-6 border-t border-white/10 text-[#67e8f9]">
                                        <p className="text-[10px] tracking-widest uppercase text-center opacity-50">Luxury Meets Reality</p>
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

const MobileNavItem = ({ icon, label, hasChildren = false }) => (
    <button className="flex items-center w-full px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-lg font-medium group text-left">
        <span className="mr-4 text-[#BC8B22] transition-transform group-hover:scale-110">
            {icon}
        </span>
        {label}
        {hasChildren && <ChevronDown className="ml-auto h-4 w-4 opacity-50" />}
    </button>
);

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
