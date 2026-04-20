import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { OpenAI } from "https://deno.land/x/openai/mod.ts"

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")
const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")
const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID") // Canal Premium Chat ID

serve(async (req) => {
  try {
    // 1. Recibir datos técnicos de TradingView
    const { asset, side, price, dxy_context, vwap_status, timeframe } = await req.json()

    // 2. Configurar el "Cerebro" de IA (Senior Wall Street Strategist)
    const openai = new OpenAI(OPENAI_API_KEY)
    
    const systemPrompt = `
      Actúa como un estratega senior de Wall Street. 
      Tu objetivo es convertir datos técnicos en una alerta de inversión corta, humana y con contexto macro.
      No uses lenguaje genérico. Sé directo y profesional.
      Idioma: Inglés (para mercado Tier 1).
    `

    const userPrompt = `
      Data received: 
      - Asset: ${asset}
      - Action: ${side}
      - Price: ${price}
      - Dollar Index (DXY): ${dxy_context}
      - Indicator (VWAP): ${vwap_status}
      - Timeframe: ${timeframe}

      Format established:
      🚀 [Headline with Asset and Action]
      📝 [Brief explanation: Why is this happening? Mention DXY context]
      🛡️ [Risk advice]
    `

    // 3. Generar la narrativa humanizada (GPT-4o-mini por eficiencia)
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
    })

    const aiMessage = completion.choices[0].message?.content

    // 4. Entrega Omni-canal (Telegram Premium)
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: aiMessage,
                parse_mode: 'Markdown'
            })
        })
    }

    return new Response(JSON.stringify({ 
        success: true, 
        narrative: aiMessage 
    }), { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
    })
  }
})
