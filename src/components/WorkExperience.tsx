import Container from './Container';
import Tag from './Tag';

type WorkExperienceItemProps = {
  companyName: string;
  position: string;
  since: string;
  to: string;
  description: string;
  technologies: string[];
  link?: string;
};

function WorkExperienceItem({
  companyName,
  position,
  since,
  to,
  description,
  technologies,
  link,
}: WorkExperienceItemProps) {
  return (
    <div
      className='w-[85%] hover:scale-105 transition-transform'
      onClick={() => {
        if (!link) return;
        window.open(link, '_blank');
      }}
      style={{ cursor: link ? 'pointer' : 'default' }}>
      <Container>
        <div className='flex flex-col'>
          <div className='flex justify-start'>
            <span className='text-2xl font-bold'>{companyName}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-lg font-semibold'>{position}</span>
            <span className='text-gray-200 italic'>
              {since} - {to}
            </span>
          </div>
          <div className='mt-2 flex flex-col'>
            {description.split('\n').map(line => (
              <span className='text-gray-200' key={line}>
                {line}
              </span>
            ))}
          </div>
          <div className='flex gap-2 mt-4'>
            {technologies.map(tech => (
              <Tag key={tech}>{tech}</Tag>
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
      <div className='flex flex-col justify-center items-center gap-4'>
        <span className='text-4xl font-bold'>EXPERIENCE</span>
        <div className='flex flex-col justify-center items-center gap-4 mt-2 w-full'>
          <WorkExperienceItem
            companyName='Mercado Libre'
            since='April 2025'
            to='Present'
            position='Ssr Software Engineer'
            description={`Working alongside the Data Science team to develop multiple machine learning solutions for the company's internal products`}
            technologies={[
              'Python',
              'Machine Learning',
              'Infrastructure',
              'Performance & Scalability',
            ]}
            link='https://www.mercadolibre.com.ar/'
          />
          <WorkExperienceItem
            companyName='Sendblue'
            since='April 2023'
            to='March 2025'
            position='Chief Technology Officer'
            description={`Leading the technology team to work with a big infrastructure to send messages through iMessage.${'\n'}Working with the CEO to define the company's strategy`}
            technologies={[
              'Next.js',
              'Node.js',
              'AWS',
              'Express.js',
              'Firebase',
              'Prisma',
              'PostgreSQL',
            ]}
            link='https://www.sendblue.com/'
          />
          <WorkExperienceItem
            companyName='Seenka'
            since='November 2021'
            to='April 2023'
            position='Product Team Lead'
            description={
              'Lead a team of 6 developers where we built and mantained a platform with a huge cloud infrastructure'
            }
            technologies={[
              'Python',
              'Django',
              'Google Cloud Services',
              'Docker',
              'Kubernetes',
            ]}
            link='https://www.seenka.com/'
          />
        </div>
      </div>
    </>
  );
}
