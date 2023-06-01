const Button = ({ href, text }) => {
  return (
    <button className="pr-4 md:pr-0">
      <a
        href={href}
        className="inline-block text-sm md:text-base font-medium px-4 py-2 leading-none rounded text-white bg-quaternary hover:bg-quinary transition"
      >
        {text}
      </a>
    </button>
  );
};

export default Button;
