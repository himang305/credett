# Credett - Web3 Payment Gateway Infrastructure

Credett is an institutional-grade Web3 payment infrastructure and gateway platform designed for global businesses. It enables merchants to accept 100+ crypto assets across 10+ blockchains with instant, volatility-free settlement into stablecoins or fiat.

---

## 🚀 Key Features

- **Multi-Chain & Multi-Token Payments**: Accept cryptocurrencies across Ethereum, Solana, Polygon, Arbitrum, BSC, and more.
- **Zero Volatility Settlement**: Instant auto-conversion of received crypto into stablecoins (USDT, USDC) or bank fiat payouts.
- **Enterprise Security**: Institutional vault integration, multi-sig support, and compliance-ready architecture.
- **Developer-Friendly Integration**: Easy-to-use APIs, webhooks, ready-made checkout widgets, and sandbox testing.
- **Comprehensive Merchant Suite**: Detailed transaction monitoring, team permission controls, payout management, and analytics.

---

## 📱 Flows Covered

### 1. 🌐 Landing & Product Showcase (`index.html`)
- Marketing presentation of platform capabilities, security architecture, and supported blockchains.
- Interactive fee calculator and pricing comparison.
- Ecosystem trust badges, FAQ, and conversion touchpoints.

### 2. 🔐 Authentication & Onboarding (`auth.html`)
- Merchant & admin login and registration.
- Multi-factor authentication (2FA) and Web3 wallet sign-in (MetaMask, Phantom, WalletConnect).
- Business onboarding and KYC verification workflows.

### 3. 💳 Web3 Checkout Experience (`checkout.html`)
- Hosted checkout modal and customer payment flow.
- Token and network selector with real-time exchange rates.
- Dynamic QR code generation, address copy, and countdown payment timer.
- Live payment state transitions (Pending → Confirming → Success/Failed).

### 4. 📊 Merchant Dashboard (`merchant-dashboard.html`)
- High-level overview of revenue, transaction volume, and conversion rates.
- Recent payment activities, balance distribution, and quick action shortcuts.

### 5. 💰 Payment Management (`merchant-payments.html`)
- Comprehensive transaction history ledger with status filters (Completed, Pending, Failed).
- Search, date range filtering, export reports (CSV/PDF), and dispute/refund workflows.

### 6. 🏦 Settlements & Payouts (`merchant-settlement.html`)
- Configurable auto-settlement rules (Instant, Daily, Threshold-based).
- Multi-destination routing (Bank wire, Stablecoin hot/cold vaults).
- Payout history, batch transfer management, and fee breakdowns.

### 7. 👥 Team & Permissions (`merchant-team.html`)
- Team member invitations and role assignments (Admin, Finance, Developer, Viewer).
- Granular permission matrix and access control.
- Security audit logs tracking sensitive user actions.

### 8. 🛠️ Developer Hub & API (`merchant-developers.html`)
- Public/Secret API key management (Live & Sandbox environments).
- Webhook endpoint configuration and test ping utilities.
- Code samples for integration and interactive API logs.

### 9. 🛡️ Admin Dashboard (`admin-dashboard.html`)
- Platform-wide operations console.
- Global transaction volume monitoring, merchant KYC approval queues, and system health status.

---

## 📂 Project Structure

```
.
├── index.html                # Marketing & Landing Page
├── auth.html                 # Authentication & Onboarding
├── checkout.html             # Customer Payment Gateway / Checkout
├── merchant-dashboard.html   # Main Merchant Analytics & Overview
├── merchant-payments.html    # Transactions & Payment Ledger
├── merchant-settlement.html  # Payouts & Settlement Rules
├── merchant-team.html        # Team Member & Role Management
├── merchant-developers.html  # API Keys, Webhooks & Docs
├── admin-dashboard.html      # Platform Administration Portal
└── shared/
    ├── style.css             # Shared CSS variables & component styles
    └── app.js                # Shared utility scripts and interactive handlers
```

---

## ⚡ Getting Started

Simply open any `.html` file in a modern browser, or run a local HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .
```
