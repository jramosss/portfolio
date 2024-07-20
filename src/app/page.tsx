"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import TypeWritter from "../components/TypeWritter";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="relative flex flex-col h-screen bg-blue-950">
      <motion.section
        className={`absolute left-1/2 transform -translate-x-1/2 ${
          showContent ? "top-4" : "top-1/2 -translate-y-1/2"
        } transition-all duration-1000 ease-in-out`}
        initial={{ fontSize: "6rem" }}
        animate={{ fontSize: showContent ? "2rem" : "6rem" }}
        transition={{ duration: 1 }}
      >
        <TypeWritter didItEnd={() => setShowContent(true)} />
      </motion.section>
      {showContent && (
        <motion.section
          className="flex justify-between mt-36 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section className="w-full">
            <WorkExperience />
          </section>
          <div className="border-r border-white border-x-4" />
          <section className="w-full">
            <Projects />
          </section>
        </motion.section>
      )}
    </main>
  );
}
