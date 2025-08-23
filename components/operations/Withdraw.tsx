import { useState } from "react";
import { Bounce, toast } from "react-toastify";

interface WithdrawProps {
	handlePrivateWithdraw: (amount: string) => Promise<void>;
	isDecryptionKeySet: boolean;
}

export function Withdraw({
	handlePrivateWithdraw,
	isDecryptionKeySet,
}: WithdrawProps) {
	const [withdrawAmount, setWithdrawAmount] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	return (
		<>
			<div className="flex-1">
				<h3 className="text-cyber-green font-bold mb-2">Withdraw</h3>
				<p className="text-sm text-cyber-gray font-mono leading-relaxed mb-4">
					When user try to withdraw tokens, user generates a proof that the
					encrypted balance is sufficient for the requested withdrawn amount —
					without revealing the actual balance. Contract will then encrypt the
					withdrawn amount using user&apos;s public key and homomorphically subtract
					it from the user&apos;s encrypted balance. Once the proof is verified, the
					corresponding ERC-20 tokens are transferred back to user&apos;s wallet.
				</p>
			</div>

			<div>
				<input
					type="text"
					value={withdrawAmount}
					onChange={(e) => {
						const value = e.target.value.trim();
						if (/^\d*\.?\d{0,2}$/.test(value)) {
							setWithdrawAmount(value);
						}
					}}
					placeholder={"Amount in ether (eg. 1.5, 0.01)"}
					className="flex-1 bg-cyber-dark text-cyber-gray px-4 py-0.5 rounded-lg border border-cyber-green/20 focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none font-mono w-full"
				/>
				<button
					type="button"
					className="bg-cyber-dark w-full text-cyber-green px-2 py-1 rounded-md text-sm border border-cyber-green/60 disabled:opacity-50 disabled:cursor-not-allowed mb-2 hover:bg-cyber-green/60 transition-all duration-200 font-mono mt-2"
					onClick={async () => {
						setLoading(true);
						handlePrivateWithdraw(withdrawAmount)
							.then(() => {
								setLoading(false);
								setWithdrawAmount("");
							})
							.catch((error) => {
								const isUserRejected = error?.message.includes("User rejected");

								toast.error(
									<div>
										<p>
											{isUserRejected
												? "Transaction rejected"
												: "An error occurred while withdrawing tokens. Please try again."}
										</p>
									</div>,
									{
										position: "top-right",
										autoClose: 5000,
										hideProgressBar: true,
										closeOnClick: true,
										pauseOnHover: false,
										draggable: true,
										progress: undefined,
										transition: Bounce,
									},
								);

								setLoading(false);
							});
					}}
					disabled={!withdrawAmount || loading || !isDecryptionKeySet}
				>
					{loading ? "Withdrawing..." : "Withdraw"}
				</button>
			</div>
		</>
	);
}