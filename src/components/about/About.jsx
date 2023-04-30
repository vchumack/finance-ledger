import Link from "next/link";
import Image from "next/image";

import styles from "./About.module.scss";

export const About = () => {
	return (
		<section id="about" className={styles.section}>
			<Image
				className={styles.img}
				src="/static/images/home/people.webp"
				width={1280}
				height={853}
				alt="people"
			/>
			<div className={styles.box}>
				<p>What you are looking for</p>
				<h2>We provide bespoke solutions</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Voluptate, ipsum dignissimos quae laudantium asperiores nam
					aliquid impedit harum illum dolore explicabo ab dolores
					itaque rerum temporibus doloribus iste maiores deleniti?
				</p>
				<Link href="/"> Read More</Link>
			</div>
		</section>
	);
};
