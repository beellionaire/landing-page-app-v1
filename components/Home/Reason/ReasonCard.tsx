import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ReasonCard = ({ image, title, description }: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-9 hover:transform hover:scale-103 transition-all duration-300 bg-white">
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-xl mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ReasonCard;
