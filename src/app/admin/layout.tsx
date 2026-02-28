"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HardHat, Search, Bell, LogOut, LayoutDashboard, Truck, Activity, PieChart, Users, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        // Clear auth cookie
        document.cookie = "admin_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push("/admin-login");
        router.refresh();
    };

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-slate-950 font-display text-slate-900 dark:text-slate-100">
            {/* Top Header */}
            <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10 z-10 relative">
                <div className="flex items-center gap-8">
                    <Link href="/admin" className="flex items-center gap-3 text-primary transition-transform hover:scale-105">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <HardHat className="size-5" />
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-lg sm:text-xl font-bold leading-tight tracking-tight">
                            HeavyRent <span className="text-primary font-black">Admin</span>
                        </h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/admin" className={`text-sm font-semibold transition-colors ${pathname === '/admin' ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`}>Live Leads</Link>
                        <Link href="/admin/vendors" className={`text-sm font-semibold transition-colors ${pathname.startsWith('/admin/vendors') ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`}>Vendor Applications</Link>
                        <Link href="/admin/fleet" className={`text-sm font-semibold transition-colors ${pathname.startsWith('/admin/fleet') ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`}>Fleet Matchmaker</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1.5 border border-slate-200 dark:border-slate-700">
                        <Search className="text-slate-400 size-5" />
                        <input className="bg-transparent border-none outline-none focus:ring-0 text-sm placeholder:text-slate-400 w-48 ml-2 text-slate-900 dark:text-white" placeholder="Quick search..." type="text" />
                    </div>
                    <div className="flex gap-2">
                        <button className="relative flex items-center justify-center rounded-xl size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <Bell className="size-5" />
                            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <button onClick={handleLogout} className="flex items-center justify-center rounded-xl px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400 transition-colors gap-2 text-sm font-bold">
                            <LogOut className="size-5" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hidden lg:flex flex-col overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Main Menu</p>

                            <Link href="/admin" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${pathname === '/admin' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                <Activity className="size-5" />
                                <span className="text-sm font-semibold">Live Leads</span>
                            </Link>

                            <Link href="/admin/vendors" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${pathname.startsWith('/admin/vendors') ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                <Users className="size-5" />
                                <span className="text-sm font-semibold">Vendor Applications</span>
                            </Link>

                            <Link href="/admin/fleet" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${pathname.startsWith('/admin/fleet') ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                <Truck className="size-5" />
                                <span className="text-sm font-semibold">Fleet Matchmaker</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-auto pt-10 pb-4">
                        <div className="rounded-xl bg-primary/10 p-4 border border-primary/20 text-center lg:text-left">
                            <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">Super Admin</p>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Access enabled with full vendor data & control visibility.</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-6 lg:p-10 relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
