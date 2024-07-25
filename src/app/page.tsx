"use client";

import { useState } from "react";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Index from "../components/Index";
import About from "../components/About";
import AnimatedTypeWritter from "../components/AnimatedTypeWritter";
import AnimatedPageContent from "../components/AnimatedPageContent";
import Contact from "../components/Contact";
import AnimatedSubTitle from "../components/AnimatedSubTitle";

export default function Home() {
	const [showContent, setShowContent] = useState(false);

	return (
		<main className="relative flex flex-col bg-cover bg-fixed bg-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
			<AnimatedTypeWritter onFinish={() => setShowContent(true)} />
			{showContent && (
				<div>
					<AnimatedPageContent>
						<AnimatedSubTitle />
					</AnimatedPageContent>
					<AnimatedPageContent>
						<section className="flex mt-48" id="body">
							<section className="flex flex-col flex-grow">
								<div className="sticky top-0">
									<div className="flex justify-center mt-80">
										<Index />
									</div>
								</div>
							</section>

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
						</section>
						<section className="mt-24">
							<Contact />
						</section>
					</AnimatedPageContent>
				</div>
			)}
		</main>
	);
}
