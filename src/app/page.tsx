"use client";

import Projects from "../components/Projects";
import TopBar from "../components/TopBar";
import TypeWritter from "../components/TypeWritter";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <main className="h-full bg-blue-950">
      <section>
        <TopBar />
      </section>
      <section className="flex justify-center items-center mt-12">
        <TypeWritter />
      </section>
      <section className="flex justify-between mt-12">
        <section className="w-full">
          <WorkExperience />
        </section>
        <div className="border-r border-white h-[720px] border-x-4" />
        <section className="w-full">
          <Projects />
        </section>
      </section>
    </main>
  );
}
