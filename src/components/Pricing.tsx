import React from 'react';
import { Check, ShieldCheck, Zap, Crown } from 'lucide-react';

const tiers = [
  {
    name: "Ahorrista GPS",
    price: "5",
    description: "Tu guía diaria para que la inflación no te gane.",
    features: [
      "Alertas WhatsApp/Telegram", 
      "Explicación Macro (Lente LatAm)", 
      "Píldora Educativa Diaria", 
      "Asistente para tu bolsillo"
    ],
    cta: "Proteger mis Ahorros",
    icon: <ShieldCheck className="text-[#00f2ff]" />,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-white">
          Choose Your Level of <span className="text-[#00f2ff]">Alpha</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Stop paying for data. Start paying for intelligence. All plans include 
          real-time institutional flow detection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <div key={i} className={`glass p-8 rounded-3xl border-white/5 relative flex flex-col ${tier.popular ? 'border-cyan-500/30 scale-105 z-10' : ''}`}>
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00f2ff] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <div className="mb-4">{tier.icon}</div>
              <h3 className="text-xl font-bold font-heading text-white">{tier.name}</h3>
              <p className="text-slate-500 text-sm mt-2">{tier.description}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-black text-white">${tier.price}</span>
              <span className="text-slate-500 text-sm italic"> /month</span>
            </div>

            <ul className="flex-1 flex flex-col gap-4 mb-10">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check size={16} className="text-[#00f2ff] mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${tier.popular ? 'bg-[#00f2ff] text-black hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]' : 'bg-white/5 text-white hover:bg-white/10'}`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
