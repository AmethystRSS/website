"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<Status>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		try {
			const res = await fetch(
				"https://buttondown.com/api/emails/embed-subscribe/amethyst",
				{
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: new URLSearchParams({
						email,
						embed: "1",
						tag: "website",
					}),
				}
			);

			if (res.ok) {
				setStatus("success");
				setEmail("");
			} else if (res.status === 409) {
				setStatus("error");
				setErrorMessage("You're already subscribed!");
			} else {
				setStatus("error");
				setErrorMessage("Something went wrong. Please try again.");
			}
		} catch {
			setStatus("error");
			setErrorMessage("Something went wrong. Please try again.");
		}
	}

	return (
		<section className="mt-8 flex justify-center">
			<div className="rounded-lg backdrop-blur-lg bg-zinc-50/50 dark:bg-zinc-950/50 p-6 sm:p-8 max-w-xl w-full border border-zinc-300/50 dark:border-zinc-700/50 after:absolute after:inset-0 after:border-y-2 after:rounded-lg after:border-t-white/10 after:border-b-black/10 after:-z-10 drop-shadow-sm relative">
				<h2 className="font-bold text-2xl lg:text-3xl text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-violet-800 dark:from-violet-200 dark:to-violet-400">
					Stay in the loop
				</h2>
				<p className="text-center text-zinc-600 dark:text-zinc-400 mt-1 mb-4">
					Get occasional updates about Amethyst — no spam.
				</p>

				{status === "success" ? (
					<p className="text-center text-green-700 dark:text-green-400 font-medium">
						You&apos;re subscribed! Check your email to confirm.
					</p>
				) : (
					<>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-2"
						>
							<input
								type="email"
								required
								placeholder="you@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={status === "loading"}
								className="flex-1 rounded-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 disabled:opacity-50 transition"
							/>
							<button
								type="submit"
								disabled={status === "loading"}
								className="rounded-full px-5 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition ease-in-out font-medium disabled:opacity-50 whitespace-nowrap"
							>
								{status === "loading" ? "Subscribing..." : "Subscribe"}
							</button>
						</form>
						{status === "error" && (
							<p className="text-center text-red-600 dark:text-red-400 text-sm mt-2">
								{errorMessage}
							</p>
						)}
					</>
				)}
			</div>
		</section>
	);
}
