import { Card, Text } from "@mantine/core";
import { useEffect, useRef } from "react";

const ServiceCard = ({ icon, title, desc }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const glowClass = "hover:!shadow-[0_0_10px_2px_#64FFDA80]";
    card.classList.add(glowClass);

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-[380px] sm:max-w-[90%] font-mono"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Card
        className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out -m-2 hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <div className="p-2">
          <div className="mb-3">
            <span className="text-4xl text-[#64FFDA]">{icon}</span>
          </div>
          <div className="flex items-center gap-3 text-white text-2xl font-bold mb-3">
            {title}
          </div>
          <Text
            className="!text-justify !text-sm xs:!text-xs"
            lineClamp={5}
            size="sm"
            c="dimmed"
          >
            {desc}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
