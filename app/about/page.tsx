import { Metadata } from "next";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { Aurora } from "@/components/Aurora";

import Michael from "@/assets/Michael.webp";
import Aether from "@/assets/Aether.webp";
import Nick from "@/assets/Nick.webp";

export const metadata: Metadata = {
	title: "About",
};

export default function About() {
	return (
		<main className="prose dark:prose-invert mx-auto prose-zinc dark:hover:prose-a:text-violet-300 hover:prose-a:text-violet-700 prose-a:transition prose-a:ease-in-out">
			<h1 className="mb-0 tracking-tight font-bold">About Amethyst</h1>

			<p>
				Amethyst is a simple and familiar app that delivers the news.
				It&apos;s meant to be easy to understand, and provide a clean
				user interface to keep up with the world. Amethyst allows users to
				sort by individual topics, keep up with trends, search for
				stories, and bookmark articles to come back to later.
			</p>

			<p>
				Amethyst development began in July 2020, and launched in September
				that year. Since then, the app has gained thousands of downloads
				and has been featured on the App Store in many regions across
				the globe.
			</p>

			<p>
				Since the initial launch in 2020, Amethyst expanded to macOS in
				2021, launched a fully revamped Apple Watch experience in 2023,
				and was one of the first 1000 native apps available on Apple
				Vision Pro in 2024.
			</p>

			<p>
				Amethyst is available for free on the App Store, and with a purchase
				of Amethyst Premium, you can unlock an ad free experience and the
				complete feature set.
			</p>

			<p>Development of Amethyst is made possible by the following people:</p>

			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2 not-prose">
				<Contributor
					name="Michael Burkhardt"
					role="Lead Developer"
					src={Michael}
					href="https://x.com/mbrkhrdt"
				/>
				<Contributor
					name="Aether"
					role="Icon Designer"
					src={Aether}
					href="https://x.com/AetherAurelia"
				/>
				<Contributor
					name="Nick Oates"
					role="Website Developer"
					src={Nick}
					href="https://nickoates.com"
				/>
			</div>
		</main>
	);
}

function Contributor(props: {
	name: string;
	role: string;
	src: StaticImport;
	href: string;
}) {
	return (
		<Link
			className="rounded-lg backdrop-blur-lg bg-zinc-50/50 dark:bg-zinc-950/50 p-4 hover:scale-[1.01] transition ease-in-out after:absolute after:inset-0 after:border-y-2 after:rounded-lg after:border-t-white/10 after:border-b-black/10 after:-z-10 drop-shadow-sm border border-zinc-300/50 dark:border-zinc-700/50 text-center relative overflow-hidden"
			href={props.href}
		>
			<Image
				src={props.src}
				alt={props.name}
				className="rounded-full size-36 mx-auto mb-4 drop-shadow-sm"
			/>
			<h3 className="font-bold text-xl lg:text-2xl text-violet-700 dark:text-violet-300">
				{props.name}
			</h3>
			<p>{props.role}</p>

			<Aurora />
		</Link>
	);
}
