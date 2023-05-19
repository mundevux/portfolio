import Social from "/src/components/Social.jsx";
import AvatarMundev from "/src/assets/mudevux-avatar.svg";
import IconGraphicDesign from "/src/assets/graphic-design.png";
import IconFrontend from "/src/assets/ux-design.png";
import IconResponsive from "/src/assets/ui-design.png";
import IconSeo from "/src/assets/seo.png";
import IconOptimization from "/src/assets/Optimization.png";
import SkillCard from "./SkillCard";

export default function Home() {
  const socialLinks = [
    { title: "Twitter", path: "https://twitter.com/MundevUx" },
    { title: "Linkedin", path: "https://www.linkedin.com/in/cacuitiva/" },
    { title: "Github", path: "https://github.com/mundevux" },
  ];

  const skills = [
    {
      title: "UX/UI Design",
      description:
        "I like to create beautiful and functional designs, I have experience in Figma, Adobe XD, Adobe Illustrator and Adobe Photoshop",
      icon: IconGraphicDesign,
    },
    {
      title: "Frontend Development",
      description:
        "I like to create beautiful and functional designs, I have experience in Figma, Adobe XD, Adobe Illustrator and Adobe Photoshop",
      icon: IconFrontend,
    },
    {
      title: "Responsive Design",
      description:
        "I like to create beautiful and functional designs, I have experience in Figma, Adobe XD, Adobe Illustrator and Adobe Photoshop",
      icon: IconResponsive,
    },
    {
      title: "SEO and Accessibility",
      description:
        "I like to create beautiful and functional designs, I have experience in Figma, Adobe XD, Adobe Illustrator and Adobe Photoshop",
      icon: IconSeo,
    },
    {
      title: "Optimization",
      description:
        "I like to create beautiful and functional designs, I have experience in Figma, Adobe XD, Adobe Illustrator and Adobe Photoshop",
      icon: IconOptimization,
    },
  ];

  return (
    <>
      <section className="grid grid-cols-2 place-items-center mt-6 lg:mt-12">
        <div className=" col-span-2 lg:col-span-1">
          <img src={AvatarMundev} className="w-[1024px] lg:-mt-10"></img>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="pb-6 text-center lg:text-start">
            <h1 className="text-2xl md:text-4xl font-semibold text-secondary">
              Hi 👋! I&apos;m Camilo
            </h1>
            <p className="text-4xl md:text-6xl font-bold text-primary">
              Junior<br></br>Web Developer<br></br>& UX/UI Designer
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            {socialLinks.map((link, index) => (
              <Social key={index} url={link.path} label={link.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="my-10 mx-auto px-4">
        <div className="mb-5">
          <h2 className="text-sm md:text-xl font-semibold text-secondary">
            Habilities
          </h2>
          <p className="text-base md:text-2xl font-bold text-primary">
            These are some of my skills
          </p>
        </div>
        <div className="grid gap-4 grid-cols-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              srcicon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
