import { useState } from "react";

import Social from "/src/components/Social.jsx";
import AvatarMundev from "/src/assets/mudevux-avatar.svg";
import IconGraphicDesign from "/src/assets/graphic-design.png";
import IconFrontend from "/src/assets/ux-design.png";
import IconResponsive from "/src/assets/ui-design.png";
import IconSeo from "/src/assets/seo.png";
import IconOptimization from "/src/assets/Optimization.png";
import SkillCard from "./SkillCard";
import MyPhoto from "/src/assets/Profile-Photo.png";

export default function Home() {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleShowFullContent = () => {
    setShowFullContent(true);
  };

  const socialLinks = [
    { title: "Twitter", path: "https://twitter.com/MundevUx" },
    { title: "Linkedin", path: "https://www.linkedin.com/in/cacuitiva/" },
    { title: "Github", path: "https://github.com/mundevux" },
  ];

  const skills = [
    {
      title: "Diseño UX/UI",
      description:
        "Soy un apasionado de crear experiencias de usuario intuitivas y atractivas. Me enfoco en comprender las necesidades de los usuarios y diseñar interfaces que sean fáciles de usar y agradables visualmente.",
      icon: IconGraphicDesign,
    },
    {
      title: "Desarrollo Frontend",
      description:
        "Tengo conocimientos en desarrollo frontend y puedo convertir diseños en código funcional. Utilizo HTML, CSS y JavaScript para construir interfaces interactivas y colaborar con el equipo de desarrollo en la implementación de funcionalidades.",
      icon: IconFrontend,
    },
    {
      title: "Diseño Responsivo",
      description:
        "Me especializo en el diseño responsive, adaptando sitios web para que se vean y funcionen correctamente en diferentes dispositivos. Utilizo técnicas de diseño fluido y media queries para asegurar una experiencia de usuario consistente en computadoras, tablets y teléfonos móviles.",
      icon: IconResponsive,
    },
    {
      title: "SEO y Accessibilidad",
      description:
        "Tengo familiaridad con los conceptos básicos de SEO y accesibilidad, y puedo aplicar principios fundamentales para mejorar la visibilidad de un sitio web en los motores de búsqueda y garantizar que sea accesible para personas con discapacidades.",
      icon: IconSeo,
    },
    {
      title: "Optimization",
      description:
        "Me interesa la optimización de sitios web para mejorar su rendimiento. A través de técnicas como la compresión de imágenes, la optimización del código y la implementación de buenas prácticas, busco mejorar la velocidad de carga y la eficiencia de los sitios web.",
      icon: IconOptimization,
    },
  ];

  return (
    <>
      {/*+--------------------------- Header -----------------------------------+*/}
      <section className="grid grid-cols-2 place-items-center mt-6 lg:mt-12">
        <div className=" col-span-2 lg:col-span-1">
          <img src={AvatarMundev} className="w-[1024px] lg:-mt-10"></img>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="pb-6 text-center lg:text-start px-2">
            <h1 className="text-2xl md:text-4xl font-semibold text-secondary/80">
              Hola 👋! Soy Camilo
            </h1>
            <p className="text-4xl md:text-6xl font-bold text-primary">
              Junior<br></br>Ingeniero UX/UI<br></br>& Desarrollador Frontend
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            {socialLinks.map((link, index) => (
              <Social key={index} url={link.path} label={link.title} />
            ))}
          </div>
        </div>
      </section>
      {/*+--------------------------- Fin Header -----------------------------------+*/}
      {/*+--------------------------- Habilidades -----------------------------------+*/}
      <section className="my-20 mx-auto px-4">
        <div className="mb-5 flex">
          <h2 className="text-xl md:text-3xl font-bold text-secondary/80">
            Habilidades <br></br>
            <span className="font-semibold text-primary text-base md:text-2xl">
              Estas son algunas de mis skills
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
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
      {/*+--------------------------- Fin Habilidades -----------------------------------+*/}
      {/*+--------------------------- Sobre mi -----------------------------------+*/}
      <section className="my-10 mx-auto px-4">
        <div className="mb-5 flex">
          <h2 className="text-xl md:text-3xl font-bold text-secondary/80">
            Sobre mi <br></br>
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 lg:pr-10 text-primary">
            <p className="text-base md:text-lg">
              Soy un estudiante de Ingeniería de Software actualmente cursando
              el sexto semestre de mi carrera. Anteriormente, estudié Contaduría
              Pública y completé seis semestres, pero decidí cambiar de rumbo y
              seguir mi verdadera pasión por la programación y el diseño web.
            </p>
            <br></br>
            <p className="text-base md:text-lg">
              Durante más de diez años, he trabajado en roles contables,
              adquiriendo habilidades en la gestión financiera y el análisis de
              datos. Sin embargo, siempre he sentido una gran afinidad hacia el
              desarrollo y diseño web, por lo que estoy dedicando tiempo y
              esfuerzo a aprender de forma autodidacta en este campo.
            </p>
            <br></br>
            {showFullContent ? (
              <>
                <p className="text-base md:text-lg">
                  Resido en Bogotá, Colombia, y tengo 28 años. Además de mis
                  estudios y trabajo, tengo una vida personal estable con una
                  pareja y un hijo. Disfruto maratonear series de televisión y
                  tengo un gusto muy variado en cuanto a música.
                </p>
                <br></br>
                <p className="text-base md:text-lg">
                  Mi objetivo es combinar mis conocimientos en contabilidad y mi
                  creciente pasión por la ingeniería de software para
                  desarrollar soluciones tecnológicas innovadoras y funcionales.
                  Estoy emocionado por seguir aprendiendo y creciendo en este
                  campo y contribuir al crecimiento de la industria del
                  desarrollo web en mi país.
                </p>
                <br></br>
              </>
            ) : null}
            {!showFullContent && (
              <button
                className="text-secondary/80 underline"
                onClick={handleShowFullContent}
              >
                Seguir leyendo...
              </button>
            )}
          </div>
          <div className="w-[600px]">
            <img src={MyPhoto} alt="My Photo" />
          </div>
        </div>
      </section>
      {/*+--------------------------- Fin Sobre mi -----------------------------------+*/}
    </>
  );
}
