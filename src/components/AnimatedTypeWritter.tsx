import { motion as Motion } from "framer-motion";
import { useState } from "react";
import TypeWritter from "./TypeWritter";

export default function AnimatedTypeWritter({ onFinish }: { onFinish: () => void }) {
	const [animationFinished, setAnimationFinished] = useState(false);

	return (
		<Motion.section
			className={`absolute left-1/2 transform -translate-x-1/2 ${
				animationFinished ? "top-4" : "top-1/2 -translate-y-1/2"
			} transition-all duration-1000 ease-in-out`}
			initial={{ fontSize: "6rem" }}
			animate={{ fontSize: animationFinished ? "2rem" : "6rem" }}
			transition={{ duration: 1 }}
		>
			<TypeWritter
				didItEnd={() => {
					setAnimationFinished(true);
					onFinish();
				}}
			/>
		</Motion.section>
	);
}
