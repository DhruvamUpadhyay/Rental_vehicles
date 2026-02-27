import Link from "next/link";
import {
    HardHat,
    Search,
    Bell,
    User,
    ClipboardList,
    Send,
    MapPin,
    Phone,
    User as UserIcon,
    Building2,
    Menu
} from "lucide-react";

export default function PostRequirement() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <HardHat className="text-primary h-8 w-8" />
                            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
                                HEAVY<span className="text-primary">RENT</span>
                            </span>
                        </Link>

                        {/* Nav Links */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/fleet">Fleet Catalog</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/partner">Partner Program</Link>
                            <Link className="text-sm font-bold border-b-2 border-primary text-primary" href="/post-requirement">Post Requirement</Link>
                        </nav>

                        {/* Search & Actions */}
                        <div className="flex items-center gap-4">
                            <div className="relative hidden sm:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary outline-none" placeholder="Search equipment..." type="text" />
                            </div>
                            <button className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block">
                                <Bell className="h-5 w-5" />
                            </button>
                            <Link href="/partner" className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold uppercase tracking-wider transition-colors border border-slate-200 dark:border-slate-700">
                                List Your Fleet
                            </Link>
                            <div className="md:hidden">
                                <Menu className="text-3xl h-8 w-8 text-slate-900 dark:text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex items-center justify-center">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-primary/20 p-8 shadow-2xl relative overflow-hidden w-full">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-yellow-500"></div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                            <ClipboardList className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Tell us what you need</h1>
                            <p className="text-slate-500 font-medium text-sm mt-1">Post your exact requirements and we&apos;ll match you with verified vendors.</p>
                        </div>
                    </div>

                    <form action="#" className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="full_name">Full Name</label>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-primary focus:border-primary pl-10 py-3 outline-none transition-colors" id="full_name" name="full_name" placeholder="Enter your full name" type="text" />
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="mobile_number">Mobile Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-primary focus:border-primary pl-10 py-3 outline-none transition-colors" id="mobile_number" name="mobile_number" placeholder="+91 00000 00000" type="tel" />
                            </div>
                        </div>

                        {/* Project Pincode */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="pincode">Project Pincode / Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-primary focus:border-primary pl-10 py-3 outline-none transition-colors" id="pincode" name="pincode" placeholder="e.g. 400001 or Mumbai" type="text" />
                            </div>
                        </div>

                        {/* Requirement Details */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest" htmlFor="details">Requirement Details</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                                <textarea className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-primary focus:border-primary pl-10 pt-3 min-h-[120px] outline-none transition-colors" id="details" name="details" placeholder="e.g., I need a 50-ton crane for 3 days starting Monday for a construction project." rows={5}></textarea>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-orange-600 active:scale-[0.98] transition-all flex justify-center items-center gap-3 uppercase tracking-widest mt-8" type="button">
                            Submit to Admin
                            <Send className="h-5 w-5" />
                        </button>
                        <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-widest">Our admin team will match you with a verified local vendor within 30 minutes.</p>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-12 mt-auto border-t border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8 mb-8">
                        <div className="flex items-center gap-3">
                            <HardHat className="text-primary h-8 w-8" />
                            <span className="text-xl font-black tracking-tighter text-white uppercase italic">HEAVY<span className="text-primary">RENT</span></span>
                        </div>
                        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
                            <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                            <Link className="hover:text-primary transition-colors" href="#">Terms of Rental</Link>
                            <Link className="hover:text-primary transition-colors" href="#">Support</Link>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-center uppercase tracking-widest">&copy; 2024 HeavyRent Industrial Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
