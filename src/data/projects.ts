export const projects = [
  {
    id: "1",
    card: {
      url: "/coletive-nao-binarie-paraiba",
      ariaLabel: "Ir à página sobre o projeto Coletive Não-Binárie da Paraíba",
      img: "cnbpb",
      alt: "Logo do Coletive Não-Binárie da Paraíba",
      altHover: "Pré-visualização da página inicial do site do Coletive Não-Binárie da Paraíba",
      positions: ["UI/UX Design", "Front-end"],
      caption: "Landing Page",
    },
    header: {
      headerStyle: "bg-[#030007]",
      positions: ["UI/UX Design", "Front-end"],
      positionStyle: "bg-[#6A4EA6]/80 text-[#FFFFFD]",
      img: "cnbpb",
      alt: "Coletive Não-Binárie da Paraíba",
      mobileWidth: "320",
      mobileHeight: "80",
      desktopWidth: "522",
      desktopHeight: "134",
      caption:
        "Construção de uma landing page intuitiva para divulgar a organização",
      captionStyle:
        "font-geometos-rounded text-[#FFFFFD] xl:text-32px xl:w-[780px]",
      downStyle:
        "text-[#F2E530] hover:text-[#F2C029] focus-visible:text-[#F2C029]",
    },
    accesses: {
      id: "accesses-cnbpb",
      img: "/assets/cnbpb-home-page.png",
      alt: "Pré-visualização da página inicial do site do Coletive Não-Binárie da Paraíba",
      urlSite: "https://enne-amore.github.io/coletive-nb",
      ariaLabelSite: "Acessar o site do Coletive Não-Binárie da Paraíba",
      urlFigma:
        "https://www.figma.com/design/xZtI8B7srcvORsyTzPAQGh/Coletive-N%C3%A3o-Bin%C3%A1rie---Website?node-id=104-138&t=PwmYZV613xbKoKlq-1",
      ariaLabelFigma: "Acessar o protótipo do projeto no Figma",
      urlGitHub: "https://github.com/Enne-Amore/coletive-nb",
      ariaLabelGitHub: "Acessar o repositório do projeto no GitHub",
      urlMainStyle:
        "bg-[#F2E530] text-[#040008] hover:bg-[#F2C029] focus-visible:bg-[#F2C029] active:bg-[#FFFEF6] active:text-[#F2C029]",
      urlSecondaryStyle:
        "bg-[#F2E530]/20 border-2 border-[#F2E530] text-[#040008] dark:text-[#FFFFFD] dark:hover:text-[#040008] dark:focus-visible:text-[#040008] hover:bg-[#F2E530] focus-visible:bg-[#F2E530] active:border-[#F2C029] active:bg-[#F2C029]",
    },
    styleGuide: {
      id: "style-guide-cnbpb",
      explanation: {
        titleStyle:
          "font-geometos-rounded from-[#713CA6] to-[#6A4EA6] dark:from-[#F2E530] dark:to-[#ECE35A]",
        text: "Utilizei a <strong>logo da organização</strong> como base somada à própria <strong>bandeira não-binária</strong>, a qual representa a comunidade, com o intuito de <strong>definir as cores e as fontes</strong> do site. Desse modo, a <strong>identidade do movimento social continua consistente</strong>.",
        textStyle: "font-open-dyslexic xl:w-[530px]",
        img: "cnbpb",
        alt: "Logo completa do Coletive Não-Binárie da Paraíba",
      },
      colors: {
        titleStyle:
          "font-geometos-rounded text-[#FFFEF6] text-center bg-gradient-to-r from-[#713CA6]/0 via-[#713CA6] to-[#713CA6]/0 pt-6 pb-5 dark:text-[#040008] dark:from-[#F2C029]/0 dark:via-[#F2C029] dark:to-[#F2C029]/0",
        darkContrast: "dark:text-[#242325]",
        lightContrast: "text-[#FFFFFD]",
        lists: {
          containerStyle:
            "bg-[#FFFEF6]/30 border-[#040008] dark:bg-[#242325]/30 dark:border-[#FFFEF6]",
          titleStyle:
            "font-geometos-rounded from-[#713CA6] to-[#6A4EA6] dark:from-[#F2E530] dark:to-[#ECE35A]",
          mainColors: [
            {
              id: "1",
              name: "Roxa escura",
              hex: "#713CA6",
              isDarkContrast: false,
            },
            {
              id: "2",
              name: "Roxa clara",
              hex: "#6A4EA6",
              isDarkContrast: false,
            },
            {
              id: "3",
              name: "Amarela escura",
              hex: "#F2E530",
              isDarkContrast: true,
            },
            {
              id: "4",
              name: "Amarela clara",
              hex: "#ECE35A",
              isDarkContrast: true,
            },
            {
              id: "5",
              name: "Laranja",
              hex: "#F2C029",
              isDarkContrast: true,
            },
          ],
          neutralColors: [
            {
              id: "1",
              name: "Preta",
              hex: "#040008",
              isDarkContrast: false,
            },
            {
              id: "2",
              name: "Cinza",
              hex: "#242325",
              isDarkContrast: false,
            },
            {
              id: "3",
              name: "Branca",
              hex: "#FFFFFD",
              isDarkContrast: true,
            },
            {
              id: "4",
              name: "Branca amarelada",
              hex: "#FFFEF6",
              isDarkContrast: true,
            },
          ],
        },
      },
      typography: {
        titleStyle:
          "font-geometos-rounded text-[#FFFEF6] text-center bg-gradient-to-r from-[#713CA6]/0 via-[#713CA6] to-[#713CA6]/0 pt-6 pb-5 dark:text-[#040008] dark:from-[#F2C029]/0 dark:via-[#F2C029] dark:to-[#F2C029]/0",
        fonts: {
          list: [
            {
              id: "1",
              name: "Geometos Rounded",
              role: "Títulos / Frases especiais",
              fontStyle: "font-geometos-rounded -mb-0.5",
            },
            {
              id: "2",
              name: "Nunito",
              role: "Parágrafos / Links / Instruções",
              fontStyle: "font-bold",
            },
          ],
          listStyle:
            "from-[#FFCE31] to-[#F2E530] dark:from-[#713CA6] dark:to-[#6A4EA6]",
          nameStyle: "text-[#6A4EA6] dark:text-[#F2E530]",
        },
        proportions: {
          containerStyle:
            "bg-[#FFFEF6]/30 border-[#040008] dark:bg-[#242325]/30 dark:border-[#FFFEF6]",
          titleStyle:
            "font-geometos-rounded from-[#713CA6] to-[#6A4EA6] dark:from-[#F2E530] dark:to-[#ECE35A]",
          iconStyle: "text-[#713CA6] dark:text-[#F2E530]",
          lists: [
            {
              id: "1",
              tag: "H1",
              sizeDesktop: "36px / 60px",
              sizeMobile: "32px / 45px",
              weight: "Bold",
            },
            {
              id: "2",
              tag: "H2",
              sizeDesktop: "32px / Auto",
              sizeMobile: "28px / Auto",
              weight: "Bold",
            },
            {
              id: "3",
              tag: "H3",
              sizeDesktop: "28px / Auto",
              sizeMobile: "24px / Auto",
              weight: "Bold",
            },
            {
              id: "4",
              tag: "P / A",
              sizeDesktop: "24px / 40px",
              sizeMobile: "20px / 35px",
              weight: "Regular / Bold",
            },
            {
              id: "5",
              tag: "Caption / A",
              sizeDesktop: "20px / Auto",
              sizeMobile: "16px / Auto",
              weight: "Regular / Bold",
            },
            {
              id: "6",
              tag: "Span",
              sizeDesktop: "18px / Auto",
              sizeMobile: "16px / Auto",
              weight: "Regular",
            },
          ],
          listStyle:
            "from-[#FFCE31] to-[#F2E530] dark:from-[#713CA6] dark:to-[#6A4EA6]",
          tagStyle: "font-geometos-rounded text-[#6A4EA6] dark:text-[#F2E530]",
        },
      },
    },
    prototyping: {
      sectionStyle: "from-[#6A4EA6] to-[#713CA6]",
      titleStyle: "font-geometos-rounded text-[#F2E530]",
      imgs: [
        {
          id: "1",
          img: "cnbpb-atividades.png",
          alt: "Pré-visualização da seção de atividades do site",
        },
        {
          id: "2",
          img: "cnbpb-membres.png",
          alt: "Pré-visualização da seção de membres do site",
        },
      ],
    },
    technologies: {
      id: "technologies-cnbpb",
      explanation: {
        titleStyle:
          "font-geometos-rounded from-[#713CA6] to-[#6A4EA6] dark:from-[#F2E530] dark:to-[#ECE35A]",
        text: "Como o site consiste em uma <strong>Landing Page simples e informativa</strong> de apenas uma página com algumas animações e funcionalidades essenciais, bastou somente utilizar a tríade básica das linguagens <strong>HTML5, CSS3 e Javascript</strong>.",
        textStyle: "font-open-dyslexic xl:w-[487px]",
        img: "cnbpb",
        alt: "Logo de cada tecnologia utilizada: HTML5, CSS3 e Javascript",
      },
      functions: {
        titleStyle:
          "font-geometos-rounded text-[#FFFEF6] text-center bg-gradient-to-r from-[#713CA6]/0 via-[#713CA6] to-[#713CA6]/0 pt-6 pb-5 dark:text-[#040008] dark:from-[#F2C029]/0 dark:via-[#F2C029] dark:to-[#F2C029]/0",
        list: [
          "<strong>Menu de navegação</strong> abrível e fechável para mobile",
          "<strong>Detecção e adaptação de tema de cores preferencial</strong> da pessoa usuária",
          "<strong>Opções de escolher tema</strong> de cores entre <strong>escuro e claro</strong>",
          "<strong>Botão</strong>, que aparace no final da página, <strong>de voltar ao topo</strong>",
          "<strong>Scroll horizontal</strong>, nos carrosséis de imagem, <strong>arrastável através do mouse</strong>",
          "<strong>Tela de carregamento</strong> inicial",
        ],
        listStyle:
          "font-open-dyslexic bg-linear-to-br from-[#FFCE31] to-[#F2E530] dark:from-[#713CA6] dark:to-[#6A4EA6]",
      },
    },
    video: {
      sectionStyle:
        "from-[#F2E530] to-[#FFCE31] dark:bg-[linear-gradient(to_bottom,#242325B3,#242325B3),linear-gradient(to_bottom,#F2E530,#FFCE31)]",
      titleStyle:
        "font-geometos-rounded bg-linear-to-br text-transparent bg-clip-text from-[#713CA6] to-[#6A4EA6] dark:from-[#F2E530] dark:to-[#ECE35A]",
      src: "/assets/cnbpb-video.mp4",
    },
    footer: {
      id: "footer-cnbpb",
      footerStyle: "from-[#6A4EA6] via-[#713CA6] to-[#242526]",
      socialNetworkStyle: "bg-[#FFFCFE]/10 text-[#F2E530] border-[#F2E530] hover:bg-[#F2E530] hover:text-[#242325] focus-visible:bg-[#F2E530] focus-visible:text-[#242325] active:bg-[#FFCE31]",
      researchSources: {
        titleStyle: "font-geometos-rounded text-[#F2E530]",
        links: [
          {
            id: "1",
            label: "Coletive Não-Binárie da Paraíba - Fundo Brasil",
            url: "https://www.fundobrasil.org.br/projeto/coletive-nao-binarie-da-paraiba",
            ariaLabel: "Acesse a página sobre o Coletive Não-Binárie da Paraíba no site do Fundo Brasil",
          },
          {
            id: "2",
            label: "Não-binárie - Orientando",
            url: "https://orientando.org/listas/lista-de-generos/nao-binarie",
            ariaLabel: "Acesse o artigo Não-binárie no site Orientando",
          },
          {
            id: "3",
            label: "Guia para linguagem neutra - Ophelia Cassiano",
            url: "https://medium.com/guia-para-linguagem-neutra-pt-br",
            ariaLabel: "Acesse o artigo Guia para Linguagem Neutra de Ophelia Cassiano no Medium",
          },
        ],
        linkStyle: "text-[#FFFFFD] hover:bg-[#FFFFFD]/15 active:bg-[#FFFFFD]/30",
      },
      copyrightStyle: "font-open-dyslexic text-[#FFFFFD]",
    },
  },
  {
    id: "2",
    card: {
      url: "/janai-amitaf-producoes",
      ariaLabel: "Ir à página sobre o projeto Janai Amitáf Produções",
      img: "janai-amitaf",
      alt: "Logo de Janai Amitáf Produções",
      altHover: "Pré-visualização da página inicial do site de Janai Amitáf Produções",
      positions: ["UI/UX Design", "Front-end"],
      caption: "Portfólio Web",
    },
    header: {
      headerStyle: "bg-linear-to-br from-[#8C00FF] to-[#6C0CF2]",
      positions: ["UI/UX Design", "Front-end"],
      positionStyle: "bg-[#F2B705] dark:text-[#05000C]",
      img: "janai-amitaf",
      alt: "Janai Amitáf Produções",
      mobileWidth: "160",
      mobileHeight: "246",
      desktopWidth: "181",
      desktopHeight: "279",
      caption:
        "Desenvolvimento de um portfólio web artístico com seus principais trabalhos",
      captionStyle: "font-semibold text-[#FCFAFF] xl:text-28px xl:w-[620px]",
      downStyle:
        "text-[#F2B705] hover:text-[#DB9406] focus-visible:text-[#DB9406]",
    },
    accesses: {
      id: "accesses-janai-amitaf",
      img: "/assets/janai-amitaf-home-page.png",
      alt: "Pré-visualização da página inicial do site de Janai Amitáf Produções",
      urlSite: "https://janai-amitaf.vercel.app",
      ariaLabelSite: "Acessar o site de Janai Amitáf Produções",
      urlFigma:
        "https://www.figma.com/design/4til0EO4BXEqckMqyEIK4V/Alta-fidelidade?node-id=0-1&t=1EIllootjdIzgu05-1",
      ariaLabelFigma: "Acessar o protótipo do projeto no Figma",
      urlGitHub: "https://github.com/Enne-Amore/janai-amitaf",
      ariaLabelGitHub: "Acessar o repositório do projeto no GitHub",
      urlMainStyle:
        "bg-[#F2B705] text-[#05000C] hover:bg-[#DB9406] focus-visible:bg-[#DB9406] active:bg-[#F8F3FF] active:text-[#DB9406]",
      urlSecondaryStyle:
        "bg-[#F2B705]/20 border-2 border-[#F2B705] text-[#05000C] dark:text-[#FCFAFF] dark:hover:text-[#05000C] dark:focus-visible:text-[#05000C] hover:bg-[#F2B705] focus-visible:bg-[#F2B705] active:border-[#DB9406] active:bg-[#DB9406]",
    },
    styleGuide: {
      id: "style-guide-janai-amitaf",
      explanation: {
        titleStyle: "font-bold from-[#6C0CF2] to-[#8C00FF] dark:text-[#F2B705]",
        text: "Utilizei as principais <strong>cores</strong> que o artista usa em algumas de suas <strong>artes</strong>, como a própria <strong>logo</strong> dele e uma <strong>imagem de fumaça roxa e rosa com estrelas</strong>, que pode representar o ponto final de uma página. Já a <strong>fonte de texto</strong> usada foi conforme a <strong>preferência do cliente</strong>.",
        textStyle: "xl:w-[530px]",
        img: "janai-amitaf",
        alt: "Logo e imagem de fumaça roxa e rosa com estrelas usadas como referência para as cores do projeto",
      },
      colors: {
        titleStyle:
          "font-bold text-[#05000C] bg-gradient-to-r from-[#F1ACF2] to-[#F1ACF2]/0 px-9 py-5 rounded-full dark:text-[#F8F3FF] dark:from-[#C522F2] dark:to-[#C522F2]/0 xl:px-10",
          darkContrast: "dark:text-[#252228]",
          lightContrast: "text-[#FCFAFF]",
        lists: {
          containerStyle:
            "bg-[#F8F3FF]/30 border-[#05000C] dark:bg-[#090016]/10 dark:border-[#F8F3FF]",
          titleStyle: "font-bold from-[#6C0CF2] to-[#8C00FF] dark:text-[#F2B705]",
          mainColors: [
            {
              id: "1",
              name: "Roxa",
              hex: "#6C0CF2",
              isDarkContrast: false,
            },
            {
              id: "2",
              name: "Rosa clara",
              hex: "#F1ACF2",
              isDarkContrast: true,
            },
            {
              id: "3",
              name: "Rosa neutra",
              hex: "#E057F2",
              isDarkContrast: true,
            },
            {
              id: "4",
              name: "Rosa escura",
              hex: "#C522F2",
              isDarkContrast: true,
            },
            {
              id: "5",
              name: "Laranja",
              hex: "#F2B705",
              isDarkContrast: true,
            },
          ],
          neutralColors: [
            {
              id: "1",
              name: "Preta",
              hex: "#05000C",
              isDarkContrast: false,
            },
            {
              id: "2",
              name: "Cinza",
              hex: "#252228",
              isDarkContrast: false,
            },
            {
              id: "3",
              name: "Branca",
              hex: "#FCFAFF",
              isDarkContrast: true,
            },
            {
              id: "4",
              name: "Branca arroxeada",
              hex: "#F8F3FF",
              isDarkContrast: true,
            },
          ],
        },
      },
      typography: {
        titleStyle:
          "font-bold text-[#05000C] bg-gradient-to-r from-[#F1ACF2] to-[#F1ACF2]/0 px-9 py-5 rounded-full dark:text-[#F8F3FF] dark:from-[#C522F2] dark:to-[#C522F2]/0 xl:px-10",
        fonts: {
          list: [
            {
              id: "1",
              name: "Bitter",
              role: "Títulos / Textos / Links",
              fontStyle: "font-bold",
            },
          ],
          listStyle:
            "from-[#F2B705] to-[#DB9406] dark:from-[#8C00FF] dark:to-[#6C0CF2]",
          nameStyle: "text-[#6C0CF2] dark:text-[#F2B705]",
        },
        proportions: {
          containerStyle:
            "bg-[#F8F3FF]/30 border-[#05000C] dark:bg-[#252228]/30 dark:border-[#F8F3FF]",
          titleStyle: "font-bold from-[#6C0CF2] to-[#8C00FF] dark:text-[#F2B705]",
          iconStyle: "text-[#6C0CF2] dark:text-[#F2B705]",
          lists: [
            {
              id: "1",
              tag: "H1",
              sizeDesktop: "36px / Auto",
              sizeMobile: "24px / Auto",
              weight: "Bold",
            },
            {
              id: "2",
              tag: "H2",
              sizeDesktop: "30px / Auto",
              sizeMobile: "24px / Auto",
              weight: "Bold",
            },
            {
              id: "3",
              tag: "H3",
              sizeDesktop: "24px / Auto",
              sizeMobile: "20px / Auto",
              weight: "Bold",
            },
            {
              id: "4",
              tag: "P / A",
              sizeDesktop: "24px / 36px",
              sizeMobile: "20px / 32px",
              weight: "Regular / Bold",
            },
            {
              id: "5",
              tag: "Figcaption",
              sizeDesktop: "24px / Auto",
              sizeMobile: "20px / Auto",
              weight: "Regular / Bold",
            },
          ],
          listStyle:
            "from-[#F2B705] to-[#DB9406] dark:from-[#8C00FF] dark:to-[#6C0CF2]",
          tagStyle: "font-bold text-[#6C0CF2] dark:text-[#F2B705]",
        },
      },
    },
    prototyping: {
      sectionStyle:
        "from-[#F2B705] to-[#DB9406] dark:bg-[linear-gradient(to_bottom,#242325B3,#242325B3),linear-gradient(to_bottom,#F2B705,#DB9406)]",
      titleStyle: "font-bold text-[#05000C] dark:text-[#F8F3FF]",
      imgs: [
        {
          id: "1",
          img: "janai-amitaf-projetos.png",
          alt: "Pré-visualização da página de projetos do site",
        },
        {
          id: "2",
          img: "janai-amitaf-servicos.png",
          alt: "Pré-visualização da página de serviços do site",
        },
      ],
    },
    technologies: {
      id: "technologies-janai-amitaf",
      explanation: {
        titleStyle: "font-bold from-[#6C0CF2] to-[#8C00FF] dark:text-[#F2B705]",
        text: "Como o site consiste em um <strong>portfólio</strong> artístico contendo <strong>várias páginas</strong> com algumas animações e funcionalidades essenciais, foi necessário utilizar a tríade avançada de <strong>Next.js, Tailwind CSS e Typescript</strong>.",
        textStyle: "xl:w-[515px]",
        img: "janai-amitaf",
        alt: "Logo de cada tecnologia utilizada: Node.js, Tailwind CSS e Typescript",
      },
      functions: {
        titleStyle:
          "font-bold text-[#05000C] bg-gradient-to-r from-[#F1ACF2] to-[#F1ACF2]/0 px-9 py-5 rounded-full dark:text-[#F8F3FF] dark:from-[#C522F2] dark:to-[#C522F2]/0 xl:px-10",
        list: [
          "<strong>Menu de informações</strong> extras abrível e fechável",
          "<strong>Menu de navegação</strong> horizontal entre páginas",
          "<strong>Armazenamento de informações</strong> sobre os projetos via <strong>banco de dados</strong> local",
        ],
        listStyle:
          "bg-linear-to-br from-[#F2B705] to-[#DB9406] dark:from-[#8C00FF] dark:to-[#6C0CF2]",
      },
    },
    video: {
      sectionStyle:
        "from-[#E057F2] to-[#C522F2] dark:bg-[linear-gradient(to_bottom,#242325B3,#242325B3),linear-gradient(to_bottom,#E057F2,#C522F2)]",
      titleStyle: "font-bold text-[#05000C] dark:text-[#F8F3FF]",
      src: "/assets/janai-amitaf-video.mp4",
    },
    footer: {
      id: "footer-janai-amitaf",
      footerStyle: "from-[#8C00FF] via-[#6C0CF2] to-[#242325]",
      socialNetworkStyle: "bg-[#FCFAFF]/10 text-[#F2B705] border-[#F2B705] hover:bg-[#F2B705] hover:text-[#242325] focus-visible:bg-[#F2B705] focus-visible:text-[#242325] active:bg-[#DB9406]",
      copyrightStyle: "text-[#FCFAFF]",
    },
  },
];
