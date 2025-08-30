function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className='text-gray-400 break-words text-lg'>{children}</p>;
}

export default function About() {
  return (
    <div className='flex flex-col justify-center text-justify'>
      <Paragraph>
        <strong>There is a stereotype about developers</strong>, that they do
        not like to communicate with others and just want to lock up in their
        rooms and write weird green symbols in a black canvas.
      </Paragraph>
      <Paragraph>
        Well, I am not here to say if its true or not, but I can say that{' '}
        <strong>I do not fit that much in that definition.</strong>
      </Paragraph>
      <Paragraph>
        I like to express myself, to have a discussion where we can debate our
        ideas about work and can laugh at the same time.
      </Paragraph>
      <Paragraph>
        I am also very interested in leadership and carrying away a team where
        we can all learn from each other.
      </Paragraph>
      <Paragraph>
        <strong>But do not get me wrong...</strong> I also like my weird green
        symbols very much
      </Paragraph>
    </div>
  );
}
