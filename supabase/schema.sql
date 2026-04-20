-- SIGNALFLOW AI - DATABASE SCHEMA (SUPABASE/POSTGRES)

-- 1. Signals Table: Raw technical alerts from TradingView
CREATE TABLE signals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ticker TEXT NOT NULL,
    action TEXT NOT NULL, -- LONG, SHORT, EXIT
    price NUMERIC NOT NULL,
    strategy_logic TEXT, -- SMC_OB, MSB, FVG
    confidence_score INTEGER,
    is_active BOOLEAN DEFAULT TRUE
);

-- 2. Market Pulse: Macro environmental data
CREATE TABLE market_pulse (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    dxy_value NUMERIC,
    vix_value NUMERIC,
    fear_greed_score INTEGER,
    macro_sentiment TEXT, -- BEARISH_DOLLAR, BULLISH_RISK
    recommendation TEXT -- STAY_ASIDE, RISK_ON, RISK_OFF
);

-- 3. AI Narratives: The "Humanized" version of technical events
CREATE TABLE ai_narratives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    signal_id UUID REFERENCES signals(id),
    pulse_id UUID REFERENCES market_pulse(id),
    narrative_en TEXT,
    narrative_es TEXT,
    tone TEXT DEFAULT 'Professional'
);

-- 4. Subscriptions & Users
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    full_name TEXT,
    subscription_tier TEXT DEFAULT 'FREE', -- FREE, PRO, PREMIUM
    telegram_id TEXT,
    has_onboarding_completed BOOLEAN DEFAULT FALSE
);

-- Index for fast performance on active signals
CREATE INDEX idx_active_signals ON signals(is_active);
