export default function Home() {
	return (
		<main className="min-h-screen bg-gray-100">
			<div className="container mx-auto px-4 py-12">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800">
						Welcome to Anon Pay
					</h1>
					<p className="mt-4 text-lg text-gray-600">
						Your private, secure, and anonymous payment solution.
					</p>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h2 className="text-2xl font-bold text-gray-800">Deposit</h2>
						<p className="mt-4 text-gray-600">
							Deposit funds into your private account to start making secure
							transactions.
						</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h2 className="text-2xl font-bold text-gray-800">Send</h2>
						<p className="mt-4 text-gray-600">
							Send funds to anyone, anywhere, without revealing your identity.
						</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h2 className="text-2xl font-bold text-gray-800">Withdraw</h2>
						<p className="mt-4 text-gray-600">
							Withdraw your funds back to your public account at any time.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
