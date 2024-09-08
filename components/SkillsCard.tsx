const SkillsCard = ({ skill }) => {
  return (
    <div className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center p-4 group transition-all duration-300">
      <div className="text-6xl text-white mb-2 group-hover:text-accent ">
        {skill.icon}
      </div>
      {/* <p className="text-white text-lg font-medium group-hover:text-accent">
        {skill.name}
      </p> */}
    </div>
  );
};

export default SkillsCard;
