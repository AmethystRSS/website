import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s — Amethyst",
		default: "Amethyst — News that Shines",
	},
	description:
		"Amethyst is a beautifully designed news app for Apple platforms, built to be simple and easy to use.",
	itunes: {
		appId: "1522815729",
	},
	twitter: {
		card: "summary_large_image",
		site: "@AmethystApp",
	},
	metadataBase: new URL("https://amethyst.news"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} dark:text-white dark:bg-zinc-900 bg-zinc-100 antialiased pt-20 px-6 max-w-6xl mx-auto min-h-dvh flex flex-col justify-between`}
			>
				<Navbar />

				{children}

				<Footer />
			</body>
		</html>
	);
}
