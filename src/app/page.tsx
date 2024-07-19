"use client";

import TopBar from "../components/TopBar";
import TypeWritter from "../components/TypeWritter";

export default function Home() {
  return (
    <main>
      <div>
        <TopBar />
      </div>
      <div className="flex justify-center items-center mt-12">
        <TypeWritter />
      </div>
    </main>
  );
}
