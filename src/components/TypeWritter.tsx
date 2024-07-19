"use client";

import { Montserrat, Bree_Serif } from "next/font/google";
import { useState } from "react";
import TypeWritterEffect from "typewriter-effect";

const niceFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const violentFont = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

function ViolentWritter({ callback }: { callback: () => void }) {
  return (
    <html lang="en" className={violentFont.className}>
      <TypeWritterEffect
        onInit={(tw) => {
          tw.typeString("DO")
            .pauseFor(150)
            .deleteAll()
            .typeString("I")
            .pauseFor(150)
            .deleteAll()
            .typeString("HAVE")
            .pauseFor(150)
            .deleteAll()
            .typeString("YOUR")
            .pauseFor(150)
            .deleteAll()
            .typeString("ATTENTO")
            .pauseFor(150)
            .deleteAll()
            .typeString("ATTENTIN")
            .pauseFor(150)
            .deleteAll()
            .typeString("F***")
            .pauseFor(150)
            .deleteAll()
            .typeString("ATTENTION?")
            .pauseFor(150)
            .deleteAll()
            .callFunction(callback)
            .start();
        }}
        options={{
          delay: 30,
          deleteSpeed: 30,
          autoStart: true,
          skipAddStyles: false,
        }}
      />
    </html>
  );
}

function NiceWritter({ callback }: { callback: () => void }) {
  return (
    <html lang="en" className={niceFont.className}>
      <TypeWritterEffect
        onInit={(tw) => {
          tw.typeString("Great :)")
            .pauseFor(300)
            .deleteAll()
            .typeString("My name is Julián")
            .pauseFor(400)
            .deleteAll()
            .typeString("I am a Fullstack software eng...")
            .pauseFor(250)
            .deleteAll(40)
            .typeString("Actually...")
            .pauseFor(400)
            .deleteAll()
            .typeString("I am a bit more than just that...")
            .pauseFor(400)
            .deleteAll(40)
            .typeString("Keep reading :)")
            .pauseFor(1000)
            .callFunction(callback)
            .start();
        }}
        options={{
          delay: 30,
          deleteSpeed: 30,
          autoStart: true,
        }}
      />
    </html>
  );
}

export default function TypeWritter() {
  const [currentAnimation, setCurrentAnimation] = useState<"violent" | "nice">(
    "violent"
  );

  return (
    <main>
      {currentAnimation === "violent" ? (
        <ViolentWritter callback={() => setCurrentAnimation("nice")} />
      ) : (
        <NiceWritter callback={() => {}} />
      )}
    </main>
  );
}
