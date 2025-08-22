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
import { useExportKey } from "@/lib/eerc";
import { useState } from "react";

export default function SettingsPage() {
	const [key, setKey] = useState("");
	const { setViewingKey } = useExportKey();

	return (
		<Container>
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Settings</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-2">
						<Label htmlFor="viewing-key">Viewing Key</Label>
						<Input
							id="viewing-key"
							value={key}
							onChange={(e) => setKey(e.target.value)}
							placeholder="my-secret-viewing-key"
						/>
					</div>
					<p className="text-sm text-gray-500 mt-2">
						Share this key with auditors to disclose your balances and inbox
						off-chain.
					</p>
				</CardContent>
				<CardFooter>
					<Button onClick={() => setViewingKey(key)}>Save key</Button>
				</CardFooter>
			</Card>
		</Container>
	);
}


