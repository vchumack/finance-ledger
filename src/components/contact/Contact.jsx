import Image from "next/image";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";

import styles from "./Contact.module.scss";

const encode = (data) => {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
		)
		.join("&");
};

export const Contact = () => {
	const {
		register,
		formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: "all",
	});

	const onSubmit = async (data) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...data }),
		})
			.then((res) => {
				console.log(res);
				reset();
			})
			.catch((error) => console.log(error));
	};

	return (
		<section id="contact" className={styles.section}>
			<Image
				className={styles.img}
				src="/static/images/home/contact.webp"
				width={700}
				height={466}
				alt="men at work"
			/>
			<div className={styles.box}>
				<h2>Request Callback</h2>
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
					name="contact"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<input type="hidden" name="form-name" value="contact" />
					<div className={styles.userBox}>
						<input
							type="text"
							name="name"
							id="name"
							placeholder=" "
							{...register("name")}
						/>
						<label htmlFor="name" className={styles.label}>
							Enter your name
						</label>
						<div className={styles.error}>
							{errors?.name && (
								<p>
									{errors?.name?.message ||
										`Something went wrong, try again`}
								</p>
							)}
						</div>
					</div>
					<div className={styles.userBox}>
						<input
							type="text"
							name="email"
							id="email"
							placeholder=" "
							{...register("email", {
								required: `This a required field`,
								pattern: {
									value: /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
									message: `Enter your existing email address`,
								},
							})}
						/>
						<label htmlFor="email" className={styles.label}>
							Enter email*
						</label>
						<div className={styles.error}>
							{errors?.email && (
								<div className={styles.errorText}>
									<Image
										src="/static/images/form/worning.svg"
										width={10}
										height={10}
										alt="worning"
									/>
									<p>
										{errors?.email?.message ||
											"Something went wrong, try again"}
									</p>
								</div>
							)}
						</div>
					</div>

					{isSubmitting ? (
						<ThreeDots
							height="50"
							width="50"
							radius="9"
							color="#f6b529"
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
							visible={true}
						/>
					) : (
						<button
							// disabled={!isValid}
							className={styles.button}
							type="submit"
						>
							Send
						</button>
					)}

					{isSubmitSuccessful && (
						<div className={styles.successBox}>
							<div>
								<p className={styles.successTitle}>
									Thank you!
								</p>
								<p>Your form submission has been reseived.</p>
								<button
									className={styles.successBtn}
									onClick={() => {
										reset();
										window.scrollTo({
											top: 0,
											behavior: "smooth",
										});
									}}
								>
									&#8592; Back to our site
								</button>
							</div>
						</div>
					)}
				</form>
			</div>
		</section>
	);
};
