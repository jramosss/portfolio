import Container from "./Container";

type ProjectItemProps = {
  name: string;
  since: string;
  to: string;
  description: string;
  link: string;
};

function ProjectItem({ name, since, to, description, link }: ProjectItemProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: why does this even exist?
    <div
      className="w-[85%] cursor-pointer"
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
            <div className="flex gap-1">
              <span>{since}</span>
              <span>-</span>
              <span>{to}</span>
            </div>
          </div>
          <div className="mt-2 flex flex-col">
            {description.split("\n").map((line) => (
              <span className="text-gray-200" key={line}>
                {line}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-4xl font-bold">Projects</span>
        <div className="flex flex-col justify-center items-center gap-4 mt-2">
          <ProjectItem
            name="Be Saints"
            since="March 2021"
            to="Present"
            link="https://linktr.ee/besaintsapp"
            description={`Cross platform mobile app that sends a saint phrase per day as a notification. ${"\n"}I was in charge of both development and decision making, alongside with a partner developer and a graphic designer.${"\n"}`}
          />
          <ProjectItem
            name="Cancionero Cifraclub"
            since="March 2024"
            to="Present"
            description={`A web app that allows users to create a pdf with all songs chords from a cifraclub.com url. ${"\n"}I'm the sole developer of this project, i just wanted it for myself and then i thought of sharing it`}
            link="https://github.com/jramosss/cifraclub-cancionero"
          />
          <ProjectItem
            name="PolipedIA (WIP)"
            since="June 2024"
            to="Present"
            description={
              "An AI app that generates realtime transcription, summarization and diarization of senatorial camera sessions."
            }
            link="private"
          />
        </div>
      </div>
    </>
  );
}
