"use client";
import React, { useState } from 'react';
import { Activity, Bell, LayoutDashboard, TrendingUp, ShieldAlert, Cpu } from 'lucide-react';
import MarketPulse from '@/components/MarketPulse';
import CopilotInsight from '@/components/CopilotInsight';
import CopilotAlerts from '@/components/CopilotAlerts';

export default function Dashboard() {
  const [signals] = useState([
    { id: 1, asset: 'BTC/USDT', type: 'LONG', entry: '64,250', status: 'Active', conf: '94%', reason: 'MSB + OB' },
    { id: 2, asset: 'SPY', type: 'SHORT', entry: '512.40', status: 'Pending', conf: '72%', reason: 'FVG Fill' },
  ]);

  return (
    <div className="flex min-h-screen bg-[#0a0b10] text-white font-inter">
      {/* Sidebar - Same as before */}
      <aside className="hidden lg:flex w-72 border-r border-white/5 p-8 flex-col gap-10">
        <div className="text-2xl font-black tracking-tighter font-heading text-white">
          SIGNALFLOW<span className="text-[#00f2ff]">AI</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          <NavItem icon={<LayoutDashboard size={18} />} label="Overview" active />
          <NavItem icon={<Activity size={18} />} label="Alpha Stream" />
          <NavItem icon={<Cpu size={18} />} label="Copilot Lab" />
          <NavItem icon={<TrendingUp size={18} />} label="Analytics" />
          <NavItem icon={<Bell size={18} />} label="Alert Box" />
          <NavItem icon={<ShieldAlert size={18} />} label="Risk Center" />
        </nav>

        <div className="mt-auto">
          <div className="glass p-5 rounded-2xl border-cyan-500/10">
            <p className="text-[10px] text-slate-500 mb-1 font-bold uppercase">Plan Status</p>
            <p className="text-sm font-bold text-[#00f2ff]">Premium Copilot</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold font-heading tracking-tight">Investment Copilot</h1>
            <p className="text-slate-500 text-sm mt-1">Hello, Trader. Global liquidity is favoring your current bias.</p>
          </div>
          <div className="flex gap-3">
             <div className="glass px-4 py-2 rounded-xl text-xs flex items-center gap-2 border-white/5">
                <span className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-pulse"></span>
                Market Pulse: ACTIVE
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column: Intelligence Hub */}
          <div className="xl:col-span-8">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Latest Insights</h2>
            <CopilotInsight />
            
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Macro Pulse</h2>
            <MarketPulse />

            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Institutional Signals</h2>
            <section className="glass rounded-3xl overflow-hidden border-white/5">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                        <tr className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-white/5 bg-white/[0.02]">
                            <th className="p-6">Asset</th>
                            <th className="p-6">Type</th>
                            <th className="p-6">Trigger</th>
                            <th className="p-6 text-right">Action</th>
                        </tr>
                        </thead>
                        <tbody className="text-sm">
                        {signals.map((s) => (
                            <tr key={s.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-6 font-bold">{s.asset}</td>
                            <td className={`p-6 font-bold ${s.type === 'LONG' ? 'text-green-400' : 'text-red-400'}`}>{s.type}</td>
                            <td className="p-6 text-slate-400 text-xs">{s.reason}</td>
                            <td className="p-6 text-right">
                                <button className="text-xs font-bold text-[#00f2ff]">View Chart</button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
          </div>

          {/* Right Column: Alert History */}
          <div className="xl:col-span-4">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Alert Narrative</h2>
            <CopilotAlerts />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-4 py-3 text-sm font-bold cursor-pointer transition-all ${active ? 'text-[#00f2ff] translate-x-1' : 'text-slate-500 hover:text-white'}`}>
      <span className={active ? 'text-[#00f2ff]' : ''}>{icon}</span>
      <span>{label}</span>
      {active && <div className="ml-auto w-1 h-4 bg-[#00f2ff] rounded-full"></div>}
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-4 py-3 text-sm font-bold cursor-pointer transition-all ${active ? 'text-[#00f2ff] translate-x-1' : 'text-slate-500 hover:text-white'}`}>
      <span className={active ? 'text-[#00f2ff]' : ''}>{icon}</span>
      <span>{label}</span>
      {active && <div className="ml-auto w-1 h-4 bg-[#00f2ff] rounded-full"></div>}
    </div>
  );
}
