# Anon pay 
## Overview

Anonpay is a privacy focused decentralized finance (DeFi) app that enables users to transform their ERC20 tokens into encrypted versions for completely private transactions.
## Key Features

### 🔒 **Complete Privacy Control**
- **1:1 Token Conversion**: Deposit ERC20 tokens and mint encrypted eERC20 versions at perfect 1:1 ratio
- **Private Transfers**: Send eERC20 tokens with transaction amounts hidden from blockchain explorers
- **Recipient Inbox**: Secure, private interface for viewing received funds
- **Seamless Withdrawal**: Convert eERC20 tokens back to original ERC20 tokens
- **Viewing Key Export**: Export viewing keys for selective disclosure
- **Selective Disclosure**: Share transaction details only when needed for compliance

### 🎨 **Modern User Experience**
- **Beautiful Design System**: OKLCH color space with purple accent theme
- **Dark Mode Support**: Complete dark/light theme switching
- **Responsive Design**: Mobile first approach with Tailwind CSS
- **Intuitive Interface**: Clean, professional UI with shadcn/ui components

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library

### Web3 Integration
- **RainbowKit** - Wallet connection and management
- **Wagmi** - React hooks for Ethereum
- **WalletConnect v2** - Multi-wallet connectivity
- **Avalanche Fuji** - Testnet deployment

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development bundler

## Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn or npm
- MetaMask or other Web3 wallet
- Avalanche Fuji testnet tokens

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anonPay
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
   ```

4. **Start the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
anonPay/
├── app/                    # Next.js App Router pages
│   ├── deposit/           # Deposit page
│   ├── send/              # Send page
│   ├── withdraw/          # Withdraw page
│   ├── inbox/             # Inbox page
│   ├── settings/          # Settings page
│   ├── globals.css        # Global styles with design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── operations/       # Operation-specific components
│   ├── Providers.tsx     # Web3 providers setup
│   └── web-components.tsx
├── lib/                  # Utility libraries
├── config/               # Configuration files
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Usage

### 1. **Deposit Tokens**
- Connect your wallet
- Navigate to the Deposit page
- Select the ERC20 token you want to deposit
- Approve and deposit to receive eERC20 tokens

### 2. **Send Private Payments**
- Go to the Send page
- Enter recipient address and amount
- Send eERC20 tokens privately
- Transaction amounts are hidden on-chain

### 3. **Receive Payments**
- Check your Inbox for received payments
- View transaction details with your viewing key
- Manage your private transaction history

### 4. **Withdraw Funds**
- Navigate to Withdraw page
- Convert eERC20 tokens back to original ERC20
- Maintain privacy throughout the process

## Design System

The application uses a comprehensive design system built with:

- **OKLCH Color Space**: Modern color representation for better accessibility
- **Purple Accent Theme**: Professional purple accent colors
- **Dark Mode Support**: Complete theme switching
- **Responsive Breakpoints**: Mobile-first design approach
- **Component Variants**: Consistent UI patterns

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Join our community discussions

---

**Built with love for the privacy first DeFi ecosystem and avalanche ecosystem**