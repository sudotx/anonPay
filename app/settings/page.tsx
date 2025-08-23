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
import { useErcAbstractions } from "@/lib/eerc";

export default function SettingsPage() {
	const { generateDecryptionKey } = useErcAbstractions();

	return (
		<Container>
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Settings</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-2">
						<p className="text-sm text-gray-500 mt-2">
							Generate a decryption key to view your private balances.
						</p>
					</div>
				</CardContent>
				<CardFooter>
					<Button onClick={() => generateDecryptionKey()}>
						Generate Decryption Key
					</Button>
				</CardFooter>
			</Card>
		</Container>
	);
}


