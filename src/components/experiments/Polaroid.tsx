interface Props {
  title: string;
  image: string;
}

const Polaroid = ({ title, image }: Props) => {
  return (
    <div className="h-44 w-36 border border-gray-400 pb-0 p-1 bg-white rounded-2xl text-background focus:scale-[1.15] hover:scale-[1.15] transition ease-in-out duration-200">
      <img
        className="w-full h-[80%] bg-background object-cover rounded-xl"
        src={image}
        alt="stamp"
      />
      <div className="text-center text-sm font-caveat pt-1.5">{title}</div>
    </div>
  );
};

export default Polaroid;
