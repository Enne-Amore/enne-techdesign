export interface ProjectsType {
  id: string;
  card: {
    url: string;
    ariaLabel: string;
    imgMobile: string;
    imgDesktop: string;
    alt: string;
    positions: string[];
    caption: string;
  };
  header: {
    headerStyle: string;
    positions: string[];
    positionStyle: string;
    img: string;
    alt: string;
    mobileWidth: string,
    mobileHeight: string,
    desktopWidth: string,
    desktopHeight: string,
    caption: string;
    captionStyle: string;
    downStyle: string;
  };
  accesses: {
    id: string;
    img: string;
    alt: string;
    urlSite?: string;
    ariaLabelSite?: string;
    urlFigma?: string;
    ariaLabelFigma?: string;
    urlGitHub?: string;
    ariaLabelGitHub?: string;
    urlMainStyle: string;
    urlSecondaryStyle?: string;
  };
  technologies: {
    id: string;
    explanation: {
      titleStyle: string;
      text: string;
      textStyle: string;
      img: string;
      alt: string;
    };
    functions: {
      titleStyle: string;
      list: string[];
      listStyle: string;
    };
  };
  video: {
    sectionStyle: string;
    titleStyle: string;
    src: string;
  }
}
