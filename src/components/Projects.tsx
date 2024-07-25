import Container from "./Container";
import Tag from "./Tag";

type ProjectItemProps = {
	name: string;
	since: string;
	to: string;
	description: string;
	link: string;
	technologies: string[];
};

function ProjectItem({ name, since, to, description, link, technologies }: ProjectItemProps) {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: why does this even exist?
		<div
			className="w-[85%] cursor-pointer hover:scale-105 transition-transform"
			onClick={() => {
				window.open(link, "_blank");
			}}
		>
			<Container>
				<div className="flex flex-col">
					<div className="flex justify-start">
						<span className="text-2xl font-bold">{name}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-200 italic">
							{since} - {to}
						</span>
					</div>
					<div className="mt-3 flex flex-col">
						{description.split("\n").map((line) => (
							<span className="text-gray-200" key={line}>
								{line.includes("<b>") ? (
									<div className="flex gap-1">
										<b>{line.split("</b>")[0].replace("<b>", "").replace("</b>", "")}</b>
										<p>{line.split("</b>")[1]}</p>
									</div>
								) : (
									line
								)}
							</span>
						))}
					</div>
					<div className="flex gap-2 mt-4">
						{technologies.map((tech) => (
							<Tag key={tech}>{tech}</Tag>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default function Projects() {
	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<span className="text-4xl font-bold">PROJECTS</span>
			<div className="flex flex-col justify-center items-center gap-4 mt-2">
				<ProjectItem
					name="Be Saints"
					since="March 2021"
					to="Present"
					link="https://linktr.ee/besaintsapp"
					description={`<b>Cross platform mobile app</b> that sends a saint phrase per day as a notification.
              ${"\n"}I was in charge of both development and decision making, 
              alongside with a partner developer and a graphic designer.${"\n"}`}
					technologies={["React Native", "Firebase", "Expo", "Typescript"]}
				/>
				<ProjectItem
					name="Cancionero Cifraclub"
					since="March 2024"
					to="Present"
					description={`A web app that lets users create a PDF with song chords from a cifraclub.com URL. ${"\n"}I developed it for personal use and decided to share it.`}
					link="https://github.com/jramosss/cifraclub-cancionero"
					technologies={["Python", "BeautifulSoup", "HTML", "CSS", "Selenium"]}
				/>
				<ProjectItem
					name="PolipedIA (WIP)"
					since="June 2024"
					to="Present"
					description={
						"An AI app that generates realtime transcription, summarization and diarization of senatorial camera sessions."
					}
					link="/private"
					technologies={["Python", "PyTorch", "Triton", "Huggingface"]}
				/>
			</div>
		</div>
	);
}
