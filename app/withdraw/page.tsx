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
import { useAccount } from "wagmi";
import { formatUnits, parseUnits } from "viem";

export default function WithdrawPage() {
	const [amount, setAmount] = useState("");
	const { withdraw, decryptedBalance, decimals } = useErcAbstractions();
	const { address } = useAccount();

	console.log(address)

	const handleWithdraw = async () => {
		if (!amount) return;
		const parsedAmount = parseUnits(amount, Number(decimals) || 18);
		await withdraw(parsedAmount);
	};

	return (
		<Container>
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Withdraw</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div>
							<p className="text-sm text-gray-500">
								Private balance:{" "}
								{formatUnits(decryptedBalance ?? BigInt(0), Number(decimals) || 18)}
							</p>
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
					<Button onClick={handleWithdraw}>Withdraw to my address</Button>
				</CardFooter>
			</Card>
		</Container>
	);
}


