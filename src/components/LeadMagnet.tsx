import React from 'react';
import { ShieldCheck, ArrowRight, ShieldAlert, Globe } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section id="waitlist" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#00f2ff]/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The "Shock" Value Tool */}
        <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-heading font-bold text-xl flex items-center gap-2">
              <ShieldAlert className="text-[#00f2ff]" size={20} />
              Calculadora de Inacción
            </h3>
            <span className="text-[10px] bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
              Alerta de Ahorro
            </span>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <p className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-widest">Si dejás tus ahorros quietos (1 mes):</p>
              <p className="text-3xl font-black text-red-400">-$95.400 <span className="text-xs font-normal text-slate-500 tracking-normal">perdidos vs Inflación</span></p>
            </div>

            <div className="p-5 bg-[#00f2ff]/5 border border-[#00f2ff]/20 rounded-2xl relative overflow-hidden">
              <p className="text-[10px] text-[#00f2ff] mb-1 font-bold uppercase tracking-widest">Con nuestra Acción GPS del mes:</p>
              <p className="text-3xl font-black text-green-400">+$124.000 <span className="text-xs font-normal text-slate-400 tracking-normal text-white/60">protegidos y en flujo</span></p>
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <ShieldCheck size={40} className="text-[#00f2ff]" />
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] rounded-2xl text-[11px] text-slate-500 leading-relaxed italic border border-white/5">
              "El costo de no saber lo que está pasando en Wall Street es lo que dejás de comprar hoy en el súper. SignalFlow te dice qué hacer por el costo de dos cafés."
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00f2ff]/10 blur-[60px] rounded-full"></div>
        </div>

        {/* Right Side: Copy & CTA */}
        <div>
          <div className="inline-flex items-center gap-2 text-[#00f2ff] text-sm font-bold mb-6">
            <Globe size={18} />
            <span>EL GPS PARA TU BOLSILLO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-6 text-white leading-tight">
            Dejá de perder contra <br /> <span className="text-[#00f2ff]">el Dólar y el Súper</span>.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            No necesitás ser un experto. Solo necesitás a alguien que te diga: "Hacé este movimiento" de forma simple, barata y automatizada.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Email donde proteger tus ahorros" 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all font-medium"
            />
            <button className="bg-[#00f2ff] text-black px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all">
              Proteger mis Ahorros <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-[10px] text-slate-600 mt-5 px-2">
            Unite a los 1.000+ ahorristas que ya están blindando su bolsillo.
          </p>
        </div>
      </div>
    </section>
  );
}
