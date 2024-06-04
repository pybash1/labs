interface Props {
  image: string;
}

const Stamp = ({ image }: Props) => {
  return (
    <div
      className="h-36 w-28 p-2"
      style={{
        backgroundImage: "radial-gradient(transparent 5px, #ffffff 0)",
        backgroundSize: "16px 16px",
        backgroundPosition: "-8px -8px",
      }}
    >
      <img
        className="w-full h-full bg-background object-cover"
        src={image}
        alt="stamp"
      />
    </div>
  );
};

export default Stamp;
