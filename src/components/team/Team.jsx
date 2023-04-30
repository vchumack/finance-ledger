import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { team } from "@/data/team";

import styles from "./Team.module.scss";

export const Team = () => {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<p className={styles.overTitle}>Who we are</p>
				<h2 className={styles.title}>Our Professional Team</h2>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Architecto, sapiente!
				</p>
				<ul className={styles.list}>
					{team.map(({ src, name, position }) => (
						<li key={src}>
							<div className={styles.imgBox}>
								<Image
									className={styles.img}
									src={src}
									width={422}
									height={287}
									alt={name}
								/>

								<ul className={styles.iconList}>
									<li>
										<Link href="/">
											<BsFacebook
												className={styles.icons}
											/>
										</Link>
									</li>
									<li>
										<Link href="/">
											<BsTwitter
												className={styles.icons}
											/>
										</Link>
									</li>
									<li>
										<Link href="/">
											<BsYoutube
												className={styles.icons}
											/>
										</Link>
									</li>
									<li>
										<Link href="/">
											<TfiLinkedin
												className={styles.icons}
											/>
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<p className={styles.name}>{name}</p>
								<p className={styles.position}>{position}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
