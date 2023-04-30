import { useEffect } from "react";

export const useAddClassOnScroll = (nameClass, scrollTo) => {
	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;

			if (position > scrollTo) {
				document.body.classList.add(nameClass);
			} else {
				document.body.classList.remove(nameClass);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
