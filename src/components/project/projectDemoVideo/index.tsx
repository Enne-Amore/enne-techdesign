import { ProjectsType } from "@/types/projectsType";

export default function ProjectDemoVideo(props: ProjectsType["video"]) {
  return (
    <section
      className={`w-full bg-gradient-to-b ${props.sectionStyle} flex flex-col justify-center items-center gap-11 px-8 pt-12 pb-20 shadow xl:gap-16 xl:pt-70px xl:pb-100px`}
    >
      <h2
        className={`w-[260px] ${props.titleStyle} text-28px text-center text-shadow-2xs -mb-5 xl:w-full xl:text-32px`}
      >
        Demonstração de Uso
      </h2>

      <div
        className={`relative w-[320px] h-[169px] bg-[url(/assets/laptop-mockup.png)] bg-no-repeat bg-cover filter drop-shadow xl:w-[800px] xl:h-[422px]`}
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
          className={`absolute top-[10px] left-[40px] xl:top-[21px] xl:left-[100px] xl:w-[600px] xl:h-auto`}
        >
          <source src={props.src} type="video/mp4" />
          
          Seu navegador não suporta esse vídeo.
        </video>
      </div>
    </section>
  );
}
