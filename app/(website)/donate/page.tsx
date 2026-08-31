"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";

export default function DonatePage() {
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { language } = useApp();

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("donorName", donorName.trim());
      formData.append("phone", phone.trim());
      formData.append("email", email.trim());
      formData.append("amount", amount.trim());

      const res = await fetch("/api/donations", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSuccess(true);
      setDonorName("");
      setPhone("");
      setEmail("");
      setAmount("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 pt-14 md:py-12 md:pt-16 lg:py-16 lg:pt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl space-y-6 md:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 md:space-y-4">
          <span className="bg-slate-50 text-[#000000] px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            {language === "en" ? "Support Justice and Equality" : "न्याय और समानता का समर्थन करें"}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0A2540] tracking-tight">
            {language === "en" ? "Donate to DDJC" : "DDJC में योगदान दें"}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            {language === "en" ? "Your generous donation goes directly towards free legal aid for the underprivileged, courtroom advocacy, and grassroots legal awareness camps." : "आपका उदार योगदान सीधे वंचित पीड़ितों के लिए मुफ्त कानूनी सहायता, कोर्टरूम वकालत और जमीनी स्तर पर कानूनी जागरूकता शिविरों में खर्च होता है।"}
          </p>
        </div>

        <div className="bg-[#0A2540] text-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="space-y-3 md:space-y-4">
            <span className="bg-slate-1000/20 text-blue-300 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
              {language === "en" ? "Direct Bank Transfer / UPI" : "सीधे बैंक ट्रांसफर / UPI"}
            </span>
            <h3 className="text-xl md:text-2xl font-bold">{language === "en" ? "Official Bank Details" : "आधिकारिक बैंक विवरण"}</h3>
             <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-slate-300">
               <p><strong className="text-white">{language === "en" ? "Account Name:" : "खाता का नाम:"}</strong> {language === "en" ? "Prayas Jan Utthan Samiti" : "प्रयास जन उत्थान समिति"}</p>
               <p><strong className="text-white">{language === "en" ? "Account Number:" : "खाता संख्या:"}</strong> <span className="font-mono">7108466367</span></p>
               <p><strong className="text-white">{language === "en" ? "Bank Name:" : "बैंक का नाम:"}</strong> {language === "en" ? "Indian Bank" : "इंडियन बैंक"}</p>
               <p><strong className="text-white">{language === "en" ? "IFSC Code:" : "IFSC कोड:"}</strong> <span className="font-mono">IDIB000O029</span></p>
               <p><strong className="text-white">{language === "en" ? "Branch Address:" : "शाखा पता:"}</strong> {language === "en" ? "Orai Branch, Prakash Complex, Opposite District Court, Orai – Jalaun, U.P." : "उरई शाखा, प्रकाश कॉम्प्लेक्स, ऑप्पोसिट डिस्ट्रिक्ट कोर्ट, उरई – जालौन, उ.प्र."}</p>
             </div>
            <div className="flex justify-center mt-4">
                <a href="upi://pay?pa=9453645931@indianbk&pn=Prayas%20Jan%20Utthan%20Samiti&cu=INR" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Image src="/images/upi/image.png" alt="UPI" width={32} height={32} className="h-8 w-8 object-contain" />
                </a>
              </div>
           </div>

          <div className="bg-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 text-center space-y-3 md:space-y-4 backdrop-blur-sm">
            <div className="flex justify-center mb-2">
              <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden shadow-md border border-white/20 bg-slate-50">
                <Image
                  src="/images/logo/ddjc-logo.jpg"
                  alt="DDJC Logo"
                  fill
                  sizes="48px md:56px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base mb-1">{language === "en" ? "Donate by Scanning QR" : "QR से स्कैन करके दान करें"}</h4>
              <p className="text-[10px] md:text-xs text-slate-300">{language === "en" ? "Scan with any UPI app (Google Pay, PhonePe, Paytm)" : "किसी भी UPI ऐप (गूगल पे, फोनपे, पेटीएम) से स्कैन करें"}</p>
            </div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto bg-white rounded-lg md:rounded-xl overflow-hidden p-1.5 md:p-2 shadow-inner">
              <Image
                src="/images/qr/qr.png"
                alt="Prayas Jan Utthan Samiti Donation QR Code"
                fill
                sizes="160px md:192px"
                className="object-contain p-1 md:p-2"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm space-y-4 md:space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-4 md:mb-6">{language === "en" ? "Donation Details" : "योगदान विवरण"}</h3>
          {success ? (
            <div className="p-6 md:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl">
                <FaCheckCircle />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-emerald-800">{language === "en" ? "Thank you for your donation!" : "आपके योगदान के लिए धन्यवाद!"}</h4>
              <p className="text-xs md:text-sm text-emerald-700 max-w-md mx-auto">
                {language === "en" ? "Your donation details have been received. Our team will contact you shortly." : "आपके योगदान की जानकारी प्राप्त हो चुकी है। हमारी टीम जल्द ही आपसे संपर्क करेगी।"}
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-3 md:mt-4 bg-[#000000] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-xl text-[11px] md:text-xs font-bold"
              >
                {language === "en" ? "Donate Again" : "एक और योगदान करें"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Full Name" : "पूरा नाम"}</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder={language === "en" ? "Your Name" : "आपका नाम"}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Phone Number" : "फोन नंबर"}</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Email Address" : "ईमेल पता"}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="supporter@example.com"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Donation Amount" : "दान राशि"}</label>
                <div className="relative">
                  <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs md:text-sm">₹</span>
                  <input
                    type="number"
                    required
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={language === "en" ? "Enter amount" : "राशि दर्ज करें"}
                    className="w-full pl-8 pr-3 py-2.5 md:pl-9 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              {error && <p className="text-red-600 text-[10px] md:text-xs font-bold mt-2">{error}</p>}

              <div className="flex justify-center">
                <Button type="submit" isLoading={loading} className="w-auto px-6 md:px-8 py-2 md:py-2.5 text-[11px] md:text-xs">
                  {language === "en" ? "Submit Donation" : "योगदान जमा करें"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
