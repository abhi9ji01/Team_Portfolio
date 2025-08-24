import { IconHexagonLetterA } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em, Button } from "@mantine/core";
import { useEffect, useState } from "react";

const links = ["About", "Projects","Testimonials", "Skills", "Experience", "Contact"];

const navLinks = (col: boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };

  return links.map((link, index) => {
    const isContact = link === "Contact";

    return (
      <a
        key={index}
        onClick={handleClick}
        href={`#${link}`}
        className={`${col ? "flex flex-col items-center mt-2" : ""}`}
      >
        {isContact ? (
          <Button
            className="focus-visible:!outline-none !text-bgColor lg:-mt-1 !font-mono !text-lg !px-4 !py-1
             hover:!text-primaryColor hover:!bg-bgColor 
             hover:!border-[#64FFDA] hover:!border"
            variant="filled"
            color="#64FFDA"
          >
            Contact
          </Button>
        ) : (
          <span
            className={`${
              col
                ? "text-textColor text-lg font-mono hover:text-primaryColor"
                : "text-textColor text-lg font-mono hover:text-primaryColor"
            }`}
          >
            {link}
          </span>
        )}
      </a>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${
        shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
      } transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20`}
    >
      <IconHexagonLetterA
        className="z-10"
        size={isMobile ? 45 : 60}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="bs:flex gap-8 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
