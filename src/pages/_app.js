import Layout from "@/components/Layout";
// import "lightbox2/dist/css/lightbox.min.css";
// import "lightbox2/dist/js/lightbox.min.js";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
