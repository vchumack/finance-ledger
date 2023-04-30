import Image from "next/image";
import { navbar } from "@/data/header";

import styles from "./Blog.module.scss";
import Link from "next/link";

export const Blog = () => {
	return (
		<section id="blog" className={styles.section}>
			<Image
				className={styles.img}
				src="/static/images/home/blog.webp"
				width={700}
				height={525}
				alt="coffee"
			/>
			<div className={styles.box}>
				<p>April 16 2020</p>
				<h2>Blog Post One</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Voluptate, ipsum dignissimos quae laudantium asperiores nam
					aliquid impedit harum illum dolore explicabo ab dolores
					itaque rerum temporibus doloribus iste maiores deleniti?
				</p>
				<Link href="/">Read Our Blog</Link>
			</div>
		</section>
	);
};
