import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CopilotInsight() {
  return (
    <div className="glass p-6 rounded-3xl border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent mb-10">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
          <Sparkles size={18} />
        </div>
        <h3 className="font-bold text-lg font-heading">Copilot Intelligence</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <p className="text-slate-300 leading-relaxed">
            Market conditions are <span className="text-green-400 font-bold">Optimistic</span>. 
            The Dólar Index (DXY) is facing heavy resistance, which traditionally creates a "tailwind" for Bitcoin and US Equities. 
            Institutional order flow is concentrating around the $64,000 support level.
          </p>
          <div className="mt-4 flex gap-3 text-xs font-bold uppercase tracking-widest text-[#00f2ff]">
            <span>#Bullish_Context</span>
            <span>#DXY_Weakness</span>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-cyan-100 transition-colors w-full md:w-auto justify-center">
            View Active Setup <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
