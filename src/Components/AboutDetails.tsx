import { Download, Flame, Users, Coffee, BarChart3 } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Info } from "../User";

const AboutDetails = () => {
  const { ref: skillRef, inView: skillInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { label: "Backend", color: "bg-red-400", value: 85 },
    { label: "Frontend", color: "bg-yellow-400", value: 95 },
    { label: "UI/UX", color: "bg-green-400", value: 50 },
  ];

  const stats = [
    {
      icon: <Flame size={36} className="mx-auto text-primaryColor" />,
      value: 25,
      label: "Personal Projects Completed",
    },
    {
      icon: <Users size={36} className="mx-auto text-primaryColor" />,
      value: 8,
      label: "Satisfied Clients",
    },
    {
      icon: <Coffee size={36} className="mx-auto text-primaryColor" />,
      value: 30,
      label: "Cup of Coffee",
    },
    {
      icon: <BarChart3 size={36} className="mx-auto text-primaryColor" />,
      value: 1,
      label: "Year of Experience",
    },
  ];

  return (
    <div
      id="About"
      className="pt-32 -mt-20 px-16 lg:px-0 mx-20 md-mx:px-6 sm-mx:px-6 lg-mx:mx-0  my-10 mb-28 font-mono text-white bg-bgColor"
    >
      {/* Heading */}
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-primaryColor">
        About Me
      </h1>

      {/* Description */}
      <div
        className="text-center max-w-4xl mx-auto mb-10"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="text-lg sm-mx:text-base xs-mx:text-sm mb-6 text-gray-200">
          {Info.bio}
        </div>
      </div>

      {/* Skill Bars */}
      <div
        className="grid sm:grid-cols-3 gap-6 mb-14 max-w-5xl mx-auto text-sm"
        ref={skillRef}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1 font-semibold text-gray-300">
              <span>{skill.label}</span>
              <span className="text-white">
                {skillInView ? (
                  <CountUp
                    start={1}
                    end={skill.value}
                    duration={1.5}
                    suffix="%"
                  />
                ) : (
                  "0%"
                )}
              </span>
            </div>
            <div className="w-full bg-[#1a2a3c] rounded-full h-3 overflow-hidden">
              <div
                className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: skillInView ? `${skill.value}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-300 max-w-5xl mx-auto"
        ref={statsRef}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {stats.map((stat, index) => (
          <div key={index}>
            {stat.icon}
            <h3 className="text-2xl font-bold text-white mt-2">
              {statsInView ? (
                <CountUp start={1} end={stat.value} duration={3} suffix="+" />
              ) : (
                "0+"
              )}
            </h3>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutDetails;
