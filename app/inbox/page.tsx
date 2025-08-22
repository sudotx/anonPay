"use client";
import Container from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useInbox } from "@/lib/eerc";
// import { useAccount } from "wagmi";

export default function InboxPage() {
	//   const { address } = useAccount();
	//   const { items } = useInbox(address as `0x${string}`);
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


