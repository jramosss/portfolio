import type { RefObject } from "react";

type IndexProps = {
	aboutRef: RefObject<HTMLDivElement>;
	experienceRef: RefObject<HTMLDivElement>;
	projectsRef: RefObject<HTMLDivElement>;
	contactRef: RefObject<HTMLDivElement>;
};

type IndexItemProps = {
	label: string;
	onClick: () => void;
};

function Bar() {
	return <div className="flex-grow border-t rounded-xl border-blue-400/90 border-y-2" />;
}

function Item({ label, onClick }: IndexItemProps) {
	return (
		<div className="flex gap-4 items-center transition-transform duration-200 ease-in-out hover:scale-125">
			<Bar />
			<div className="w-[60%]">
				<button
					type="button"
					onClick={onClick}
					className="text-gray-100 transition-colors duration-200 ease-in-out hover:text-gray-300 text-left"
				>
					<span className="text-xl">{label}</span>
				</button>
			</div>
		</div>
	);
}

export default function Index({ aboutRef, contactRef, experienceRef, projectsRef }: IndexProps) {
	const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
		sectionRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="flex w-48 flex-col gap-2">
			<Item label="About" onClick={() => scrollToSection(aboutRef)} />
			<Item label="Experience" onClick={() => scrollToSection(experienceRef)} />
			<Item label="Projects" onClick={() => scrollToSection(projectsRef)} />
			<Item label="Contact" onClick={() => scrollToSection(contactRef)} />
		</div>
	);
}
