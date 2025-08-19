import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "../components/Providers";
import "./globals.css";

const openSans = Open_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Anon Pay",
	description: "Receive payment with Encrypted ERC",
	icons: "favicon.ico"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
