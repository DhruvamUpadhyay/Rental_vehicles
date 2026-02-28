import React from "react";
import { Handshake } from "lucide-react";
import { supabase } from "@/lib/supabase";
import VendorRow from "../components/VendorRow";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminVendors() {
    // Fetch all Vendor Applications
    const { data: vendors } = await supabase
        .from('vendors')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Vendor Applications</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Review and manage businesses wanting to join the platform.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col mt-4">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
                    <div>
                        <h3 className="text-lg font-black uppercase tracking-wide flex items-center gap-2">
                            <Handshake className="size-5 text-blue-500" />
                            Vendor Partner Applications
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">Live feed of businesses wanting to join the platform</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    {/* Header Row */}
                    <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800/50 text-[10px] uppercase tracking-widest font-bold text-slate-500 border-b border-slate-200 dark:border-slate-800">
                        <div className="col-span-2">Date</div>
                        <div className="col-span-3">Business Details</div>
                        <div className="col-span-3">Contact Person</div>
                        <div className="col-span-2">Fleet Size / Type</div>
                        <div className="col-span-1 border-l border-slate-200 dark:border-slate-700 pl-4">Status</div>
                        <div className="col-span-1 text-right">Action</div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50">
                        {vendors && vendors.length > 0 ? (
                            vendors.map((vendor) => (
                                <VendorRow key={vendor.id} vendor={vendor} />
                            ))
                        ) : (
                            <div className="px-6 py-12 text-center text-slate-500 text-sm font-medium">
                                No vendor applications received yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
