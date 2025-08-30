import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

function LinkedinSVG() {
  return (
    <Link href='https://www.linkedin.com/in/julian--ramos/'>
      <FaLinkedin className='h-6 w-6 opacity-80 hover:opacity-100' />
    </Link>
  );
}

function GithubSVG() {
  return (
    <Link href='https://github.com/jramosss'>
      <FaGithub className='h-6 w-6 opacity-80 hover:opacity-100' />
    </Link>
  );
}

function EmailSVG() {
  return (
    <Link href='mailto:jramostod@gmail.com'>
      <CiMail className='h-8 w-8 opacity-80 hover:opacity-100' />
    </Link>
  );
}

export default function Contact() {
  return (
    <section className='flex flex-col gap-20 mb-8'>
      <section className='flex justify-center'>
        <div className='flex flex-col gap-4 w-[750px]'>
          <h2 className='text-5xl font-bold text-center'>CONTACT</h2>
          <p className='text-center text-xl mt-4'>
            <Link href='mailto:jramostod@gmail.com' className='text-blue-500' />
          </p>
          <div className='flex justify-center gap-4 items-center'>
            <LinkedinSVG />
            <GithubSVG />
            <EmailSVG />
          </div>
        </div>
      </section>
    </section>
  );
}
