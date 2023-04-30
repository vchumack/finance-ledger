import Image from "next/image";
import { useEffect } from "react";
import { cases } from "@/data/cases";

import styles from "./Cases.module.scss";

export const Cases = () => {
	useEffect(() => {
		import("lightbox2/dist/js/lightbox.min.js").then((Lightbox) => {
			import("lightbox2/dist/css/lightbox.min.css");
		});
	}, []);

	return (
		<section id="cases" className={styles.section}>
			<div className={`container ${styles.container}`}>
				<p>This is what we do</p>
				<h2>Business Cases</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Architecto, sapiente!
				</p>
				<ul className={styles.list}>
					{cases.map(({ src, alt, text }, idx) => (
						<li key={idx}>
							<a
								href={src}
								data-lightbox="projects"
								data-title={text}
							>
								<Image
									className={styles.img}
									src={src}
									width={422}
									height={287}
									alt={alt}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
