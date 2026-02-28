"use client";

import { useState } from "react";
import { MoreHorizontal, Loader2, Check, X, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function VendorRow({ vendor }: { vendor: any }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const updateStatus = async (newStatus: string) => {
        setIsUpdating(true);
        setShowMenu(false);
        try {
            await supabase.from('vendors').update({ status: newStatus }).eq('id', vendor.id);
            router.refresh();
        } catch (error) {
            console.error("Failed to update status", error);
        } finally {
            setIsUpdating(false);
        }
    };

    const initials = vendor.company_name ? vendor.company_name.substring(0, 2).toUpperCase() : '??';
    const dateStr = new Date(vendor.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    let statusColor = "amber";
    if (vendor.status === 'pending') statusColor = "amber";
    if (vendor.status === 'approved') statusColor = "emerald";
    if (vendor.status === 'rejected') statusColor = "red";

    return (
        <div className="flex flex-col border-b border-slate-100 last:border-0 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center px-6 py-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="col-span-1 lg:col-span-2 text-xs font-bold text-slate-500">
                    <span className="lg:hidden uppercase tracking-widest text-[10px] block mb-1">Date:</span>
                    {dateStr}
                </div>

                <div className="col-span-1 lg:col-span-3">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 shrink-0">{initials}</div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm tracking-wide">{vendor.company_name || 'Unknown'}</span>
                            <span className="text-[10px] text-slate-500 flex items-center gap-1">
                                Pin: {vendor.pincode || '-'} | Exp: {vendor.years_in_business || '-'} yrs
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-3">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{vendor.full_name || '-'}</span>
                        <span className="text-[10px] font-mono text-slate-500 mt-0.5">{vendor.mobile_number}</span>
                        <span className="text-[10px] text-slate-500">{vendor.email}</span>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <span className="lg:hidden uppercase tracking-widest text-[10px] font-bold text-slate-400 block mb-1">Fleet:</span>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{vendor.fleet_size || '-'}</span>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400 mt-0.5 max-w-[150px] truncate" title={vendor.equipment_types}>{vendor.equipment_types || '-'}</span>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-1 border-l-0 lg:border-l border-slate-200 dark:border-slate-700 pt-2 lg:pt-0 pl-0 lg:pl-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-${statusColor}-100 text-${statusColor}-700 dark:bg-${statusColor}-500/10 dark:text-${statusColor}-400`}>
                        {isUpdating ? <Loader2 className="size-3 animate-spin mr-1" /> : vendor.status || 'pending'}
                    </span>
                </div>

                <div className="col-span-1 lg:col-span-1 text-right relative mt-2 lg:mt-0 flex items-center justify-end gap-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
                        className="p-2 text-slate-400 hover:text-primary transition-colors bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                        <MoreHorizontal className="size-5" />
                    </button>

                    <div className="p-2 text-slate-400">
                        {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </div>

                    {showMenu && (
                        <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl p-2 z-[99] w-48 flex flex-col gap-1 ring-1 ring-slate-900/5">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-1 pt-1">Change Status</div>

                            <button onClick={(e) => { e.stopPropagation(); updateStatus('approved'); }} className="text-left px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-emerald-600 flex items-center gap-2">
                                <ShieldCheck className="size-4" /> Approve
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); updateStatus('pending'); }} className="text-left px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-amber-600 flex items-center gap-2">
                                <Loader2 className="size-4" /> Pending Review
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); updateStatus('rejected'); }} className="text-left px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-red-600 flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                                <X className="size-4" /> Reject Application
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Expandable Details Section */}
            {isExpanded && (
                <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 text-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Company Details */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Company Details</h4>
                            <dl className="space-y-2">
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Business Name</dt>
                                    <dd className="col-span-2 font-bold text-slate-900 dark:text-white">{vendor.company_name}</dd>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Experience</dt>
                                    <dd className="col-span-2 text-slate-900 dark:text-white">{vendor.years_in_business} Years</dd>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Location Pincode</dt>
                                    <dd className="col-span-2 font-mono text-slate-900 dark:text-white">{vendor.pincode}</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Contact Details</h4>
                            <dl className="space-y-2">
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Full Name</dt>
                                    <dd className="col-span-2 font-bold text-slate-900 dark:text-white">{vendor.full_name}</dd>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Mobile</dt>
                                    <dd className="col-span-2 font-mono text-slate-900 dark:text-white">{vendor.mobile_number}</dd>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Email</dt>
                                    <dd className="col-span-2 text-slate-900 dark:text-white">{vendor.email}</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Fleet Profile */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Fleet Profile</h4>
                            <dl className="space-y-2">
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Fleet Size</dt>
                                    <dd className="col-span-2 font-bold text-slate-900 dark:text-white">{vendor.fleet_size}</dd>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <dt className="text-slate-500 font-medium">Equipment</dt>
                                    <dd className="col-span-2 text-slate-900 dark:text-white whitespace-pre-wrap leading-relaxed">{vendor.equipment_types}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
