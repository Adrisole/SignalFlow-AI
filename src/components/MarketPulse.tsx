import React from 'react';
import { Globe, TrendingDown, ArrowUpRight } from 'lucide-react';

export default function MarketPulse() {
  const metrics = [
    { label: 'DXY (Dollar Index)', value: '104.20', status: 'Rising', trend: 'down', info: 'Pressure on Gold/BTC' },
    { label: 'VIX (Volatility)', value: '14.50', status: 'Low', trend: 'up', info: 'Safe for Trading' },
    { label: 'EUR/USD', value: '1.0840', status: 'Stable', trend: 'neutral', info: 'No major shift' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {metrics.map((m, i) => (
        <div key={i} className="glass p-5 rounded-2xl border-white/5 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{m.label}</span>
            <Globe size={14} className="text-slate-500" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold font-heading">{m.value}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded ${m.status === 'Rising' ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
              {m.status}
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 italic">“{m.info}”</p>
        </div>
      ))}
    </div>
  );
}
