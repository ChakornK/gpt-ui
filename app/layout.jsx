import "./globals.css";

export const metadata = {
	title: "ChatGPT: Get instant answers, find inspiration, learn something new",
	description:
		"ChatGPT is a free-to-use AI system. Use it for engaging conversations, gain insights, automate tasks, and witness the future of AI, all in one place.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
