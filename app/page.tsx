import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">AnonPay</span>
          <ConnectButton/>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            src={"https://res.cloudinary.com/dma1c8i6n/image/upload/v1749921073/IMG_9003_tiiioh.jpg"}
            alt={"azflin"}
            className="rounded-xl"
			priority
			width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </main>
  );
}
