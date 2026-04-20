# SignalFlow Copilot - Telegram Bot Setup

## 🤖 Bot Personality
**Name:** SignalFlow Copilot
**Tone:** Senior Market Strategist (Professional, authoritative, yet approachable).
**Language:** Default English (Premium).

---

## ⚡ Core Commands

### `/start` - Welcome Message
> "Welcome to the Elite, Trader. 🚀 
> I am your **SignalFlow Copilot**. While you focus on your life, I'm monitoring the 14 most important institutional liquidity streams in the world. 
> 
> You will receive real-time, human-narrated alerts only when high-probability setups align.
> 
> **Available Commands:**
> `/macro` - Get current DXY/VIX status.
> `/signals` - Review last 3 active alerts.
> `/status` - Check your subscription."

### `/macro` - Market Pulse Update
> "📊 **Current Global Pulse:**
> - **Dólar Index (DXY):** 104.20 (Weakening 🔴)
> - **Volatility (VIX):** 14.5 (Low Risk 🟢)
> 
> **Copilot Insight:** Institutional liquidity is currently favoring equities and BTC. The environment is supportive for risk-on positions."

### `/signals` - Signal Recap
> "🔍 **Recent Signal Flow:**
> 1. **BTC/USD (LONG)** - Active since $64.2k. Target: $65.5k.
> 2. **SPY (SHORT)** - Pending structure break.
> 
> Use the Dashboard to view deep technical analysis."

---

## 🔐 Premium Channel Logic
1. **Invite Links:** Users receive a unique, one-time invite link after successful Stripe payment.
2. **Access Control:** The Supabase Edge Function checks `user_profiles.subscription_tier` before delivering messages.
3. **Churn Prevention:** If a subscription is canceled, the bot automatically removes the user from the channel (via Telegram API `kickChatMember`).
