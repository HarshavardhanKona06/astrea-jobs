'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
    Settings,
    LogOut,
    LayoutDashboard,
    Briefcase,
    Users,
    CircleFadingPlus,
    Sun, MonitorSmartphone, MoonStar, ChevronDown, HelpCircle, BookOpen, Search, Command
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';


const NavBar = () => {
    const pathname = usePathname();

    const router = useRouter()

    const handleLogoutClick = () => {
        router.push('/login')
    }

    const navItems = [
        { id: 'dashboard', label: 'Career Dashboard', icon: LayoutDashboard, href: '/dashboard' },
        { id: 'applications', label: 'Applications', icon: Briefcase, href: '/applications' },
        { id: 'networking', label: 'Networking', icon: Users, href: '/networking' }
    ];

    const menuItems = [
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Get Help' },
        { icon: BookOpen, label: 'Resources' }
    ];

    const activeItem = navItems.find(item => item.href === pathname) || navItems[0];

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const { theme, setTheme } = useTheme();

    const userInitials = "JD";
    const userName = "John Doe";
    const userEmail = "john@example.com";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background-light dark:bg-background-dark">
            <div className="w-full h-14 flex items-center justify-between px-2">
                <div className="flex items-center space-x-4">

                    <Link href="/"
                          className="flex items-center px-3 py-2 transition-colors duration-200 hover:opacity-90">

                        <div className="relative h-6 w-6">
                            <Image src="/logo.svg" alt="CareerCraft Logo" fill className="object-contain"/>
                        </div>

                        <span className="ml-2.5 text-2xl font-semibold tracking-normal font-oxanium bg-gradient-to-r
                                         from-text-text-primary-light to-text-text-primary-light/80
                                         dark:from-text-text-primary-dark dark:to-text-text-primary-dark/80 bg-clip-text">
                            AstreaJobs
                        </span>
                    </Link>

                    <div className="relative" ref={navRef}>
                        <button
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            className={cn(
                                "flex items-center gap-2.5 px-3 py-2 h-10 rounded-lg transition-all duration-200",
                                "hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis-lazuli-light/20"
                            )}
                            aria-haspopup="true"
                            aria-expanded={isNavOpen}
                        >
                            <div
                                className="flex items-center justify-center w-5 h-5 text-lapis-lazuli-light dark:text-lapis-lazuli-dark">
                                {React.createElement(activeItem.icon, {size: 20})}
                            </div>

                            <span
                                className="hidden md:inline font-medium text-text-primary-light dark:text-text-primary-dark">
                                {activeItem.label}
                            </span>

                            <ChevronDown
                                className={cn(
                                    "w-4 h-4 text-text-secondary-light dark:text-text-secondary-dark transition-transform duration-200",
                                    isNavOpen && "rotate-180"
                                )}
                            />
                        </button>

                        {isNavOpen && (
                            <div
                                className={cn(
                                    "absolute mt-1 w-56 py-1 rounded-lg shadow-lg",
                                    "bg-background-light dark:bg-background-dark",
                                    "border border-border-light dark:border-border-dark",
                                    "animate-in fade-in-0 zoom-in-95"
                                )}
                                role="menu"
                            >
                                {navItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        onClick={() => setIsNavOpen(false)}
                                        className={cn(
                                            "flex items-center gap-2.5 px-3 py-2 w-full transition-colors",
                                            "hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark",
                                            pathname === item.href && "bg-lapis-lazuli-light/10 dark:bg-lapis-lazuli-dark/10",
                                            pathname === item.href
                                                ? "text-lapis-lazuli-light dark:text-lapis-lazuli-dark"
                                                : "text-text-primary-light dark:text-text-primary-dark"
                                        )}
                                        role="menuitem"
                                    >
                                        <div className="flex items-center justify-center w-5 h-5">
                                            <item.icon size={20}/>
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            <div className="flex items-center space-x-4 pr-2.5">

                <div className="pt-0.5 relative flex items-center">
                    {/* Search Container */}
                    <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark hover:border-lapis-lazuli-light dark:hover:border-lapis-lazuli-dark focus-within:border-lapis-lazuli-light dark:focus-within:border-lapis-lazuli-dark bg-background-on-hover-light dark:bg-background-on-hover-dark transition-all duration-200">
                        <Search size={16}
                                className="flex-shrink-0 text-lapis-lazuli-light dark:text-lapis-lazuli-dark"/>

                        <input
                            type="text"
                            placeholder="Search Anything ..."
                            className="w-52 bg-transparent text-sm font-medium placeholder:text-text-secondary-light/75 dark:placeholder:text-text-secondary-dark/75 focus:outline-none text-text-primary-light dark:text-text-primary-dark"
                        />

                        {/* Command Key Indicator */}
                        <div
                            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-background-secondary-light dark:bg-background-secondary-dark ml-auto">
                            <Command size={12}/>
                            <span className="text-xs">K</span>
                        </div>
                    </div>
                </div>

                <button
                    className={cn(
                        // Base styles
                        "flex items-center gap-2.5 h-10 px-3.5 rounded-lg",
                        // Colors and transitions
                        "bg-coral-light/10 dark:bg-coral-dark/10",
                        "text-coral-light dark:text-coral-dark",
                        "transition-all duration-200",
                        // Hover state
                        "hover:bg-coral-light/15 dark:hover:bg-coral-dark/15",
                        "hover:text-coral-on-hover-light dark:hover:text-coral-on-hover-dark",
                        // Focus state
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-coral-light/20 dark:focus-visible:ring-coral-dark/20"
                    )}
                >
                    <CircleFadingPlus
                        className={cn(
                            "h-5 w-5 transition-transform",
                            "group-hover:rotate-90"
                        )}
                    />
                    <span className="hidden md:inline font-medium">
                            Quick Add
                        </span>
                </button>


                <div className="relative" ref={userMenuRef}>
                    {/* User Avatar Button */}
                    <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-md font-medium transition-all duration-200
                    ${isUserMenuOpen
                            ? 'ring-2 ring-lapis-lazuli-light dark:ring-lapis-lazuli-dark ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark'
                            : 'hover:ring-2 hover:ring-border-light dark:hover:ring-border-dark'
                            }`}
                            style={{backgroundColor: '#614BC3'}}
                            aria-haspopup="true"
                            aria-expanded={isUserMenuOpen}
                        >
                <span className="text-text-primary-dark font-space-grotesk">
                    {userInitials}
                </span>
                        </button>

                        {/* Dropdown Menu */}
                        {isUserMenuOpen && (
                            <div
                                className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark overflow-hidden">
                                {/* User Info Section */}
                                <div className="px-4 py-3 border-b border-border-light dark:border-border-dark">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                                            style={{backgroundColor: '#614BC3'}}
                                        >
                                <span className="text-lg text-text-primary-dark font-space-grotesk">
                                    {userInitials}
                                </span>
                                        </div>
                                        <div className="flex flex-col">
                                <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
                                    {userName}
                                </span>
                                            <span
                                                className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                    {userEmail}
                                </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Theme Switcher Section - Updated Style */}
                                <div className="p-3 border-b border-border-light dark:border-border-dark">
                                    <div
                                        className="bg-background-secondary-light/50 dark:bg-background-secondary-dark/50 rounded-lg p-1.5 flex gap-1">
                                        {[
                                            {value: 'light', icon: Sun},
                                            {value: 'dark', icon: MoonStar},
                                            {value: 'system', icon: MonitorSmartphone}
                                        ].map(({value, icon: Icon}) => (
                                            <button
                                                key={value}
                                                onClick={() => setTheme(value)}
                                                className={`flex items-center justify-center h-8 flex-1 rounded-md transition-all duration-200 ${
                                                    theme === value
                                                        ? 'bg-background-light dark:bg-background-dark text-coral-light dark:text-coral-dark'
                                                        : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light hover:dark:text-text-primary-dark'
                                                }`}
                                            >
                                                <Icon className="h-4 w-4"/>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <div className="py-1">
                                    {menuItems.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => console.log(item.label)}
                                            className="flex items-center gap-2.5 w-full px-4 py-2 transition-colors duration-200 text-text-primary-light dark:text-text-primary-dark hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark"
                                        >
                                            <item.icon
                                                className="h-4 w-4 text-text-secondary-light dark:text-text-secondary-dark"/>
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    ))}

                                    {/* Logout Section */}
                                    <button
                                        onClick={() => console.log('Logout')}
                                        className="flex items-center gap-2.5 w-full px-4 py-2 mt-1 transition-colors duration-200 text-coral-light dark:text-coral-dark hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark"
                                    >
                                        <LogOut className="h-4 w-4"/>
                                        <span className="font-medium" onClick={handleLogoutClick}>Log out</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
