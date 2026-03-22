import Hero from "@/assets/Hero.webp";
import { AppStoreIcon } from "@/components/Icons";
import Image from "next/image";
import { ParallaxAurora } from "@/components/Aurora";

export default function Home() {
	return (
		<main className="py-8 sm:py-12 lg:py-16">
			<ParallaxAurora />

			<p className="font-black text-4xl lg:text-5xl text-center drop-shadow tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-violet-800 dark:from-violet-200 dark:to-violet-400">
				News that Shines
			</p>

			<p className="text-center text-lg lg:text-xl max-w-xl text-balance mx-auto py-2 pb-4">
				Amethyst is a beautifully designed news app for Apple platforms,
				built to be simple and easy to use.
			</p>

			<a
				className="flex items-center gap-2 rounded-full px-3 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition ease-in-out group w-fit mx-auto text-center"
				href="https://apps.apple.com/us/app/ruby-your-news-assistant/id1522815729"
			>
				<AppStoreIcon className="group-hover:text-violet-300 dark:group-hover:text-violet-700 transition ease-in-out" />
				Download on the App Store
			</a>

			<Image
				src={Hero}
				alt="Amethyst on various Apple devices"
				placeholder="blur"
				sizes="(max-width: 1152px) 100vw, 1152px"
				priority
				className="py-8"
			/>

			<div
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
				id="features"
			>
				{features.map((feature, index) => (
					<div
						key={index}
						className="rounded-lg backdrop-blur-lg bg-zinc-50/50 dark:bg-zinc-950/50 p-4 hover:scale-[1.01] transition ease-in-out after:absolute after:inset-0 after:border-y-2 after:rounded-lg after:border-t-white/10 after:border-b-black/10 after:-z-10 drop-shadow-sm border border-zinc-300/50 dark:border-zinc-700/50"
					>
						<h3 className="font-bold text-xl lg:text-2xl text-violet-700 dark:text-violet-300">
							{feature.title}
						</h3>
						<p>{feature.description}</p>
					</div>
				))}
			</div>
		</main>
	);
}

const features: Array<{
	title: string;
	description: string;
}> = [
	{
		title: "Sleek Interface",
		description:
			"Hand-crafted design that seemlessly blends into Apple's design language.",
	},
	{
		title: "Expansive Coverage",
		description:
			"Support for a wide range of news sources to keep you updated and informed.",
	},
	{
		title: "Bookmarks",
		description:
			"Effortlessly save your favorite articles for later reading or reference.",
	},
	{
		title: "Real-Time Trends",
		description:
			"Keep up with the latest and most popular topics in media, powered by Twitter's API.",
	},
	{
		title: "Cross Platform",
		description:
			"Access the same app and features across iOS, macOS, watchOS, and visionOS.",
	},
	{
		title: "Customized Topics",
		description:
			"Filter your news feed to focus on what you care about most, and hide what you don't.",
	},
];
