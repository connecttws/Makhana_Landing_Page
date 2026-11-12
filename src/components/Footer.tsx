import React from 'react';
import { ShieldCheck, Award, Heart, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#143D31] text-[#B8D7C8] pt-16 pb-12 border-t-2 border-[#1E5746] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Brand & Certifications Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#1E5746]">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-[#1F5C4A] font-black text-sm flex items-center justify-center">
                M
              </div>
              <span className="text-2xl font-black tracking-tight text-white block">
                MITHILA NATURALE
              </span>
            </div>
            <p className="text-xs text-[#A1C7B4] leading-relaxed font-medium">
              Preserving ancient wetland traditions of Northern Bihar. Direct-from-source, wood-fire roasted jumbo Fox Nuts from indigenous farming cooperatives to your doorstep.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold text-[#FFE8D6] bg-[#FF7A00]/20 border border-[#FF7A00]/40 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB872]" />
              <span>100% Risk-Free Guarantee</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-sm">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-[#A1C7B4] font-medium">
              <li>
                <a href="#purchase" className="hover:text-white transition-colors">Select Pack &amp; Flavors</a>
              </li>
              <li>
                <a href="#psychology" className="hover:text-white transition-colors">The Psychology of Crunch</a>
              </li>
              <li>
                <a href="#superfood" className="hover:text-white transition-colors">Nutritional Comparison</a>
              </li>
              <li>
                <a href="#guarantees" className="hover:text-white transition-colors">100% Ironclad Guarantees</a>
              </li>
              <li>
                <a href="#harvest" className="hover:text-white transition-colors">Mithila Origin &amp; Craft</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-sm">
              Customer Support &amp; Concierge
            </h4>
            <div className="space-y-2.5 text-[#A1C7B4] font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFB872] shrink-0" />
                <span>care@mithilanaturale.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB872] shrink-0" />
                <span>+91 98112 40590 (Mon–Sat 10am–7pm)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFB872] shrink-0" />
                <span>Mithila Wetlands Hub, Darbhanga, Bihar 846004</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-sm">
              Certified Credentials
            </h4>
            <div className="space-y-2 text-[#A1C7B4] font-medium">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFB872] shrink-0" />
                <span>Govt. GI Tag No. 842 · Mithila</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>FSSAI Lic. #10423000000841</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>100% Vegan &amp; Vrat Permissible</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#89B39F] font-medium">
          <p>© {new Date().getFullYear()} Mithila Naturale Agro Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Shipping &amp; 100% Refund Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
