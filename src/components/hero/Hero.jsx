import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

export const Hero = () => {
	return (
		<section className={styles.section} id="hero">
			<div className={`container ${styles.box}`}>
				<h1>The Sky Is The Limit</h1>
				<p>We provide world class financial assistance</p>

				<Link href="/">&gt; Read More</Link>
			</div>
		</section>
	);
};
