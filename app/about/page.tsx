import { Metadata } from "next";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { Aurora } from "@/components/Aurora";

import Michael from "@/assets/Michael.webp";
import Dylan from "@/assets/Dylan.webp";
import Nick from "@/assets/Nick.webp";

export const metadata: Metadata = {
	title: "About",
};

export default function About() {
	return (
		<main className="prose dark:prose-invert mx-auto prose-zinc dark:hover:prose-a:text-violet-300 hover:prose-a:text-violet-700 prose-a:transition prose-a:ease-in-out">
			<h1 className="mb-0 tracking-tight font-bold">About Amethyst</h1>

			<p>
				Amethyst is a clean and easy to use RSS reader for Apple
				devices - built by a writer, for writers. I always wanted an
				RSS reader that I felt could help me do my job, and Amethyst
				is that solution.
			</p>

			<p>
				Amethyst development kicked off in late 2024 - and slowly made
				its way to be over the past year and a half or so. It fully
				embraces Liquid Glass, and is available on iPhone, iPad, Mac,
				and Apple Vision Pro.
			</p>

			<p>
				If you&apos;re someone who wants granular control over your
				news intake while having a native-looking interface, Amethyst
				may be the solution for you.
			</p>

			<p>
				Amethyst is available for $9.99 as a one-time purchase. For
				real-time push notifications, which does have ongoing server
				costs, you can subscribe to Amethyst Plus for $1.99/month.
				If notifications don&apos;t bother you, then you&apos;re free
				and in the clear after buying the app: no ads, no tracking,
				and no nonsense.
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
					name="Dylan McDonald"
					role="Icon Designer"
					src={Dylan}
					href="https://x.com/DylanMcD8"
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
