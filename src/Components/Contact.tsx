import { useState,useEffect } from "react";
import { Button, Modal, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import FloatingInputStatic from "./FloatingInputStatic";

const Contact = () => {
  const [opened, setOpened] = useState(false);
  const btn = useMatches({
    xsm: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

   useEffect(() => {
    if (opened) {
      const timeout = setTimeout(() => setOpened(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [opened]);

  const handleFormSubmit = () => {
    setTimeout(() => {
      setOpened(true);
    }, 1000);
  };

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono"
      id="Contact"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-primaryColor">
        Contact
      </h1>

      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4"
      >
        <div className="text-3xl flex gap-2 items-center justify-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
          Let's Connect
          <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>

        {/* Hidden iframe to prevent redirect */}
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

        <form
          action="https://forms.zohopublic.in/abhinavmishranit1234gm1/form/ContactUs/formperma/aaduY8Zk0GEIp3rHQVtq-1jRZ6MZpGyD3P_VmGiHy48/htmlRecords/submit"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          target="hidden_iframe"
          className="flex flex-col gap-6"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />

          <FloatingInputStatic id="Name_First" name="Name" required />
          <FloatingInputStatic id="Email" name="Email" required />
          <FloatingInputStatic
            id="PhoneNumber_countrycode"
            name="Phone Number"
          />
          <FloatingInputStatic
            id="MultiLine"
            name="Message"
            required
            isTextArea
          />

          <Button
            type="submit"
            fullWidth
            rightSection={<IconArrowRight size={20} />}
            className="!text-bgColor !font-bold"
            variant="filled"
            size={btn}
            color="#64FFDA"
            radius="lg"
          >
            Send
          </Button>
        </form>
      </div>

      {/* Modal with embedded thank you page */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        size="auto"
        padding={0}
        classNames={{
          content: "!bg-transparent !shadow-none !p-0 border-none",
          body: "!p-0 m-0 overflow-visible",
        }}
        styles={{
          inner: {
            padding: 0,
            background: "transparent",
          },
        }}
      >
        <iframe
          src="/thankyou.html"
          className="w-[90vw] max-w-[520px] h-[300px] sm:h-[270px] rounded-xl overflow-hidden"
          frameBorder={0}
          scrolling="no"
          style={{
            display: "block",
            backgroundColor: "transparent",
          }}
        />
      </Modal>
    </div>
  );
};

export default Contact;
