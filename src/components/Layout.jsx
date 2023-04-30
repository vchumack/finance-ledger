import { Open_Sans } from "next/font/google";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["400", "600"],
});

const Layout = ({ children }) => {
	return (
		<>
			<style jsx global>
				{`
					html {
						font-family: ${openSans.style.fontFamily};
					}
				`}
			</style>
			<Header />
			<main> {children}</main>
			<Footer />
		</>
	);
};

export default Layout;
