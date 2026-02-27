import Link from "next/link";
import {
    HardHat,
    MessageSquare,
    MapPin,
    Box,
    Search,
    ShieldCheck,
    Settings2,
    Send,
    Settings,
    Maximize2,
    Home,
    Timer,
    Info
} from "lucide-react";

export default function CategoryFleetCatalog({ params }: { params: { category: string } }) {
    // Decoding and capitalizing the category from the URL
    const rawCategory = decodeURIComponent(params.category || "Equipment");
    const categoryName = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1);

    // In a production application with a real database, we would query Supabase for machines matching this category.
    // E.g.: const { data: machines } = await supabase.from('equipment').select('*').eq('category', categoryName);

    const machines = [
        {
            id: `HR-8821-${categoryName.substring(0, 3).toUpperCase()}`,
            name: `${categoryName} Pro Model`,
            feature: "Standard Configuration",
            icon: <Settings2 className="h-4 w-4" />,
            tag: "Operator Included",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs8wXUYe43sZipTPghbSWrcBg0jEAgbcII2Atl2u7XHrToO0iWu86QqPjjQ0cpcL_-akoTgMCpLsCxaJLKrfoyDcVvUP26VuFxgyfELCntVWujM9dthplT_FuPL8YSGkmenYNa-tT2S1QoHKNTmVLnCKxcnZ3o-xb9FLuof8pK2Fn3nMmeKv-7bwDNTbU52gpqt87krdY2lL28t82ATHMzz2OHCJTahn4YhUqyF_EPN8pqTX7p4NP2BvVHCwCLljN3FJdoVxWEt35H"
        },
        {
            id: `HR-5540-${categoryName.substring(0, 3).toUpperCase()}`,
            name: `Heavy Duty ${categoryName}`,
            feature: "High Capacity Series",
            icon: <Settings className="h-4 w-4" />,
            tag: "Operator Included",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3oLmubSgTmQ8_P2CldNCrpcExKMaYrC99NUoj4JewNvbNTyTnNTpr2eHCQR7iuC1aY5zJuVmBZLhdDFQiI1FmgELQ7tT5JLc12C3Z6Fj8HpSdoo8kAZlMseuxpzO-S9EAb7DrWxkFxWOM_8BPI1Ee8xLVHEF6wb6x1BugveZzUpIxrqqMS4-AsiDFhX1v4dlrO2Vog5ushDgktMuQzEpsk8A-INfhQOalSv6ssIH7iTQ7oYc3sFKF-d9xg58ipouqTqXZ6fA0K2Ic"
        },
        {
            id: `HR-9912-${categoryName.substring(0, 3).toUpperCase()}`,
            name: `All-Terrain ${categoryName}`,
            feature: "Max Range Capabilities",
            icon: <Maximize2 className="h-4 w-4" />,
            tag: "Expert Team",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1HS2EkzSWL65l6xzkudfKzrdoSCnh13lmmVmD7ihNiP_tB_Bqd-dUC2PCHoVNOatOJFHAAvstrxLaupowG0tg0ipz-H0BvRhX0A6o2EcB6Eg8hvPIWHHVj_XFq2ZpsplpGvETD9kHBZ169eh38uF7PhfLbkHsZAIffEWYExsL4q-uS54PoyWHSwooJdHavxCTz7hfVbpxzYlJPGOs_myD9_dtjDsbRlReTraZn8qB9PS2zFDrLNlnrXEeIcu5CDjKPAQDteTCfdgg"
        },
        {
            id: `HR-4432-${categoryName.substring(0, 3).toUpperCase()}`,
            name: `Compact Mini ${categoryName}`,
            feature: "Indoor/Residential Use",
            icon: <Home className="h-4 w-4" />,
            tag: "Operator Included",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCybyXmvsj10PZapTRCj3YFApveQeSO_xuxpwpNlNGbcSYT9MUL5W6wxV8PhvXqTXQ9Vwd0cYWWeVv8RXiDzlPlbU7FuvuUZ3WN6O6c9RnkxeYtMyeZ6jeGzLDuakWwsh7YVJPwKcmQYXiggr2LRiLwGXD6eCgF6xqirlst4TgZ5guJZbfglqnHWiSSG1yu9ng4oxVfUDqEgePnKac5hXC8LmYmKU4AiYTE6I8RJ11IQPpZ-Z9kJaWaiukGBTImoxpc2n7HBgQGwYZE"
        }
    ];

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                                <HardHat className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">Heavy<span className="text-primary">Rent</span></span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
                            <Link className="text-sm font-semibold text-primary transition-colors" href="/fleet">Fleet Catalog</Link>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="/post-requirement">Post Requirement</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="hidden sm:flex px-4 py-2 text-sm font-bold border-2 border-primary text-primary rounded-xl hover:bg-primary/5 transition-all">
                                List Equipment
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                                <MessageSquare className="h-4 w-4" />
                                Contact Admin
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <div className="mb-6 flex gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                    <Link href="/fleet" className="hover:text-primary transition-colors">Catalog</Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">{categoryName}</span>
                </div>

                {/* Hero & Filter Section */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Premium Industrial <span className="text-primary">{categoryName}</span> Fleet
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Access top-tier {categoryName.toLowerCase()} across 200 cities. Rent with confidence, operator included.
                    </p>
                </div>

                {/* Filter Bar */}
                <section className="mb-12 p-6 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm border border-slate-200 dark:border-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <MapPin className="text-primary h-4 w-4" />
                                Service Location
                            </label>
                            <input className="w-full h-11 px-4 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Enter Pincode (e.g. 400001)" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <Box className="text-primary h-4 w-4" />
                                Selected Category
                            </label>
                            <select
                                defaultValue={categoryName.toLowerCase()}
                                className="w-full h-11 px-4 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary focus:border-primary transition-all outline-none text-slate-600 dark:text-slate-300 capitalize"
                            >
                                <option value="all">All Equipment</option>
                                <option value="jcbs">JCBs</option>
                                <option value="excavators">Excavators</option>
                                <option value="cranes">Cranes</option>
                                <option value="mixers">Mixers</option>
                                <option value="dumpers">Dumpers</option>
                                {/* add the current category if it doesn't match default list just in case */}
                                {['jcbs', 'excavators', 'cranes', 'mixers', 'dumpers'].includes(categoryName.toLowerCase()) ? null : <option value={categoryName.toLowerCase()}>{categoryName}</option>}
                            </select>
                        </div>
                        <button className="h-11 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                            <Search className="h-4 w-4" />
                            Find Available Fleet
                        </button>
                    </div>
                </section>

                {/* Equipment Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {machines.map((machine, idx) => (
                        <div key={idx} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer">
                            <Link href={`/equipment/${machine.id}`}>
                                <div className="relative h-48 overflow-hidden">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={machine.name} src={machine.img} />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded uppercase tracking-wider flex items-center gap-1">
                                            <ShieldCheck className="h-3 w-3" /> 100% Verified
                                        </span>
                                        <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-wider">{machine.tag}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-bold text-primary mb-1">ID: {machine.id}</p>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{machine.name}</h3>
                                    <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                                        {machine.icon}
                                        {machine.feature}
                                    </div>
                                    <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        <Send className="h-4 w-4" />
                                        WhatsApp Admin
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>

                {/* Lead Generation Form */}
                <section className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white" id="post-requirement">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <HardHat className="text-[20rem] h-64 w-64 absolute -top-10 right-0" />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold mb-4">Post a Requirement</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Can't find the exact {categoryName.toLowerCase()} you're looking for? Tell us your project needs and our vendor network will find the best match for you.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5">
                                    <div className="size-10 flex items-center justify-center bg-primary rounded-lg">
                                        <Timer className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Fast Response</h4>
                                        <p className="text-xs text-slate-400">Response within 30 minutes</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5">
                                    <div className="size-10 flex items-center justify-center bg-primary rounded-lg">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Vendor Verification</h4>
                                        <p className="text-xs text-slate-400">100% vetted local partners</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4 bg-white p-8 rounded-2xl text-slate-900">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                                    <input className="w-full bg-slate-100 border-none rounded-lg focus:ring-primary transition-all p-3 outline-none" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Mobile Number</label>
                                    <input className="w-full bg-slate-100 border-none rounded-lg focus:ring-primary transition-all p-3 outline-none" placeholder="+91 98765 43210" type="tel" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Site Pincode</label>
                                <input className="w-full bg-slate-100 border-none rounded-lg focus:ring-primary transition-all p-3 outline-none" placeholder="e.g. 560001" type="text" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Requirement Details</label>
                                <textarea className="w-full bg-slate-100 border-none rounded-lg focus:ring-primary transition-all p-3 outline-none" placeholder={`Describe the ${categoryName.toLowerCase()} type, duration and work details...`} rows={3}></textarea>
                            </div>
                            <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-primary/20" type="button">
                                Submit Requirement
                            </button>
                            <p className="text-[10px] text-center text-slate-400 mt-2 flex justify-center items-center gap-1">
                                <Info className="h-3 w-3" />
                                Our admin team will match you with a verified local vendor within 30 minutes.
                            </p>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                                <HardHat className="h-4 w-4" />
                            </div>
                            <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">Heavy<span className="text-primary">Rent</span></span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium text-slate-500">
                            <a className="hover:text-primary" href="#">Privacy Policy</a>
                            <a className="hover:text-primary" href="#">Terms of Service</a>
                            <a className="hover:text-primary" href="#">Help Center</a>
                        </div>
                        <p className="text-sm text-slate-500">
                            &copy; 2024 HeavyRent Industrial Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
