import Link from "next/link";
import {
    HardHat,
    Search,
    Bell,
    User,
    ChevronRight,
    ShieldCheck,
    MapPin,
    UserCheck,
    CheckCircle2,
    Factory,
    Timer,
    Shield,
    MessageSquare,
    Phone,
    Heart,
    Share2,
    Settings,
    Ruler,
    ArrowRight,
    Menu
} from "lucide-react";

export default function EquipmentDetail({ params }: { params: { id: string } }) {
    // In a real app we'd fetch data using the ID
    const machine = { id: params.id, name: "JCB 3DX Eco Super" };

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
                            <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/fleet">Inventory</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#">Services</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#">Fleet Management</Link>
                            <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="/partner">Partner Program</Link>
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
                            <Link href="/post-requirement" className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-lg shadow-primary/20">
                                Post Requirement
                            </Link>
                            <div className="md:hidden">
                                <Menu className="text-3xl h-8 w-8 text-slate-900 dark:text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                    <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link className="hover:text-primary transition-colors" href="/fleet">Backhoe Loaders</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-slate-900 dark:text-slate-200">JCB 3DX Eco Super</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Image Gallery */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 group border border-slate-200 dark:border-slate-800">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-overlay opacity-90" alt="Main view of yellow JCB 3DX Eco Super backhoe loader" src="/images/login_bg.png" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>

                            <div className="absolute top-4 left-4 flex gap-2 z-10">
                                <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5">
                                    <ShieldCheck className="text-green-600 h-4 w-4" />
                                    100% Verified
                                </span>
                                <span className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm uppercase tracking-wider">
                                    Available Now
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary cursor-pointer relative bg-slate-800">
                                <img className="w-full h-full object-cover mix-blend-overlay opacity-90" alt="JCB front view" src="/images/login_bg.png" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors cursor-pointer relative bg-slate-800">
                                <img className="w-full h-full object-cover mix-blend-overlay opacity-90" alt="Heavy machinery details side view" src="/images/infra_bg.png" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors cursor-pointer relative bg-slate-800">
                                <img className="w-full h-full object-cover mix-blend-overlay opacity-90" alt="Close up of hydraulic systems" src="/images/logistics_bg.png" />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 cursor-pointer bg-slate-800">
                                <img className="w-full h-full object-cover mix-blend-overlay opacity-90" alt="Construction site environment" src="/images/infra_bg.png" />
                                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white font-black text-sm uppercase tracking-wider">
                                    +12 Photos
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Specs & CTAs */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight uppercase italic">JCB 3DX Eco Super</h1>
                            <div className="flex items-center gap-4 mt-3">
                                <span className="text-slate-500 font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-xs tracking-wide border border-slate-200 dark:border-slate-700">
                                    ID: #HR-8042
                                </span>
                                <div className="flex items-center gap-1 text-primary">
                                    <MapPin className="h-4 w-4" />
                                    <span className="text-sm font-bold uppercase tracking-wider">Available near: Andheri East, Mumbai</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-2 rounded-xl">
                                <UserCheck className="text-green-600 h-5 w-5" />
                                <span className="text-sm font-bold text-green-800 dark:text-green-400 uppercase tracking-wider">Operator Included</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-xl">
                                <CheckCircle2 className="text-blue-600 h-5 w-5" />
                                <span className="text-sm font-bold text-blue-800 dark:text-blue-400 uppercase tracking-wider">Inspected</span>
                            </div>
                        </div>

                        {/* Industrial Specs Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                            <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Manufacturer</span>
                                    <span className="text-lg font-black italic flex items-center gap-2 uppercase">
                                        <Factory className="text-primary h-5 w-5" />
                                        JCB
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Machine Time</span>
                                    <span className="text-lg font-black italic flex items-center gap-2 uppercase">
                                        <Timer className="text-primary h-5 w-5" />
                                        8 Hours
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 col-span-2">
                                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Service Specialization</span>
                                    <span className="text-base font-bold text-slate-700 dark:text-slate-300">
                                        Excavation, Foundation, Road Work
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 col-span-2 border-t border-slate-100 dark:border-slate-800 pt-5 mt-2">
                                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Rent Basis Available</span>
                                    <div className="flex gap-2 mt-1">
                                        <span className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Hourly</span>
                                        <span className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Daily</span>
                                        <span className="bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Monthly</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brokerage Note */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-primary">
                            <div className="flex gap-3 items-start">
                                <Shield className="text-primary h-6 w-6 shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    All inquiries are managed directly by <span className="text-slate-900 dark:text-white font-bold">Prime Construction Admin</span> for guaranteed service & transparent pricing.
                                </p>
                            </div>
                        </div>

                        {/* Action Zone */}
                        <div className="flex flex-col gap-3 mt-4">
                            <a
                                href={`https://wa.me/919057221351?text=${encodeURIComponent(`Hi, I am interested in renting the equipment: ${machine.name} (ID: ${machine.id}). Please provide more details.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-[0.98] shadow-lg shadow-green-600/20 uppercase tracking-widest text-sm"
                            >
                                <MessageSquare className="h-5 w-5 fill-current" />
                                Check Availability via WhatsApp
                            </a>
                            <Link
                                href={`/post-requirement?machine=${machine.id}&name=${encodeURIComponent(machine.name)}`}
                                className="w-full bg-primary hover:bg-orange-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-[0.98] shadow-lg shadow-primary/20 uppercase tracking-widest text-sm"
                            >
                                <HardHat className="h-5 w-5 fill-current" />
                                Request to Rent
                            </Link>
                        </div>

                        <div className="flex justify-between items-center py-4 border-t border-slate-200 dark:border-slate-800 mt-2">
                            <button className="text-slate-500 hover:text-primary flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors">
                                <Heart className="h-4 w-4" />
                                Save to Fleet
                            </button>
                            <button className="text-slate-500 hover:text-primary flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors">
                                <Share2 className="h-4 w-4" />
                                Share Spec Sheet
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <section className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-3xl font-black mb-10 text-slate-900 dark:text-white tracking-tight uppercase italic">Technical Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="space-y-6">
                            <h4 className="font-bold flex items-center gap-2 text-primary uppercase text-sm tracking-widest bg-primary/5 p-3 rounded-lg border border-primary/10">
                                <Settings className="h-5 w-5" />
                                Engine & Performance
                            </h4>
                            <ul className="space-y-3 text-sm px-2">
                                <li className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                                    <span className="text-slate-500 font-medium">Gross Power</span>
                                    <span className="font-bold text-slate-900 dark:text-white">56 kW (76 hp)</span>
                                </li>
                                <li className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                                    <span className="text-slate-500 font-medium">Max Torque</span>
                                    <span className="font-bold text-slate-900 dark:text-white">400 Nm</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="text-slate-500 font-medium">Drive Type</span>
                                    <span className="font-bold text-slate-900 dark:text-white">4WD</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-bold flex items-center gap-2 text-primary uppercase text-sm tracking-widest bg-primary/5 p-3 rounded-lg border border-primary/10">
                                <Ruler className="h-5 w-5" />
                                Dimensions
                            </h4>
                            <ul className="space-y-3 text-sm px-2">
                                <li className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                                    <span className="text-slate-500 font-medium">Operating Weight</span>
                                    <span className="font-bold text-slate-900 dark:text-white">7,460 kg</span>
                                </li>
                                <li className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                                    <span className="text-slate-500 font-medium">Dig Depth</span>
                                    <span className="font-bold text-slate-900 dark:text-white">4.77 m</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="text-slate-500 font-medium">Loader Capacity</span>
                                    <span className="font-bold text-slate-900 dark:text-white">1.1 cu.m</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 flex flex-col justify-center h-full">
                            <h4 className="font-black text-xl text-slate-900 dark:text-white mb-2 uppercase italic">Need a different machine?</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium leading-relaxed">Our fleet includes 50+ backhoes, excavators, and loaders across multiple locations.</p>
                            <Link className="inline-flex items-center text-primary font-black uppercase tracking-widest text-sm hover:text-orange-600 transition-colors group" href="/fleet">
                                Browse all inventory
                                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-12 mt-auto border-t border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8 mb-8">
                        <div className="flex items-center gap-3">
                            <HardHat className="text-primary h-8 w-8" />
                            <span className="text-xl font-black tracking-tighter text-white uppercase italic">PRIME CONSTRUCTION <span className="text-primary">MACHINES</span></span>
                        </div>
                        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
                            <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                            <Link className="hover:text-primary transition-colors" href="#">Terms of Rental</Link>
                            <Link className="hover:text-primary transition-colors" href="#">Support</Link>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-center uppercase tracking-widest">&copy; 2024 Prime Construction Machines. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
