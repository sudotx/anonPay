"use client";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { avalancheFuji } from "wagmi/chains";

const config = getDefaultConfig({
	appName: "My RainbowKit App",
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "placeholder_project_id",
	chains: [avalancheFuji],
	ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>{children}</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
