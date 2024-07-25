import type React from "react";
import { motion as Motion } from "framer-motion";

export default function AnimatedPageContent({ children }: { children: React.ReactNode }) {
	return (
		<Motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
			{children}
		</Motion.section>
	);
}
