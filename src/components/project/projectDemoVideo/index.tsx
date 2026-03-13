import { ProjectsType } from "@/types/projectsType";

export default function ProjectDemoVideo(props: ProjectsType["video"]) {
  return (
    <section
      className={`w-full bg-linear-to-b ${props.sectionStyle} flex flex-col justify-center items-center gap-11 px-8 pt-12 pb-20 shadow xl:gap-16 xl:pt-70px xl:pb-100px`}
    >
      <h2
        className={`w-65 ${props.titleStyle} text-28px text-center -mb-5 drop-shadow xl:w-full xl:text-32px`}
      >
        Demonstração de Uso
      </h2>

      <div
        className={`relative w-[320px] h-42.25 bg-[url(/assets/laptop-mockup.avif)] bg-no-repeat bg-cover filter drop-shadow xl:w-212.5 xl:h-112`}
      >
        <video
          width={240}
          height={127}
          controls
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          className={`absolute top-2.5 left-10 xl:top-5.25 xl:left-100px xl:w-161.5 xl:h-auto`}
        >
          <source src={props.src} type="video/mp4" />
          
          Seu navegador não suporta esse vídeo.
        </video>
      </div>
    </section>
  );
}
