import Link from "next/link";
import { HardHat, ShieldCheck, MapPin, Star } from "lucide-react";

export default function VendorProfile({ params }: { params: { id: string } }) {
    // Dummy vendor profile data
    const vendorId = params.id;
    const vendorName = vendorId === "vnd-1" ? "InfraCorp Rentals" : vendorId === "vnd-2" ? "Apex Heavy Machinery" : "BuildTech Solvers";
    const initial = vendorName.substring(0, 2).toUpperCase();

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            {/* Simple Header */}
            <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                                <HardHat className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">Prime Construction <span className="text-primary">Machines</span></span>
                        </Link>
                        <Link className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-xl" href="/fleet">Back to Fleet</Link>
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-12">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
                    <div className="flex items-start gap-6 border-b border-slate-100 dark:border-slate-800 pb-8 mb-8">
                        <div className="h-24 w-24 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-black text-3xl shrink-0">
                            {initial}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">{vendorName}</h1>
                                <ShieldCheck className="text-green-500 h-6 w-6" />
                            </div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Verified Equipment Partner</p>
                            <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> Mumbai, MH</div>
                                <div className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> 4.9/5 Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">About {vendorName}</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                A premier partner providing top-tier industrial construction machinery.
                                Serving the industry with a commitment to quality, on-time delivery, and fully verified operators.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h3 className="font-bold mb-4 flex items-center gap-2"><HardHat className="h-5 w-5 text-primary" /> Fleet Highlights</h3>
                            <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <li>• Active machines: 45+</li>
                                <li>• Operator included: Yes</li>
                                <li>• Maintenance support: 24/7</li>
                                <li>• Delivery standard: 30-min response</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
