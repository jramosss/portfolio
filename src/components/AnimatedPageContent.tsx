import type React from "react";
import { motion as Motion } from "framer-motion";

export default function AnimatedPageContent({ children }: { children: React.ReactNode }) {
	return (
		<Motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: [0, 25, 50, 75, 100] }}
			transition={{ ease: "easeIn", duration: 4 }}
		>
			{children}
		</Motion.section>
	);
}
