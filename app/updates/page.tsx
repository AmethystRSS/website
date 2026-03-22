import { allPosts } from "content-collections";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Updates",
	description:
		"Stay up to date with the latest Amethyst news, updates, and features.",
};

export default function Updates() {
	return (
		<main className="prose dark:prose-invert mx-auto prose-zinc dark:hover:prose-a:text-violet-300 hover:prose-a:text-violet-700 prose-a:transition prose-a:ease-in-out">
			<h1 className="mb-0 tracking-tight font-bold">Updates</h1>

			<p className="text-zinc-800 dark:text-zinc-200 my-2">
				Stay up to date with the latest Amethyst news and features.{" "}
				<a
					href="https://x.com/intent/user?screen_name=AmethystApp"
					className="underline dark:hover:text-violet-300 hover:text-violet-700 transition ease-in-out"
				>
					Follow Amethyst on X
				</a>{" "}
				for more frequent updates.
			</p>

			<ul className="not-prose text-black dark:text-white">
				{allPosts
					.sort((a, b) => b.date.getTime() - a.date.getTime())
					.map((post) => (
						<li key={post._meta.path} className="group">
							<Link href={`/updates/${post._meta.path}`}>
								<article className="p-4 transition ease-in-out rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 max-w-xl">
									<time
										dateTime={post.date.toISOString()}
										className="text-zinc-700 dark:text-zinc-300"
									>
										{post.date.toLocaleDateString("en-US", {
											dateStyle: "long",
										})}
									</time>
									<h2 className="font-bold text-2xl">
										{post.title}
									</h2>
									{post.summary && <p>{post.summary}</p>}
								</article>
							</Link>

							<div className="px-4 my-1 max-w-xl">
								<hr className="border-t border-zinc-300 dark:border-zinc-700 group-last:hidden" />
							</div>
						</li>
					))}
			</ul>
		</main>
	);
}
