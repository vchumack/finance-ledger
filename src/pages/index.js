import Head from "next/head";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Cases } from "@/components/cases/Cases";
import { Blog } from "@/components/blog/Blog";
import { Team } from "@/components/team/Team";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
	return (
		<>
			<Head>
				<title>Finance Ledger</title>
				<meta name="description" content="Financial aid to the world" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<About />
			<Cases />
			<Blog />
			<Team />
			<Contact />
		</>
	);
}
