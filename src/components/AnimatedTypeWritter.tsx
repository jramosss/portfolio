import { motion as Motion } from "framer-motion";
import { useState } from "react";
import TypeWritter from "./TypeWritter";

export default function AnimatedTypeWritter({ onFinish }: { onFinish: () => void }) {
	const [animationFinished, setAnimationFinished] = useState(false);

	return (
		<Motion.section
			className="absolute left-1/2 transform -translate-x-1/2"
			initial={{ fontSize: "6rem", top: "50%", y: "-50%", x: "-47%" }}
			animate={{
				fontSize: animationFinished ? "2rem" : "6rem",
				top: animationFinished ? "1rem" : "50%",
				y: animationFinished ? "0%" : "-50%",
			}}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<TypeWritter
				didItEnd={() => {
					setAnimationFinished(true);
					setTimeout(() => onFinish(), 500);
				}}
			/>
		</Motion.section>
	);
}
