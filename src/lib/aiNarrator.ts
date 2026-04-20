/**
 * SIGNALFLOW AI - INTELLIGENT NARRATOR SERVICE
 * This service transforms technical data into a professional "Bloomberg-style" narrative.
 */

export const MASTER_PROMPT = `
Actúa como un estratega senior de inversiones para un fondo de cobertura. 
Tu tarea es convertir datos técnicos en una notificación push breve, persuasiva y fácil de entender.

REGLAS:
1. No uses lenguaje robótico.
2. Explica el 'POR QUÉ' basándote en la correlación macro (DXY) y técnica.
3. Mantén el tono profesional pero cercano.
4. Máximo 60 palabras.
5. Estructura del mensaje:
   🚀 [Oportunidad/Alerta] + [Activo]
   📝 [Explicación del contexto técnico + macro]
   🛡️ [Recomendación de riesgo]
`;

export interface MarketData {
    ticker: string;
    action: string;
    price: number;
    rsi: number;
    dxy_status: string; // e.g., 'Weakening', 'Surging', 'Stable'
    vix_index: number;
    reason: string; // e.g., 'Order Block detected', 'Structure Break'
}

/**
 * MOCK: Simulates the response from OpenAI using the Master Prompt.
 * In production, this targets the OpenAI API.
 */
export function generateSmartNarrative(data: MarketData): string {
    // Example logic that simulates what the AI would do
    return `🚀 ${data.action === 'LONG' ? 'Opportunity' : 'Warning'} on ${data.ticker} at $${data.price}
📝 We see a strong bounce at a key institutional zone. With the DXY currently ${data.dxy_status}, ${data.ticker} has more room to move. Structure remains solid on high timeframes.
🛡️ Advice: ${data.vix_index > 20 ? 'High volatility - use strict stops.' : 'Low risk entry. Watch local resistance.'}`;
}

// 3 Examples of how the Assistant speaks:

/* 
EXAMPLE 1: CONVICTION BUY
🚀 Bitcoin Opportunity at $64.2k
📝 We are seeing a strong bounce at a key institutional buy zone. More importantly, the US Dollar (DXY) is losing steam, which gives BTC more room to run. Structure on 4H remains solid.
🛡️ Advice: Low risk entry. Watch the $65.5k resistance.

EXAMPLE 2: RISK ALERT
🚀 Warning: Equity Exposure (SPY)
📝 Market structure has shifted bearish after a failure to hold the value area. The DXY is surging, creating a headwind for equities. Volume suggests institutions are distributing.
🛡️ Advice: Protection mode. Tighten your stops or reduce exposure.

EXAMPLE 3: STAY ASIDE
🚀 Market Noise: BTC/ETH
📝 Price is currently trapped in a high-volatility range without clear institutional direction. The VIX is spiking above 22. It's best to wait for a clear structure break.
🛡️ Advice: Stay aside. SignalFlow will alert you when a high-probability zone is reached.
*/
