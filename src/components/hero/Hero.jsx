import Link from "next/link";
import styles from "./Hero.module.scss";

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
