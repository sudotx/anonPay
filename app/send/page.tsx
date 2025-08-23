"use client";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useErcAbstractions } from "@/lib/eerc";
import { useState } from "react";
import { parseUnits } from "viem";

export default function SendPage() {
	const [to, setTo] = useState("");
	const [amount, setAmount] = useState("");
	const { privateTransfer, isAddressRegistered, decimals } =
		useErcAbstractions();

	const handleTransfer = async () => {
		if (!to || !amount) return;

		const { isRegistered: isToRegistered } = await isAddressRegistered(
			to as `0x${string}`
		);
		if (!isToRegistered) {
			alert("Recipient is not registered");
			return;
		}

		const parsedAmount = parseUnits(amount, Number(decimals) || 18);
		await privateTransfer(to, parsedAmount);
	};

	return (
		<Container>
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Send</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="to">To</Label>
							<Input
								id="to"
								value={to}
								onChange={(e) => setTo(e.target.value)}
								placeholder="0x..."
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="amount">Amount</Label>
							<Input
								id="amount"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								placeholder="1.0"
							/>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<Button onClick={handleTransfer}>Send private</Button>
				</CardFooter>
			</Card>
		</Container>
	);
}


