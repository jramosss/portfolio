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
  const stringFormatter = (str: string) => {
    return `<span style="color:white">${str}</span>`;
  };

  return (
    <main lang="en" className={violentFont.className}>
      <TypeWritterEffect
        onInit={(tw) => {
          tw.typeString(stringFormatter("DO"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("I"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("HAVE"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("YOUR"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("ATTENTO"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("ATTENTIN"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("F***"))
            .pauseFor(150)
            .deleteAll()
            .typeString(stringFormatter("ATTENTION?"))
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
    </main>
  );
}

function NiceWritter({ callback }: { callback: () => void }) {
  const stringFormatter = (str: string) => {
    return `<span style="color:white">${str}</span>`;
  };

  return (
    <main lang="en" className={niceFont.className}>
      <TypeWritterEffect
        onInit={(tw) => {
          tw.typeString(stringFormatter("Great :)"))
            .pauseFor(300)
            .deleteAll()
            .typeString(
              '<span style="color:white">My name is <span style="color:white,opacity:0.5">Julián</span></span>'
            )
            .pauseFor(300)
            .callFunction(callback)
            .start();
        }}
        options={{
          delay: 30,
          deleteSpeed: 30,
          autoStart: true,
        }}
      />
    </main>
  );
}

export default function TypeWritter({ didItEnd }: { didItEnd: () => void }) {
  const [currentAnimation, setCurrentAnimation] = useState<"violent" | "nice">(
    "violent"
  );

  return (
    <div>
      {currentAnimation === "violent" ? (
        <ViolentWritter callback={() => setCurrentAnimation("nice")} />
      ) : (
        <NiceWritter callback={didItEnd} />
      )}
    </div>
  );
}
