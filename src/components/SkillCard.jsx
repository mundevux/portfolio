const SkillCard = ({ srcicon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow mx-4 col-span-6 lg:col-span-1">
      <div className=" mb-2">
        <img src={srcicon} className="w-8 h-8 mr-2" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
