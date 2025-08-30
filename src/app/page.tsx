'use client';

import { useRef, useState } from 'react';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Index from '../components/Index';
import About from '../components/About';
import AnimatedTypeWritter from '../components/AnimatedTypeWritter';
import AnimatedPageContent from '../components/AnimatedPageContent';
import Contact from '../components/Contact';
import AnimatedSubTitle from '../components/AnimatedSubTitle';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main className='relative flex flex-col bg-cover bg-fixed bg-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900'>
      <AnimatedTypeWritter onFinish={() => setShowContent(true)} />
      {showContent && (
        <div>
          <AnimatedPageContent>
            <AnimatedSubTitle />
            <section className='flex mt-48' id='body'>
              <section className='flex flex-col w-1/4'>
                <div className='sticky top-0'>
                  <div className='flex justify-center mt-80'>
                    <Index
                      aboutRef={aboutRef}
                      experienceRef={experienceRef}
                      projectsRef={projectsRef}
                      contactRef={contactRef}
                    />
                  </div>
                </div>
              </section>

              <section className='flex w-2/3'>
                <section className='flex flex-col gap-12 w-full'>
                  <section className='flex justify-center' ref={aboutRef}>
                    <div className='w-full max-w-[85%]'>
                      <About />
                    </div>
                  </section>
                  <section ref={experienceRef}>
                    <WorkExperience />
                  </section>
                  <section ref={projectsRef}>
                    <Projects />
                  </section>
                </section>
              </section>
            </section>
            <section className='mt-24' ref={contactRef}>
              <Contact />
            </section>
          </AnimatedPageContent>
        </div>
      )}
    </main>
  );
}
