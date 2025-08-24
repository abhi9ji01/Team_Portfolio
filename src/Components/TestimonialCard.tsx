import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import FullProjectModal from "./FullProjectModal";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialCard = ({
  desc,
  image,
  name,
  designation,
  swiperRef,
}: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const badge = useMatches({ xsm: "sm", md: "md", lg: "lg" });
  // const btn = useMatches({ xs: "xs", sm: "sm", md: "md" });

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !swiperRef?.current?.autoplay) return;

    const stop = () => swiperRef.current?.autoplay?.stop();
    const start = () => swiperRef.current?.autoplay?.start();

    card.addEventListener("mouseenter", stop);
    card.addEventListener("mouseleave", start);

    return () => {
      card.removeEventListener("mouseenter", stop);
      card.removeEventListener("mouseleave", start);
    };
  }, [swiperRef]);

  return (
    <div
      ref={cardRef}
      className="w-[75%] mx-auto position-relative lg:p-2 mt-1 max-md:!m-2 pt-1"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Card
        onClick={open}
        className="!bg-bgColor pb-4 cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
        shadow="lg"
        padding="xl"
        radius="lg"
        withBorder
      >
<div className="flex justify-center items-start gap-2 mt-2 pb-4">
  {/* Left Quote */}
  <FaQuoteLeft className="relative -top-1 text-xl text-gray-400" />

  {/* The Text */}
  <Text
    className="text-center max-w-2xl"
    lineClamp={5}
    size="xl"
    c="dimmed"
  >
    {desc}
  </Text>

  {/* Right Quote */}
  <FaQuoteRight className="relative top-1 text-xl text-gray-400" />
</div>

        <div className="flex flex-row justify-center gap-2 p-1 mt-2">
          <FaStar className="text-[#FFD700] text-base" />
          <FaStar className="text-[#FFD700] text-base" />
          <FaStar className="text-[#FFD700] text-base" />
          <FaStar className="text-[#FFD700] text-base" />
          <FaStar className="text-[#FFD700] text-base" />
        </div>

      </Card>
      <div className="w-24 h-24 absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
       <img
              className="w-full  h-full rounded-full border-[0.1rem] !border-primaryColor object-cover"
              src={image}
              alt="Profile"
            />
        {/* <Image
          src={image}
          alt="client-4 picture"
          width={24}  // match w-24 (6rem = 96px)
          height={24} // match h-24
          className="rounded-full border-[0.325rem] !border-primaryColor object-cover"
        /> */}
      </div>
      <div className="pt-12 mb-4 text-center font-medium text-white">
        <h3 className="pt-[0.8rem] capitalize">{name}</h3>
        <p className="pb-8 capitalize fw-light">{designation}</p>
      </div>
    </div>
  );
};


export default TestimonialCard;
