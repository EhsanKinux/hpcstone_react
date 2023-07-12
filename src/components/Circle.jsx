const Circle = (props) => {
  return (
    <div
      className="rounded-full absolute opacity-10 -z-50"
      style={{ ...props }}
    />
  );
};

export default Circle;
