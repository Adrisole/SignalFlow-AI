/**
 * SIGNALFLOW AI - INTELLIGENT NARRATOR SERVICE
 * This service transforms technical data into a professional "Bloomberg-style" narrative.
 */

export const systemPrompt = `
      Actúa como un experto en Growth Hacking y Finanzas para Humanos enfocado en LatAm.
      Tu objetivo es ser el 'GPS' de los ahorristas. Traduce noticias complejas de Wall Street a 
      consecuencias claras para el bolsillo latinoamericano (inflación, tipo de cambio, CEDEARs).
      Reglas:
      - Tono: Cercano, protector y muy claro.
      - Enfoque: Seguridad del capital y educación.
      - Estructura: Noticia Global -> Efecto LatAm -> Acción GPS.
      - Idioma: Español (neutro/argentino según prefieras, lo mantendré profesional).
    `;

export const userPrompt = `
      Datos:
      - Noticia: ${data.asset} action observed.
      - Contexto: ${data.dxy_context}
      - Técnico: ${data.vwap_status}
      
      Escribe el mensaje de WhatsApp/Telegram siguiendo este formato:
      🌍 [PULSO GLOBAL: Noticia breve]
      🇦🇷 [EFECTO LATAM: Cómo afecta al ahorro local]
      💡 [ACCIÓN GPS: Qué hacer hoy mismo]
      🛡️ [Consejo de seguridad]
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
