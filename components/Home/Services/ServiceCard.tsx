import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, title, description }: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-9 hover:transform hover:scale-103 transition-all duration-300 bg-white">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-xl mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
