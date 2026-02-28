"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HardHat, Phone, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function VendorLogin() {
    const router = useRouter();
    const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
    const [contact, setContact] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState<"request" | "verify">("request");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!contact) {
            setError(`Please enter your ${loginMethod === 'phone' ? 'mobile number' : 'email'}`);
            return;
        }

        // Validate 10-digit phone number
        if (loginMethod === 'phone' && !/^\d{10}$/.test(contact)) {
            setError("Please enter a valid 10-digit mobile number");
            return;
        }

        setLoading(true);
        try {
            const phoneWithCode = loginMethod === 'phone' ? `+91${contact}` : contact;
            const { error: signInError } = loginMethod === "phone"
                ? await supabase.auth.signInWithOtp({ phone: phoneWithCode })
                : await supabase.auth.signInWithOtp({ email: contact });

            if (signInError) throw signInError;

            setStep("verify");
        } catch (err: any) {
            setError(err.message || "Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!otp) {
            setError("Please enter the OTP");
            return;
        }

        setLoading(true);
        try {
            const phoneWithCode = loginMethod === 'phone' ? `+91${contact}` : contact;
            const { error: verifyError } = loginMethod === "phone"
                ? await supabase.auth.verifyOtp({ phone: phoneWithCode, token: otp, type: 'sms' })
                : await supabase.auth.verifyOtp({ email: contact, token: otp, type: 'email' });

            if (verifyError) throw verifyError;

            // Success! Redirect to dashboard with full reload
            window.location.href = "/dashboard";
        } catch (err: any) {
            setError(err.message || "Invalid OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col sm:justify-center items-center pt-8 sm:pt-0">
            <Link href="/" className="flex items-center gap-3 mb-8">
                <div className="bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
                    <HardHat className="text-white h-8 w-8" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic leading-none">PRIME CONSTRUCTION</span>
                    <span className="text-primary font-black uppercase text-sm tracking-widest leading-tight">Partners</span>
                </div>
            </Link>

            <div className="w-full sm:max-w-md bg-white dark:bg-slate-900 overflow-hidden sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Vendor Portal</h2>
                        <p className="text-slate-500 font-medium text-sm">Sign in to manage your fleet and view inquiries.</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-6">
                            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                            {error}
                        </div>
                    )}

                    {step === "request" ? (
                        <form onSubmit={handleSendOtp} className="space-y-6">
                            {/* Toggle login method */}
                            <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                <button
                                    type="button"
                                    onClick={() => setLoginMethod("phone")}
                                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-all ${loginMethod === 'phone' ? 'bg-white dark:bg-slate-900 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                >
                                    Mobile
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLoginMethod("email")}
                                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-all ${loginMethod === 'email' ? 'bg-white dark:bg-slate-900 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                >
                                    Email
                                </button>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                    {loginMethod === 'phone' ? 'Mobile Number' : 'Email Address'}
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                        {loginMethod === 'phone' ? <Phone className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                                    </div>
                                    <input
                                        type={loginMethod === 'phone' ? 'tel' : 'email'}
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white disabled:opacity-50"
                                        placeholder={loginMethod === 'phone' ? "9876543210" : "partner@company.com"}
                                        maxLength={loginMethod === 'phone' ? 10 : undefined}
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-orange-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:active:scale-100 uppercase tracking-widest text-sm"
                            >
                                {loading ? "Sending..." : "Send Security Code"}
                                {!loading && <ArrowRight className="h-5 w-5" />}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                    Security Code
                                </label>
                                <div className="relative">
                                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white tracking-widest font-black text-lg disabled:opacity-50"
                                        placeholder="00000000"
                                        maxLength={8}
                                        disabled={loading}
                                    />
                                </div>
                                <p className="text-xs text-slate-500 font-medium mt-3 text-center">
                                    We sent a security code to <span className="font-bold text-slate-700 dark:text-slate-300">{contact}</span>
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:active:scale-100 uppercase tracking-widest text-sm"
                            >
                                {loading ? "Verifying..." : "Verify & Login"}
                            </button>

                            <button
                                type="button"
                                onClick={() => setStep("request")}
                                disabled={loading}
                                className="w-full text-slate-500 hover:text-primary text-sm font-bold uppercase tracking-widest py-2 transition-colors"
                            >
                                Try another {loginMethod}
                            </button>
                        </form>
                    )}
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    Secure Partner Access
                </div>
            </div>

            <p className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Not a partner yet? <Link href="/partner" className="text-primary hover:underline">Apply Here</Link>
            </p>
        </div>
    );
}
