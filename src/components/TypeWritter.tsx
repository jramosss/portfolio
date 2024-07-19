import TypeWritterEffect from "typewriter-effect";

export default function TypeWritter() {
  const formatStringWithGivenStyle = (str: string) =>
    `<span class='typewritter'>${str}</span>`;

  return (
    <div className="h-full">
      <TypeWritterEffect
        onInit={(tw) => {
          tw.typeString(formatStringWithGivenStyle("DO"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("I"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("HAVE"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("YOUR"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("ATTENTO"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("ATTENTIN"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("FUCK"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("ATTENTION?"))
            .pauseFor(150)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("Hey :)"))
            .pauseFor(300)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("My name is Julian"))
            .pauseFor(400)
            .deleteAll()
            .typeString(
              formatStringWithGivenStyle("I am a Fullstack software eng...")
            )
            .pauseFor(250)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("Actually..."))
            .pauseFor(400)
            .deleteAll()
            .typeString(
              formatStringWithGivenStyle("I am a bit more than just that...")
            )
            .pauseFor(400)
            .deleteAll()
            .typeString(formatStringWithGivenStyle("Keep reading :)"))
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
