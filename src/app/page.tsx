"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Index from "../components/Index";
import About from "../components/About";
import AnimatedTypeWritter from "../components/AnimatedTypeWritter";
import AnimatedPageContent from "../components/AnimatedPageContent";
import Contact from "../components/Contact";

interface SectionRefs {
	[key: string]: HTMLElement | null;
}

export default function Home() {
	const [showContent, setShowContent] = useState(false);
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const sectionRefs = useRef<SectionRefs>({
		about: null,
		work: null,
		projects: null,
		contact: null,
	});

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			console.log({ entries });
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log({ entry });
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		Object.values(sectionRefs.current).forEach((ref) => {
			if (ref) {
				observer.observe(ref);
			}
		});

		return () => {
			Object.values(sectionRefs.current).forEach((ref) => {
				if (ref) {
					observer.unobserve(ref);
				}
			});
		};
	}, []);

	return (
		<main className="relative flex flex-col bg-cover bg-fixed bg-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
			<AnimatedTypeWritter onFinish={() => setShowContent(true)} />
			{showContent && (
				<AnimatedPageContent>
					<section className="flex mt-48" id="body">
						<section className="flex flex-col flex-grow">
							<div className="sticky top-0">
								<div className="flex justify-center mt-72">
									<Index activeSection={activeSection} />
								</div>
							</div>
						</section>

						<section className="flex columns-6">
							<section className="flex flex-col gap-20">
								<section className="flex justify-center">
									<div className="w-[750px]" id="about" ref={(el) => (sectionRefs.current.about = el)}>
										<About />
									</div>
								</section>
								<section id="work" ref={(el) => (sectionRefs.current.work = el)}>
									<WorkExperience />
								</section>
								<section id="projects" ref={(el) => (sectionRefs.current.projects = el)}>
									<Projects />
								</section>
							</section>
						</section>
					</section>
					<section className="mt-24" id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
						<Contact />
					</section>
				</AnimatedPageContent>
			)}
		</main>
	);
}
