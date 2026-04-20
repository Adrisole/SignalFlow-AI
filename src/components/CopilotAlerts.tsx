import React from 'react';
import { Bell, ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';

const alerts = [
  {
    id: 1,
    time: '2 mins ago',
    type: 'OPPORTUNITY',
    title: 'Bitcoin Opportunity at $64.2k',
    body: 'We are seeing a strong bounce at a key institutional buy zone. More importantly, the US Dollar (DXY) is losing steam, which gives BTC more room to run. Structure on 4H remains solid.',
    advice: 'Low risk entry. Watch the $65.5k resistance.',
    icon: <TrendingUp className="text-green-400" />
  },
  {
    id: 2,
    time: '1 hour ago',
    type: 'RISK',
    title: 'Market Noise: BTC/ETH',
    body: 'Price is currently trapped in a high-volatility range without clear institutional direction. The VIX is spiking above 22. It\'s best to wait for a clear structure break.',
    advice: 'Stay aside. SignalFlow will alert you when a high-probability zone is reached.',
    icon: <AlertTriangle className="text-yellow-400" />
  }
];

export default function CopilotAlerts() {
  return (
    <div className="flex flex-col gap-4">
      {alerts.map((alert) => (
        <div key={alert.id} className="glass p-6 rounded-2xl border-white/5 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg">
                {alert.icon}
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{alert.type}</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">{alert.time}</span>
          </div>
          
          <h4 className="text-lg font-bold font-heading mb-2 group-hover:text-[#00f2ff] transition-colors">{alert.title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{alert.body}</p>
          
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-xs font-bold text-slate-300">🛡️ Advice:</span>
            <span className="text-xs text-slate-400">{alert.advice}</span>
          </div>

          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent blur-xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
