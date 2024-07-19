import Container from "./Container";

type WorkExperienceItemProps = {
  companyName: string;
  position: string;
  since: string;
  to: string;
  description: string;
};

function WorkExperienceItem({
  companyName,
  position,
  since,
  to,
  description,
}: WorkExperienceItemProps) {
  return (
    <div className="w-[85%]">
      <Container>
        <div className="flex flex-col">
          <div className="flex justify-start">
            <span className="text-2xl font-bold">{companyName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">{position}</span>
            <div className="flex gap-1">
              <span>{since}</span>
              <span>-</span>
              <span>{to}</span>
            </div>
          </div>
          <div className="mt-2 flex flex-col">
            {description.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-2xl">Work Experience</span>
        <WorkExperienceItem
          companyName="Sendblue"
          since="April 2023"
          to="Present"
          position="Chief Technology Officer"
          description={`Leading the technology team to work with a big infrastructure to send messages through iMessage.${"\n"}Working with the CEO to define the company's strategy`}
        />
        <WorkExperienceItem
          companyName="SumtechLabs"
          since="April 2023"
          to="Present"
          position="Fullstack Software Engineer"
          description={`Translating customer ideas into software solutions.${"\n"}Worked with lots of different tools and technologies`}
        />
        <WorkExperienceItem
          companyName="Seenka"
          since="November 2021"
          to="April 2023"
          position="Product Team Lead"
          description={
            "Lead a team of 6 developers where we built and mantained a platform with a huge cloud infrastructure"
          }
        />
      </div>
    </>
  );
}
