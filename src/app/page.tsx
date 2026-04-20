import Link from 'next/link';
import Pricing from '@/components/Pricing';
import LeadMagnet from '@/components/LeadMagnet';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b10]">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-12 text-center relative overflow-hidden">
        <div className="glass p-12 rounded-3xl border-white/5 max-w-3xl z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-6 uppercase tracking-widest">
            Institutional Intelligence
          </div>
          <h1 className="text-6xl md:text-7xl font-black font-heading tracking-tight mb-6 leading-tight text-white">
            Stop Overtrading.<br />Start <span className="text-[#00f2ff]">Flowing</span>.
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            The first Intelligent Copilot that translates market data into actionable institutional context. 
            Built for retail traders who want to win like the banks.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="bg-[#00f2ff] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)]">
              Launch App
            </Link>
            <a href="#pricing" className="border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
        
        {/* Abstract Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Lead Magnet Section */}
      <LeadMagnet />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center text-slate-600 text-xs">
        <p>© 2026 SignalFlow AI. High-performance signals. Higher intelligence.</p>
      </footer>
    </main>
  );
}
