"use client";

import { useState } from "react";
import { motion as Motion } from "framer-motion";
import Projects from "../components/Projects";
import TypeWritter from "../components/TypeWritter";
import WorkExperience from "../components/WorkExperience";
import Index from "../components/Index";

export default function Home() {
	const [showContent, setShowContent] = useState(false);

	return (
		<main className="relative flex flex-col bg-cover bg-fixed bg-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
			<Motion.section
				className={`absolute left-1/2 transform -translate-x-1/2 ${
					showContent ? "top-4" : "top-1/2 -translate-y-1/2"
				} transition-all duration-1000 ease-in-out`}
				initial={{ fontSize: "6rem" }}
				animate={{ fontSize: showContent ? "2rem" : "6rem" }}
				transition={{ duration: 1 }}
			>
				<TypeWritter didItEnd={() => setShowContent(true)} />
			</Motion.section>
			{showContent && (
				<Motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
					<div className="flex mt-36 flex-grow">
						<section className="flex flex-grow columns-6 items-center justify-center">
							<div className="sticky">
								<Index />
							</div>
						</section>
						<div className="mt-48">
							<div className="border-r border-white border-x-4 h-[40%] opacity-50" />
						</div>
						<section className="flex columns-6 overflow-y-auto">
							<section className="flex flex-col gap-20">
								<section className="w-full">
									<WorkExperience />
								</section>
								<section className="w-full">
									<Projects />
								</section>
							</section>
						</section>
					</div>
				</Motion.section>
			)}
		</main>
	);
}
