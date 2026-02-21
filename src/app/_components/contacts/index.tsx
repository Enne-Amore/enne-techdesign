import SectionBackground from "@/components/sectionBackground";
import Form from "./form";
import SocialMedia from "./socialMedia";

export default function Contacts() {
  return (
    <section
      id="contatos"
      {...(window.innerWidth > 1280 ? { "data-aos": "zoom-in" } : {})}
      className={`relative px-5 pt-11 pb-20 flex flex-col items-center gap-16 scroll-mt-4 xl:w-269.5 xl:py-16 xl:scroll-mt-48`}
    >
      {/* background */}
      <SectionBackground
        src={`contact`}
        mobileHeight={832}
        desktopHeight={588}
        darkMode
      />

      {/* content */}
      <Form />

      <SocialMedia />
    </section>
  );
}
