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

const ProjectCard = ({
  title,
  desc,
  image,
  live,
  link,
  github,
  technologies,
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
      className="w-[95%] sm:w-auto lg:p-2 mt-1 max-md:!m-2 pt-1"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Card
        onClick={open}
        className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
  className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] object-cover h-[180px] w-full"        
      src={image}
            alt={image}
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          <div className="flex justify-between items-center w-full">
            <div className="!text-2xl  gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl">
              {title}
            </div>
            {live && (
              <Badge
                className="!px-2 !mx-4"
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    className="!mr-0.5 !z-0"
                    color="red"
                    position="middle-end"
                    size={7}
                    processing
                  />
                }
              >
                Live
              </Badge>
            )}
          </div>
        </Group>

        <Group mb="sm" className="!gap-2">
          {technologies.slice(0, 3).map((tech: string, index: number) => (
            <Badge key={index} size={badge} variant="light" color="#64FFDA">
              {tech}
            </Badge>
          ))}
        </Group>

        <Text
          className="!text-justify !text-sm xs-mx:!text-xs"
          lineClamp={5}
          size="sm"
          c="dimmed"
        >
          {desc}
        </Text>

        <Button
          onClick={open}
          className="mt-4"
          color="#64FFDA"
          variant="outline"
          radius="md"
        >
          Show More
        </Button>
      </Card>

      <FullProjectModal
        opened={opened}
        close={close}
        title={title}
        desc={desc}
        image={image}
        live={live}
        link={link}
        github={github}
        technologies={technologies}
      />
    </div>
  );
};

export default ProjectCard;
