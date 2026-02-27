import Link from "next/link";
import { HardHat, TrendingUp, ShieldCheck, CreditCard, Building2, Factory, Wrench, Mail, Phone, Menu } from "lucide-react";

export default function PartnerProgram() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
            {/* Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3 text-primary">
                    <HardHat className="h-8 w-8 text-primary" />
                    <h2 className="text-xl font-black leading-tight tracking-tight uppercase italic text-slate-900 dark:text-white">Heavy<span className="text-primary">Rent</span></h2>
                </Link>
                <div className="hidden md:flex flex-1 justify-end gap-10">
                    <nav className="flex items-center gap-8">
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/fleet">Fleet</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/how-it-works">How it Works</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/about">About</Link>
                        <Link className="text-sm font-bold border-b-2 border-primary text-primary" href="/partner">Partner Program</Link>
                    </nav>
                    <Link href="/post-requirement" className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-lg shadow-primary/20">
                        Post Requirement
                    </Link>
                </div>
                <div className="md:hidden">
                    <Menu className="text-3xl h-8 w-8 text-slate-900 dark:text-white" />
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center w-full">
                {/* Hero Section */}
                <section className="relative bg-slate-900 py-20 px-6 overflow-hidden w-full">
                    <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60" style={{ backgroundImage: "url('/images/infra_bg.png')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark to-transparent"></div>
                    <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
                        <div className="flex-1 space-y-6">
                            <span className="inline-block px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest">Vendor Program</span>
                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase italic">
                                Partner with HeavyRent and Grow Your Rental Business.
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                                List your machines and get high-quality leads from verified contractors. We handle the brokerage, you provide the power.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Area */}
                <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
                    {/* Registration Form */}
                    <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Application Details</h3>
                        <form className="space-y-6">
                            {/* Section 1: Company Details */}
                            <div className="space-y-6">
                                <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 uppercase text-primary">1. Company Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Legal Entity Name</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="Registered company name" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">GST Number (Optional)</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="22AAAAA0000A1Z5" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">PAN Number</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="ABCDE1234F" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Mobile Number</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="+91 98765 43210" type="tel" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Fleet Overview */}
                            <div className="space-y-6 pt-6">
                                <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 uppercase text-primary">2. Fleet Overview</h4>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Total Fleet Size</label>
                                        <select className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3">
                                            <option>Select fleet size</option>
                                            <option>1-5 Machines</option>
                                            <option>6-15 Machines</option>
                                            <option>16-50 Machines</option>
                                            <option>50+ Machines</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Types of Machines Owned</label>
                                        <textarea className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="e.g. Excavators, JCBs, Cranes, Forklifts..." rows={3}></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Operating Regions */}
                            <div className="space-y-6 pt-6">
                                <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 uppercase text-primary">3. Operating Regions</h4>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold">States/Cities Covered</label>
                                    <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="e.g. Maharashtra, Karnataka (Bangalore, Mysore)" type="text" />
                                </div>
                            </div>

                            {/* Section 4: Bank Details */}
                            <div className="space-y-6 pt-6">
                                <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 uppercase text-primary">4. Bank Details (for commissions)</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <label className="text-sm font-semibold">Bank Name</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="Enter bank name" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Account Number</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="000000000000" type="password" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">IFSC Code</label>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary p-3" placeholder="HDFC0000123" type="text" />
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="pt-10 space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-primary hover:bg-orange-600 text-white font-black uppercase italic py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]" type="submit">
                                        Submit Application to Admin
                                    </button>
                                    <button className="flex-1 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold uppercase tracking-wider py-4 rounded-xl transition-all" type="button">
                                        Save Progress
                                    </button>
                                </div>
                                <p className="text-center text-xs text-slate-500 font-medium">
                                    By submitting, you agree to our Vendor Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Info Cards & Sidebar */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl flex gap-4 items-start">
                            <div className="bg-primary text-white p-3 rounded-lg shadow-lg shadow-primary/30 shrink-0">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 uppercase tracking-tight text-slate-900 dark:text-white">Steady Business</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Access a consistent stream of projects from top-tier construction firms across the country.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl flex gap-4 items-start">
                            <div className="bg-primary text-white p-3 rounded-lg shadow-lg shadow-primary/30 shrink-0">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 uppercase tracking-tight text-slate-900 dark:text-white">Verified Leads</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">No more cold calling. We only send you leads from contractors with verified budgets and timelines.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl flex gap-4 items-start">
                            <div className="bg-primary text-white p-3 rounded-lg shadow-lg shadow-primary/30 shrink-0">
                                <CreditCard className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 uppercase tracking-tight text-slate-900 dark:text-white">Timely Payments</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Our escrow service ensures you get paid on time, every time, without the hassle of chasing invoices.</p>
                            </div>
                        </div>

                        {/* Trust Section */}
                        <div className="mt-12 p-8 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-slate-500">Trusted by over 500+ Vendors</h4>
                            <div className="flex flex-col gap-4 grayscale opacity-70">
                                <div className="flex items-center gap-3">
                                    <Building2 className="text-primary h-6 w-6" />
                                    <span className="font-black italic text-lg tracking-tight uppercase">MetroBuild</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Factory className="text-primary h-6 w-6" />
                                    <span className="font-black italic text-lg tracking-tight uppercase">InfraCore</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Wrench className="text-primary h-6 w-6" />
                                    <span className="font-black italic text-lg tracking-tight uppercase">GensetPro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ or Support Section Placeholder */}
                <section className="bg-slate-50 dark:bg-slate-900/50 w-full py-16 px-6 border-y border-slate-200 dark:border-slate-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black uppercase italic tracking-tight mb-4 text-slate-900 dark:text-white">Have questions?</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">Our dedicated partner support team is here to help you get started.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors shadow-sm" href="#">
                                <Mail className="h-5 w-5" />
                                partners@heavyrent.com
                            </Link>
                            <Link className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors shadow-sm" href="#">
                                <Phone className="h-5 w-5" />
                                +1 (800) HEAVY-RENT
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Placeholder matching other pages */}
            <footer className="w-full bg-slate-950 text-white pt-20 pb-10 border-t border-primary/20 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">&copy; 2024 HeavyRent Industrial Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
}
