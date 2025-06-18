const ButtonExpand = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <a
      href="#"
      className={`${containerStyles} inline-block rounded-sm px-8 py-3 text-sm font-medium transition hover:scale-105 hover:shadow-xl focus:ring-3 focus:outline-hidden`}
    >
      {text}
    </a>
  );
};

export default ButtonExpand;
