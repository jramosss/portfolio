"use client";

import Projects from "../components/Projects";
import TypeWritter from "../components/TypeWritter";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-blue-950">
      <section className="flex justify-center items-center mt-12">
        <TypeWritter />
      </section>
      <section className="flex justify-between mt-12 flex-grow">
        <section className="w-full">
          <WorkExperience />
        </section>
        <div className="border-r border-white border-x-4" />
        <section className="w-full">
          <Projects />
        </section>
      </section>
    </main>
  );
}
