/**
 * SIGNALFLOW AI - TELEGRAM BOT MOCK LOGIC
 * This simulates how the bot responds to commands using the "Senior Strategist" persona.
 */

export const BOT_RESPONSES = {
  START: `
Welcome to the Elite, Trader. 🚀 
I am your **SignalFlow Copilot**. From now on, I will monitor global liquidity for you.

You will receive real-time, human-narrated alerts ONLY when high-probability setups align.

**Available Commands:**
/macro - Current Market Pulse.
/signals - Review recent alerts.
/status - Subscription details.
  `,
  
  MACRO: (dxy: string, vix: number) => `
📊 **Current Global Pulse:**
- **Dólar Index (DXY):** ${dxy} (${parseFloat(dxy) > 104.5 ? 'Surging 🟢' : 'Weakening 🔴'})
- **Volatility (VIX):** ${vix} (${vix > 20 ? 'High Risk 🔴' : 'Stable 🟢'})

**Copilot Insight:** ${vix > 20 
  ? 'Market conditions are turbulent. Step away or tighten risk.' 
  : 'Liquidity environment is supportive for institutional follow-through.'}
  `,

  SIGNALS: [
    { asset: 'BTC/USD', type: 'LONG', entry: '$64,250', status: 'In Progress' },
    { asset: 'SPY', type: 'SHORT', entry: '$512.40', status: 'Pending' }
  ]
};

/**
 * Simulates sending a message through the Bot.
 */
export async function simulateBotResponse(command: string) {
    console.log(`[Telegram Bot] Receiving command: ${command}`);
    
    switch(command) {
        case '/start':
            return BOT_RESPONSES.START;
        case '/macro':
            return BOT_RESPONSES.MACRO('104.20', 14.5);
        default:
            return "Command not recognized. Use /start for help.";
    }
}
