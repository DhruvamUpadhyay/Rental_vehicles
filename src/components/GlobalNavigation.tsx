"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Package, Info, HelpCircle, HardHat, FileText, ChevronRight } from "lucide-react";

export default function GlobalNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar when navigating
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Don't show sidebar on admin and vendor dashboards if they have their own
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin') && pathname !== '/admin-login') {
        return null;
    }

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "Fleet Catalog", href: "/fleet", icon: Package },
        { name: "Post Requirement", href: "/post-requirement", icon: FileText },
        { name: "Partner Program", href: "/partner", icon: HardHat },
        { name: "About Us", href: "/about", icon: Info },
        { name: "How it Works", href: "/how-it-works", icon: HelpCircle },
    ];

    return (
        <>
            {/* Floating Menu Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-orange-600 hover:scale-110 transition-all focus:outline-none"
                aria-label="Open global navigation menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white dark:bg-slate-900 z-[60] shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } flex flex-col font-display`}
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 text-primary">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <HardHat className="h-6 w-6" />
                        </div>
                        <span className="font-black tracking-tighter uppercase italic text-lg text-slate-900 dark:text-white">
                            PRIME CONSTRUCTION
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4">
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-4 p-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all ${isActive
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary"
                                        }`}
                                >
                                    <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                                    <span className="flex-1">{link.name}</span>
                                    {!isActive && <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-4">Vendor Access</p>
                        <Link
                            href="/vendor-login"
                            className="flex items-center gap-4 p-4 rounded-xl font-bold text-sm tracking-wide uppercase text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
                        >
                            <span className="flex-1">Partner Portal Login</span>
                        </Link>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Need Help? Call <span className="text-primary font-black">+91 90572 21351</span>
                    </p>
                </div>
            </div>
        </>
    );
}
