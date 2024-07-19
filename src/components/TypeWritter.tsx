import TypeWritterEffect from "typewriter-effect";

export default function TypeWritter() {
  const formatStringWithCapsStyle = (str: string) =>
    `<span class='typewritter-caps'>${str}</span>`;

  const formatStringWithNiceStyle = (str: string) =>
    `<span class='typewritter-nice'>${str}</span>`;

  return (
    <div className="h-full">
      <TypeWritterEffect
        onInit={(tw) => {
          tw.typeString(formatStringWithCapsStyle("DO"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("I"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("HAVE"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("YOUR"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("ATTENTO"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("ATTENTIN"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("FUCK"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithCapsStyle("ATTENTION?"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithNiceStyle("Hey :)"))
            .pauseFor(300)
            .deleteAll()
            .typeString(formatStringWithNiceStyle("My name is Julian"))
            .pauseFor(400)
            .deleteAll()
            .typeString(
              formatStringWithNiceStyle("I am a Fullstack software eng...")
            )
            .pauseFor(250)
            .deleteAll()
            .typeString(formatStringWithNiceStyle("Actually..."))
            .pauseFor(400)
            .deleteAll()
            .typeString(
              formatStringWithNiceStyle("I am a bit more than just that...")
            )
            .pauseFor(400)
            .deleteAll()
            .typeString(formatStringWithNiceStyle("Keep reading :)"))
            .pauseFor(1000)
            .callFunction(() => {
              // scroll down
            })
            .start();
        }}
        options={{
          delay: 30,
          deleteSpeed: 30,
          autoStart: true,
          skipAddStyles: false,
        }}
      />
    </div>
  );
}
