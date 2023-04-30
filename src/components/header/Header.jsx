import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { navbar } from "@/data/header";
import { useAddClassOnScroll } from "@/helpers/hooks/useAddClassOnScroll";

import styles from "./Header.module.scss";

export const Header = () => {
	const isMobile = useMediaQuery({ maxWidth: 767.9 });
	useAddClassOnScroll("scroll", 70);

	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				<Link href="/" className={styles.logoBox}>
					<Image
						className={styles.logoImg}
						src="/static/images/home/logo.svg"
						width={40}
						height={30}
						alt="logo"
					/>
					<p className={styles.logoText}>
						<span>Finance</span> Ledger
					</p>
				</Link>

				<nav>
					<ul className={styles.list}>
						{navbar.map(({ title, path }) => (
							<li key={title} className={styles.item}>
								<ScrollLink
									to={path}
									smooth={true}
									duration={300}
									offset={isMobile ? -120 : -70}
								>
									{title}
								</ScrollLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
