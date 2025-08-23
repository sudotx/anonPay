"use client";
import {
	type CompatiblePublicClient,
	type CompatibleWalletClient,
	useEERC,
} from "@avalabs/eerc-sdk";
import {
	usePublicClient,
	useWalletClient,
} from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import { CIRCUIT_CONFIG, CONTRACTS } from "@/config/contracts";

export function useErcAbstractions() {
	const publicClient = usePublicClient({ chainId: avalancheFuji.id });
	const { data: walletClient } = useWalletClient();

	const {
		owner,
		symbol,
		isAuditorKeySet,
		auditorPublicKey,
		isRegistered,
		isDecryptionKeySet,
		generateDecryptionKey,
		register,
		useEncryptedBalance,
		isAddressRegistered,
		publicKey,
	} = useEERC(
		publicClient as CompatiblePublicClient,
		walletClient as CompatibleWalletClient,
		CONTRACTS.EERC_CONVERTER,
		CIRCUIT_CONFIG
	);

	const {
		privateMint,
		privateBurn,
		privateTransfer,
		deposit,
		withdraw,
		decimals,
		encryptedBalance,
		decryptedBalance,
		refetchBalance,
	} = useEncryptedBalance(CONTRACTS.ERC20);

	return {
		owner,
		symbol,
		isAuditorKeySet,
		auditorPublicKey,
		isRegistered,
		isDecryptionKeySet,
		generateDecryptionKey,
		register,
		isAddressRegistered,
		publicKey,
		privateMint,
		privateBurn,
		privateTransfer,
		deposit,
		withdraw,
		decimals,
		encryptedBalance,
		decryptedBalance,
		refetchBalance,
	};
}