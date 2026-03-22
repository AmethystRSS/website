import { TwitterIcon, GitHubIcon } from "@/components/Icons";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="rounded-lg bg-zinc-50 dark:bg-zinc-950 my-6 text-zinc-800 dark:text-zinc-200 p-3 prose dark:prose-invert prose-sm prose-zinc dark:hover:prose-a:text-violet-300 hover:prose-a:text-violet-700 prose-a:transition prose-a:ease-in-out">
			<div className="flex space-x-4">
				<a href="https://x.com/AmethystApp" target="_blank">
					<TwitterIcon />
				</a>

				<a href="https://github.com/AmethystRSS" target="_blank">
					<GitHubIcon />
				</a>
			</div>

			<p>
				Made by <a href="https://x.com/mbrkhrdt">Michael Burkhardt</a>{" "}
				in NYC.
				<br />
				Website built by <a href="https://nickoates.com">Nick Oates</a>.
				<br />
				Amethyst icon designed by{" "}
				<a href="https://x.com/DylanMcD8">Dylan McDonald</a>.
			</p>
			<p>
				<Link href="/privacy">Privacy Policy</Link> &bull;{" "}
				<a href="https://dl.amethyst.news/AmethystPressKit.zip">Press Kit</a>
			</p>
			<p>App Store and the Apple logo are trademarks of Apple Inc.</p>
			<p>&copy; 2020-2026 Michael Burkhardt</p>
		</footer>
	);
}
