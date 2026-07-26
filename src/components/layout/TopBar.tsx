import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="hidden lg:block bg-[#0A2540] text-white text-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-8">
            <a
              href="tel:+919235737691"
              className="flex items-center gap-2 hover:text-slate-300 transition"
            >
              <FaPhoneAlt />
              <span>+91 92357 37691</span>
            </a>

            <a
              href="mailto:help@ddjc.org"
              className="flex items-center gap-2 hover:text-slate-300 transition"
            >
              <FaEnvelope />
              <span>help@ddjc.org</span>
            </a>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>
                Police Line, Baghaura, Orai, Jalaun, Uttar Pradesh
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-slate-300 transition">
              <FaGlobe />
              EN | हिन्दी
            </button>

            <span className="text-slate-300 font-semibold">
              Justice • Equality • Human Rights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;