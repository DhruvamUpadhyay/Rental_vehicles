"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HardHat, Search, MapPin, ArrowRight, ShieldCheck, Headset, CreditCard,
  ChevronDown, Building2, Truck, Settings, Warehouse, Droplets, Building,
  Share2, Mail, Phone, ChevronRight, Send
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [pincodeQuery, setPincodeQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (pincodeQuery) params.set("loc", pincodeQuery);
    router.push(`/fleet?${params.toString()}`);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <HardHat className="text-primary h-8 w-8" />
              <h1 className="text-white text-2xl font-black tracking-tighter uppercase italic">
                Prime Construction <span className="text-primary">Machines</span>
              </h1>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <Link className="text-white/90 hover:text-primary text-sm font-semibold tracking-wide transition-colors uppercase" href="/fleet">Fleet</Link>
              <Link className="text-white/90 hover:text-primary text-sm font-semibold tracking-wide transition-colors uppercase" href="/partner">Partner Program</Link>
              <Link className="text-white/90 hover:text-primary text-sm font-semibold tracking-wide transition-colors uppercase" href="/post-requirement">Post Requirement</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/partner" className="hidden sm:block">
                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all uppercase tracking-wider">
                  List Fleet
                </button>
              </Link>
              <Link href="/post-requirement">
                <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all uppercase tracking-wider shadow-lg shadow-primary/20">
                  Post Requirement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Active Video Background */}
        <div className="absolute inset-0 bg-background-dark">
          <div className="absolute inset-0 hero-video-overlay z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110 opacity-60"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCbzhXb3t3bOHGfSPO5EUJVi5cAheY95Ql3MOSnXKmF4lpgT0MKxMXGvlRbK6YuXpGzLlhwng7P-b-rO48zsxhY7I9uj1qR8EFOumglDPNr8Ch7FM6SzoeWTywH1-fhzMS6B37bn383i-W-cUrkkl8ph_gQUuuMq0K_Ms84nbdVFnyOegOkH8_tZIAnT2c-20GujsxWkNxUPh-sZPKlS0TP2m_aV16MeDj5892Zp1Gsk-NnOGSS1xYBq1ZO-FiBxuLOhBBjKXb39yEE"
          >
            <source src="https://videos.pexels.com/video-files/3201594/3201594-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            <source src="https://cdn.pixabay.com/video/2019/04/24/23011-332483103_medium.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] md:leading-[1.1] tracking-tighter mb-3 max-w-4xl uppercase italic">
            Prime Construction <span className="text-primary">Machines</span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-black uppercase italic tracking-tight mb-2">
            Rent Heavy Construction Equipment Instantly
          </p>
          <p className="text-white/80 text-sm md:text-lg font-medium mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Find JCBs, Cranes, and Dumpers near your pin code. Verified machines.
          </p>

          {/* Search Bar Overlay */}
          <div className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-2xl p-3 rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] border border-white/10">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="flex-[1.5] relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border-white/10 text-white pl-12 h-14 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-white/30 text-sm font-bold uppercase italic"
                  placeholder="Search Equipment..."
                  type="text"
                />
              </div>
              <div className="flex-1 relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
                <input
                  value={pincodeQuery}
                  onChange={(e) => setPincodeQuery(e.target.value)}
                  className="w-full bg-white/5 border-white/10 text-white pl-12 h-14 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-white/30 text-sm font-bold uppercase italic"
                  placeholder="Pin Code"
                  type="text"
                />
              </div>
              <button type="submit" className="bg-primary hover:bg-orange-600 text-white px-8 h-14 rounded-xl font-black uppercase italic text-sm tracking-tight transition-all shadow-xl flex items-center justify-center gap-2">
                Find Fleet
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/40 uppercase text-[10px] font-bold tracking-[0.3em]">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Verified Machines</div>
            <div className="flex items-center gap-2"><Headset className="h-4 w-4" /> 24/7 Support</div>
            <div className="flex items-center gap-2"><CreditCard className="h-4 w-4" /> Transparent Pricing</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/30 animate-bounce">
          <ChevronDown className="h-10 w-10" />
        </div>
      </section >

      {/* Trust Bar */}
      < div className="bg-slate-900 border-y border-white/10 py-8 relative z-30 shadow-2xl" >
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 py-4 px-8 rounded-2xl backdrop-blur-sm">
            <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
              <ShieldCheck className="text-primary h-8 w-8" />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xl md:text-2xl tracking-tight italic">Verified</h4>
              <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest mt-0.5">Strategic Vendors</p>
            </div>
          </div>
        </div>
      </div >

      {/* Categorized Fleet Section */}
      < section className="py-24 bg-background-light dark:bg-background-dark" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-16 border-l-4 border-primary pl-6">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Inventory</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white italic">Browse by <span className="text-primary">Category</span></h2>
            </div>
            <Link className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-widest hover:text-primary transition-colors" href="/fleet">
              View All Categories
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Truck className="h-8 w-8" />, title: "JCBs", desc: "Backhoe Loaders" },
              { icon: <HardHat className="h-8 w-8" />, title: "Excavators", desc: "Heavy Digging" },
              { icon: <Settings className="h-8 w-8" />, title: "Cranes", desc: "Lifting Gear" },
              { icon: <Truck className="h-8 w-8" />, title: "Mixers", desc: "Concrete transport" },
              { icon: <Truck className="h-8 w-8" />, title: "Dumpers", desc: "Bulk Hauling" }
            ].map((cat, idx) => (
              <Link href={`/fleet/${cat.title.toLowerCase()}`} key={idx} className="group block cursor-pointer">
                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-slate-700 dark:text-slate-300 transition-colors">
                    {cat.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-black uppercase tracking-tight mb-2">{cat.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-medium uppercase tracking-wide">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Industries We Serve Section */}
      < section className="py-24 bg-slate-900 text-white overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Industries We <span className="text-primary">Serve</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <HardHat className="h-6 w-6 text-primary mb-2" />, title: "Infrastructure", img: "/images/infra_bg.png" },
              { icon: <Warehouse className="h-6 w-6 text-primary mb-2" />, title: "Warehouse", img: "/images/logistics_bg.png" },
              { icon: <Settings className="h-6 w-6 text-primary mb-2" />, title: "Manufacturing", img: "/images/logistics_bg.png" },
              { icon: <Droplets className="h-6 w-6 text-primary mb-2" />, title: "Oil & Gas", img: "/images/infra_bg.png" },
              { icon: <Building className="h-6 w-6 text-primary mb-2" />, title: "Residential", img: "/images/login_bg.png" }
            ].map((ind, idx) => (
              <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                {/* Fallback pattern in case image 404s */}
                <div className="absolute inset-0 bg-slate-800" />
                <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  {ind.icon}
                  <h4 className="text-base sm:text-lg font-black uppercase italic">{ind.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Featured Listings */}
      < section className="py-24 bg-slate-100 dark:bg-white/[0.02]" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Featured <span className="text-primary">Equipment</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">Ready for immediate deployment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { id: "HR-8042", name: "Caterpillar 320 GC", type: "Hydraulic Excavator • 2022 Model", price: "$250", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwPMqdvkaBJcrCSwNacZ5hpmm11X8ZIHDs_ZK_Rump9rSGWo9xq1B7PK7ljJqU2fhVve0t8oDBj_qBONZtnN6alf-Vv5qIuakomG4rMvRBwSU-SP4Rde3KkpoakPzYOmYjoPSeW05ew2bNmb-jc0-oGFM9G_Ku_7wqDrGvGGtGdIxDKW3A-mmfx6JmPBUy7G4WUBJ30teDwe9MrX5breYa-aMLV2UQfFqylg6gguid95w3c-Kz2G_cL98aleZBtjIODiRKd_HxVZtu" },
              { id: "HR-7219", name: "Liebherr LTM 1100", type: "Mobile Crane • 100 Ton Capacity", price: "$850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUJ-GmhEkXUJbgXvMhkQ34s8BTxj_nw5kO0sYSIX1vUYG-0Sej48MmVGSVwsE-4tKDLpayFQhCTJOgoioQj0s4syd6LqBNMVam8zhSL2rpMD7DHO02PF8HyNXRonRBHtbYNYKB2_uMbzQ0gttPZmQzHVqFFebVBR1preu7iw0n8U8dB7DHj6DUoUT8fbYwjYVg1o6NwWVqV_jz6QrrQtOcOgjH2dFCdVyMayYPpA87i5lU5Ffid_WYLJuDhpnAyn7reS-Mw2OwXdIH" },
              { id: "HR-1104", name: "BharatBenz 2823C", type: "Tipper/Dumper • 16 Cube", price: "$120", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKwkfVkPsnK0mOtWNkY8T_F-rxBWXqac2QykBIh2bamLgSyrSjUoiLm-gUIvPa5hdbJWakTcLXI6oxGdjkn6obX8FEQ-PX2RQRtD9TLa4iDbxMmRiFaOq7EqcB7010vy0Dj-ixWgIEKeB2B-EzeFn2Z0MnwuPijMO_p-v-u42RgUvM5WuSygGnTUYzJCObpS_Hc_-LLlHIdlbWcGIHp1bE9Wv05Tkjpfm4r0EoFgBvU7AzU4LkUdH7qOTks4vIZod6qDHJLl_FeWG" }
            ].map((machine, idx) => (
              <div key={idx} className="bg-white dark:bg-background-dark border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden group shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img alt={machine.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={machine.img} />
                  <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-md">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">#{machine.id}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 px-3 py-1 rounded-md flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-white" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Verified</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-1"><Link href={`/equipment/${machine.id}`}>{machine.name}</Link></h3>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">{machine.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-black text-lg sm:text-xl italic">{machine.price}</span>
                      <p className="text-slate-500 text-[10px] font-bold uppercase">Starting / Day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 dark:border-white/5 mb-6">
                    <div className="text-center">
                      <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Hourly</p>
                      <span className="text-slate-900 dark:text-white font-bold text-sm italic">Available</span>
                    </div>
                    <div className="text-center border-x border-slate-100 dark:border-white/5">
                      <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Daily</p>
                      <span className="text-slate-900 dark:text-white font-bold text-sm italic">Available</span>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Monthly</p>
                      <span className="text-slate-900 dark:text-white font-bold text-sm italic">Available</span>
                    </div>
                  </div>
                  <Link href={`/equipment/${machine.id}`} className="block text-center w-full bg-slate-900 dark:bg-white/10 hover:bg-primary dark:hover:bg-primary text-white py-4 rounded-xl font-black uppercase tracking-tighter transition-all">
                    Rent Basis: Daily / Monthly
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section >

      {/* Lead Generation & Brokerage Signal */}
      < section className="py-24 bg-background-dark text-white relative overflow-hidden" >
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx3NOCfF3BiZdpwPh8NsFx-g0GbRTrAyhhHkFjq7XBrgey6B3dw-wZcK5WAT9GmufPrRq7KuzaKnsMG5YJgmtvpos9dbtwpQponrHIRG8jO8McHKyTUah7FrcAFbCk-byDAmkUjiyI3cEl-oWqM8oNcnHIQgjMuo4X_rpOvR3IqCK5RKm3vfXInnwfAvZ5_iaFrvVaLvNEC-UdmgYzmYVZ81Uprwu72MPBIiDmsR1n8ndHNeG59UiL4QN4t82QMpmOAp-DSE4__qpN')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">
                Can't find what you're <span className="text-primary">Looking For?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">
                Our expert brokerage team has access to over 5,000+ unlisted machines across the country. Let us handle the sourcing for your specific project needs.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="bg-primary/10 p-2 rounded-lg"><Truck className="text-primary h-6 w-6" /></span>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide">30-Minute Response</h4>
                    <p className="text-white/40 text-sm italic">Our guarantee on all business hour inquiries.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary/10 p-2 rounded-lg"><Headset className="text-primary h-6 w-6" /></span>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide">Dedicated Logistics Manager</h4>
                    <p className="text-white/40 text-sm italic">A single point of contact for your entire project fleet.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
              <h3 className="text-2xl font-black uppercase italic tracking-tight mb-8">Request Custom Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input className="bg-white/5 border-white/10 rounded-xl h-14 focus:ring-primary focus:border-primary text-white font-medium px-5" placeholder="Your Name" type="text" />
                  <input className="bg-white/5 border-white/10 rounded-xl h-14 focus:ring-primary focus:border-primary text-white font-medium px-5" placeholder="Phone Number" type="text" />
                </div>
                <input className="w-full bg-white/5 border-white/10 rounded-xl h-14 focus:ring-primary focus:border-primary text-white font-medium px-5" placeholder="Equipment Type (e.g. 50 Ton Crane)" type="text" />
                <textarea className="w-full bg-white/5 border-white/10 rounded-xl focus:ring-primary focus:border-primary text-white font-medium p-5" placeholder="Tell us about your project requirements..." rows={4}></textarea>
                <button className="w-full bg-primary hover:bg-primary/90 text-white h-16 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center justify-center gap-3 shadow-primary/40">
                  Submit Requirement
                  <Send className="h-5 w-5" />
                </button>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest text-center mt-4 italic">
                  *Disclaimer: Response within 30 minutes during IST business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-slate-950 text-white py-16 border-t border-white/5" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 text-primary mb-6 group inline-flex">
                <HardHat className="h-8 w-8 group-hover:-rotate-12 transition-transform" />
                <h2 className="text-xl font-black uppercase tracking-tight italic text-slate-900 dark:text-white">Prime Construction <span className="text-primary">Machines</span></h2>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                The world&apos;s most trusted digital marketplace for high-end construction machinery and heavy equipment logistics.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Link className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="mailto:contact@primeconstruction.com"><Mail className="h-5 w-5" /></Link>
                  <span className="text-sm font-bold text-white/70">contact@primeconstruction.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="tel:+919057221351"><Phone className="h-5 w-5" /></Link>
                  <span className="text-sm font-bold text-white">+91 90572 21351</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-black uppercase tracking-widest text-xs mb-8 text-white/50">Marketplace</h5>
              <ul className="space-y-4">
                <li><Link className="text-white/70 hover:text-primary transition-colors text-sm font-bold uppercase italic" href="/fleet">Fleet Catalog</Link></li>
                <li><Link className="text-white/70 hover:text-primary transition-colors text-sm font-bold uppercase italic" href="/post-requirement">Post Requirement</Link></li>
                <li><Link className="text-white/70 hover:text-primary transition-colors text-sm font-bold uppercase italic" href="#">Sell Equipment</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black uppercase tracking-widest text-xs mb-8 text-white/50">Company</h5>
              <ul className="space-y-4">
                <li><Link className="text-white/70 hover:text-primary transition-colors text-sm font-bold uppercase italic" href="#">About Us</Link></li>
                <li><Link className="text-white/70 hover:text-primary transition-colors text-sm font-bold uppercase italic" href="#">Career</Link></li>
                <li><Link className="text-white/70 hover:text-primary transition-colors text-sm font-bold uppercase italic" href="#">Industrial Insights</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black uppercase tracking-widest text-xs mb-8 text-white/50">Newsletter</h5>
              <p className="text-white/40 text-xs mb-4">Get the latest machinery updates.</p>
              <div className="flex gap-2">
                <input className="bg-white/5 border-white/10 rounded-lg h-12 flex-1 text-sm focus:ring-primary focus:border-primary text-white px-3" placeholder="Email Address" type="email" />
                <button className="bg-primary hover:bg-primary/90 w-12 h-12 rounded-lg flex items-center justify-center transition-all">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">&copy; 2024 PRIME CONSTRUCTION MACHINES. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <Link className="text-white/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Privacy Policy</Link>
              <Link className="text-white/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}
