import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Key, ArrowRightLeft, Inbox, Download } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">PrivateERC</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Docs
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                About
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Launch App</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            Privacy-First DeFi Protocol
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Secure Your Transactions with <span className="text-accent">Trusted Privacy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your ERC20 tokens into encrypted versions for completely private transfers, with selective
            disclosure for auditing when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Get Started
              <ArrowRightLeft className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Complete Privacy Control</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of private transactions with full control over your financial privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRightLeft className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">1:1 Token Conversion</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Deposit your ERC20 tokens and mint encrypted eERC20 versions at a perfect 1:1 ratio.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Private Transfers</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Send eERC20 tokens between wallets with transaction amounts completely hidden from public view.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Inbox className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Recipient Inbox</CardTitle>
                <CardDescription className="text-muted-foreground">
                  View all received funds in a secure, private inbox interface designed for your privacy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Seamless Withdrawal</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Convert your eERC20 tokens back to public ERC20 tokens whenever you need them.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Viewing Key Export</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Export viewing keys for selective disclosure and auditing purposes when transparency is needed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Selective Disclosure</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Choose exactly what transaction details to reveal and to whom, maintaining control over your privacy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to complete privacy for your token transactions.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Deposit & Mint</h3>
                <p className="text-muted-foreground">
                  Deposit your ERC20 tokens into the protocol and receive encrypted eERC20 tokens at a 1:1 ratio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Private Transfer</h3>
                <p className="text-muted-foreground">
                  Send eERC20 tokens to any wallet address with transaction amounts hidden from blockchain explorers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Manage & Withdraw</h3>
                <p className="text-muted-foreground">
                  View received funds in your private inbox and withdraw back to public ERC20 tokens when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Secure Your Transactions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the privacy revolution and take control of your financial data today.
          </p>
          <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
            Launch Application
            <ArrowRightLeft className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-foreground">PrivateERC</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 PrivateERC. Built for privacy-conscious DeFi users.
          </div>
        </div>
      </footer>
    </div>
  )
}
