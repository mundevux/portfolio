const SkillCard = ({ srcicon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow mx-4 col-span-6 lg:col-span-1 my-2 hover:bg-secondary/20">
      <div className=" mb-2">
        <img src={srcicon} className="w-8 h-8 mr-2" />
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
      </div>
      <p className=" text-sm md:text-base">{description}</p>
    </div>
  );
};

export default SkillCard;
