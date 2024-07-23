"use client";

import { useState } from "react";
import { motion as Motion } from "framer-motion";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Index from "../components/Index";
import About from "../components/About";
import AnimatedTypeWritter from "../components/AnimatedTypeWritter";
import AnimatedPageContent from "../components/AnimatedPageContent";

export default function Home() {
	const [showContent, setShowContent] = useState(false);

	return (
		<main className="relative flex flex-col bg-cover bg-fixed bg-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
			<AnimatedTypeWritter onFinish={() => setShowContent(true)} />
			{showContent && (
				<AnimatedPageContent>
					<div className="mt-36 flex-grow overflow-y-auto">
						<div className="flex">
							<section className="flex flex-grow columns-6 justify-center">
								<div className="sticky">
									<Index />
								</div>
							</section>
							<div className="sticky">
								<div className="border-r border-white border-x-4 h-[40%] opacity-50" />
							</div>
							<section className="flex columns-6">
								<section className="flex flex-col gap-20">
									<section className="flex justify-center">
										<div className="w-[750px]">
											<About />
										</div>
									</section>
									<section>
										<WorkExperience />
									</section>
									<section>
										<Projects />
									</section>
								</section>
							</section>
						</div>
					</div>
				</AnimatedPageContent>
			)}
		</main>
	);
}
