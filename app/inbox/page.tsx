"use client";
import Container from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useErcAbstractions } from "@/lib/eerc";
import { useAccount } from "wagmi";

export default function InboxPage() {
	const { address } = useAccount();
	const { decryptedBalance, decimals } = useErcAbstractions();

	console.log(address, decryptedBalance, decimals)
	return (
		<Container>
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Inbox</CardTitle>
				</CardHeader>
				<CardContent>
					<p>View your private transactions here.</p>
				</CardContent>
			</Card>
		</Container>
	);
}


