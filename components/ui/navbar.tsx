"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();
	const links = [
		{ href: "/deposit", label: "Deposit" },
		{ href: "/send", label: "Send" },
		{ href: "/withdraw", label: "Withdraw" },
		{ href: "/inbox", label: "Inbox" },
		{ href: "/settings", label: "Settings" },
	];

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					AnonPay
				</Link>
				<div className="hidden md:flex items-center space-x-4">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								pathname === href
									? "bg-gray-900 text-white"
									: "text-gray-700 hover:bg-gray-200"
							}`}
						>
							{label}
						</Link>
					))}
				</div>
				<ConnectButton />
			</div>
		</nav>
	);
};

export default Navbar;
