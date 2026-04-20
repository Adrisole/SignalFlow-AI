import React from 'react';
import { Mail, ArrowRight, Gauge, Activity, Globe } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-[#00f2ff]/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The "Free" Value Tool */}
        <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-heading font-bold text-xl flex items-center gap-2">
              <Activity className="text-[#00f2ff]" size={20} />
              Global Liquidity Monitor
            </h3>
            <span className="text-[10px] bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
              Live Free Sample
            </span>
          </div>

          {/* Mock Visualization: DXY vs BTC Correlation */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-2 font-bold uppercase tracking-widest">
                <span>Dólar Index (DXY)</span>
                <span className="text-red-400">-0.24%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 w-[60%] animate-pulse"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-2 font-bold uppercase tracking-widest">
                <span>Risk Assets Exposure</span>
                <span className="text-[#00f2ff]">+1.45%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00f2ff] w-[85%] animate-pulse"></div>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
              <p className="text-xs text-slate-400 italic">
                "Technical insight: DXY is losing strength at the 104.5 level. This historically correlates with a 5-8% upside momentum in Crypto and Tech Stocks over the next 48 hours."
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00f2ff]/10 blur-[60px] rounded-full"></div>
        </div>

        {/* Right Side: Copy & CTA */}
        <div>
          <div className="inline-flex items-center gap-2 text-[#00f2ff] text-sm font-bold mb-6">
            <Gauge size={18} />
            <span>INSTITUTIONAL EDGE FOR FREE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6 text-white">
            Stop Trading Blind. <br /> Get the <span className="text-[#00f2ff]">Liquidity Map</span>.
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            We track the flow of $100B+ in daily institutional volume. Sign up for our 
            weekly "Alpha Letter" and get free access to our real-time DXY/Crypto correlation dashboard.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all font-medium"
              />
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-100 transition-all">
              Unlock Full Access <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-[10px] text-slate-600 mt-4 px-2">
            No spam. Just institutional context. Join 12,000+ traders in the waitlist.
          </p>
        </div>

      </div>
    </section>
  );
}
