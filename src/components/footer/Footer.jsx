import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.list}>
				<li>
					<Link href="/">
						<BsFacebook />
					</Link>
				</li>
				<li>
					<Link href="/">
						<BsTwitter />
					</Link>
				</li>
				<li>
					<Link href="/">
						<BsYoutube />
					</Link>
				</li>
				<li>
					<Link href="/">
						<TfiLinkedin />
					</Link>
				</li>
			</ul>
			<p>Copyright © 2021 - FinanceLedger</p>
		</footer>
	);
};
