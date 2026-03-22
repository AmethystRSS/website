import { AppStoreIcon, AmethystIcon } from "@/components/Icons";
import Link from "next/link";

export function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full p-3 flex justify-center z-50">
			<div className="flex gap-4 justify-between items-center rounded-full backdrop-blur-lg bg-zinc-50/50 dark:bg-zinc-950/50 p-1 w-full md:w-fit border border-zinc-300/50 dark:border-zinc-700/50 drop-shadow-sm after:absolute after:inset-0 after:border-y-2 after:rounded-full after:border-t-white/10 after:border-b-black/10 after:-z-10">
				<Link
					href="/"
					className="flex items-center gap-2 text-xl font-bold pl-3 text-violet-700 dark:text-violet-300 hover:text-zinc-800 dark:hover:text-zinc-200 transition ease-in-out"
				>
					<AmethystIcon />
					Amethyst
				</Link>

				<div className="flex items-center space-x-4">
					<Link
						href="/updates"
						className="hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline transition ease-in-out"
					>
						Updates
					</Link>

					<Link
						href="/about"
						className="hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline transition ease-in-out"
					>
						About
					</Link>

					<a
						className="flex items-center gap-2 rounded-full p-2 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition ease-in-out group drop-shadow-sm"
						href="https://apps.apple.com/us/app/ruby-your-news-assistant/id1522815729"
					>
						<AppStoreIcon className="group-hover:text-violet-300 dark:group-hover:text-violet-700 transition ease-in-out" />

						<span className="hidden min-[420px]:block">
							Download
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
