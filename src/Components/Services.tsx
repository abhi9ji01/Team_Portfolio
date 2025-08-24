import ServiceCard from "./ServiceCard";
import { ServiceInfo } from "../User";

const Services = () => {
  return (
    <div className="relative  sm:px-4 my-16 font-mono" id="Services">
      <h1 className="relative text-4xl mb-16 text-center font-bold text-primaryColor sm:text-3xl xs:text-2xl">
        Our Services
      </h1>

      <div
        className="
         px-8
          lg:px-16
          flex 
          flex-wrap
          lg:flex-nowrap
          gap-10
          justify-center
          items-center
        "
      >
        {ServiceInfo.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
