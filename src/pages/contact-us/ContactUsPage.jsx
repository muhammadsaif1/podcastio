import PageHero from "@/components/PageHero/PageHero";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import NewsLetter from "../index-one/NewsLetter";
import ContactUs from "./ContactUs";
import GetInTouch from "./GetInTouch";

const ContactUsPage = () => {
  return (
    <>
      <PageHero
        pageTitle="Contact"
        highlightWord="US"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <GetInTouch />
      <ContactUs />
      <NewsLetter bg={"texture-bg-2"} />
      <NewsLetterForm2 />
    </>
  );
};

export default ContactUsPage;
