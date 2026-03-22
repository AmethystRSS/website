export default function PrivacyPolicy() {
	return (
		<main className="prose dark:prose-invert mx-auto prose-zinc dark:hover:prose-a:text-violet-300 hover:prose-a:text-violet-700 prose-a:transition prose-a:ease-in-out">
			<h1 className="mb-0 tracking-tight font-bold">Privacy Policy</h1>

			<p>
				<strong>Last updated on March 22nd, 2026.</strong>
			</p>

			<p>
				I believe in user privacy, and Amethyst is built with privacy
				at its core.
			</p>

			<p>
				Features like bookmark sync and group syncing across devices is
				handled entirely on iCloud, and that data isn&apos;t accessible
				to us.
			</p>

			<p>
				Some analytical data may be collected in Amethyst to help
				improve the experience, but all such data is collected
				anonymously - with no identifying information being tied to
				such analytics.
			</p>

			<p>
				Amethyst&apos;s in-app browser doesn&apos;t store cookies, so
				if you&apos;re logging into a website through it, it&apos;ll
				only last as long as that session is active.
			</p>

			<p>
				As part of Amethyst Pro, we offer the ability to log in and
				have real-time push notifications from our remote server. If
				you use that feature, the email you share with Sign in with
				Apple may be tied to some feed data, though we&apos;ll only be
				able to see which sources you chose to enable notifications
				for. The others will remain completely private to us.
			</p>

			<p>
				Lastly, since Amethyst is a news app - news providers may
				receive some limited device and network information from your
				device when you make a request, such as timezone, IP address,
				and screen size.
			</p>
		</main>
	);
}
