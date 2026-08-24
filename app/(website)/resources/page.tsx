"use client";

import { FaDownload, FaFilePdf, FaBookOpen, FaBalanceScale, FaVenus, FaTools, FaFileSignature, FaGavel, FaShieldAlt, FaGraduationCap, FaHome, FaLock } from "react-icons/fa";

interface Resource {
  title: string;
  desc: string;
  pdf: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const RESOURCES: Resource[] = [
  {
    title: "संविधान 101",
    desc: "भारतीय संविधान के मौलिक अधिकार, निर्देशक तत्वों और संरचना के बारे में जानें।",
    pdf: "/pdf/Constitution 101 (1).pdf",
    icon: FaBookOpen,
  },
  {
    title: "दलित अधिकार",
    desc: "SC/ST अत्याचार निवारण अधिनियम और अन्य कानूनी सुरक्षाओं के तहत अपने अधिकार जानें।",
    pdf: "/pdf/Dalit Rights.pdf",
    icon: FaBalanceScale,
  },
  {
    title: "महिलाएँ और बालिकाएँ",
    desc: "महिलाओं और बालिकाओं के लिए कानूनी सुरक्षा, सहायता तंत्र और अधिकार।",
    pdf: "/pdf/Women & Girls.pdf",
    icon: FaVenus,
  },
  {
    title: "श्रमिक अधिकार",
    desc: "श्रम कानून, न्यूनतम मजदूरी, कार्यस्थल सुरक्षा और शिकायत निवारण पर जानकारी।",
    pdf: "/pdf/Workers' Rights  (1).pdf",
    icon: FaTools,
  },
  {
    title: "सरकारी योजनाएँ",
    desc: "वंचित समुदायों के लिए कल्याण योजनाएँ, आरक्षण और अधिकारों पर व्यापक गाइड।",
    pdf: "/pdf/_Government Schemes.pdf",
    icon: FaFileSignature,
  },
  {
    title: "कानूनी सहायता",
    desc: "मुफ्त कानूनी सहायता कैसे लें, वकील कैसे ढूँढें और न्याय व्यवस्था में कैसे नेविगेट करें।",
    pdf: "/pdf/Legal Help.pdf",
    icon: FaGavel,
  },
  {
    title: "पुलिस और एफ.आई.आर.",
    desc: "एफ.आई.आर. दर्ज करने, पुलिस प्रक्रियाओं को समझने और जांच के दौरान अपने अधिकारों के लिए चरणबद्ध गाइड।",
    pdf: "/pdf/Police & FIR.pdf",
    icon: FaShieldAlt,
  },
  {
    title: "छात्रवृत्ति और शिक्षा",
    desc: "SC/ST/OBC छात्रों के लिए छात्रवृत्तियों, शैक्षिक योजनाओं और आरक्षणों की सूची।",
    pdf: "/pdf/Scholarships & Education.pdf",
    icon: FaGraduationCap,
  },
  {
    title: "ज़मीन और आवास",
    desc: "ज़मीन के अधिकार, दस्तावेजीकरण, आवास योजनाएँ और अवैध बहाली से सुरक्षा पर मार्गदर्शन।",
    pdf: "/pdf/_Land & Housing.pdf",
    icon: FaHome,
  },
  {
    title: "डिजिटल सुरक्षा",
    desc: "ऑनलाइन सुरक्षित रहें: साइबरक्राइम की रिपोर्टिंग, डिजिटल गोपनीयता और ऑनलाइन उत्पीड़न से बचाव।",
    pdf: "/pdf/Digital Safety.pdf",
    icon: FaLock,
  },
  {
    title: "SC/ST अत्याचार निवारण अधिनियम - हैंडबुक",
    desc: "प्रावधान, दंड और तात्कालिक राहत पुरस्कार नियमों पर पूर्ण वैधानिक गाइड।",
    pdf: "/pdf/SC_ST.pdf",
    icon: FaFilePdf,
  },
  {
    title: "संवैधानिक अधिकार और कानूनी सुरक्षा गाइड",
    desc: "मौलिक अधिकारों और भेदभाव के खिलाफ उपचारों पर विस्तृत शैक्षिक पुस्तिका।",
    pdf: "/pdf/Constitutional%20Rights%20and%20legal.pdf",
    icon: FaBookOpen,
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            ज्ञान केंद्र
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            कानूनी संसाधन और गाइड
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            कानूनी ज्ञान से अपने आप को सशक्त बनाने के लिए शैक्षिक पैम्फलेट्स, संवैधानिक गाइड और वैधानिक हैंडबुक डाउनलोड करें।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((res, index) => (
            <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#000000] flex items-center justify-center text-xl shrink-0">
                  <res.icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A2540] leading-snug">{res.title}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">{res.desc}</p>
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={res.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#000000] hover:underline"
                >
                  <FaDownload size={11} /> PDF डाउनलोड करें
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}