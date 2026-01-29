import SectionBackground from "@/components/sectionBackground";
import Form from "./form";
import SocialMedia from "./socialMedia";

export default function Contacts() {
  return (
    <section
      id="contatos"
      className={`relative px-5 pt-11 pb-20 -mb-2 flex flex-col items-center gap-16 xl:w-[1078px] xl:mb-auto xl:py-16`}
    >
      {/* background */}
      <SectionBackground
        src={`contact`}
        mobileHeight={832}
        desktopHeight={588}
      />

      {/* content */}
      <Form />

      <SocialMedia />
    </section>
  );
}
