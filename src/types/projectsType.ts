export interface ProjectsType {
  id: string;
  card: {
    url: string;
    ariaLabel: string;
    img: string;
    alt: string;
    altHover: string;
    positions: string[];
    caption: string;
  };
  header: {
    headerStyle: string;
    positions: string[];
    positionStyle: string;
    img: string;
    alt: string;
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
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
  problemn: {
    id: string;
    sectionStyle: string;
    titleStyle: string;
    textStyle: string;
    line1: {
      text: string;
      containerStyle?: string,
      textWidth?: string;
      list?: string[];
      img?: string;
      alt?: string;
      mobileWidth?: string;
      mobileHeight?: string;
      desktopWidth?: string;
      desktopHeight?: string;
    };
    line2?: {
      text: string;
      containerStyle?: string,
      textWidth?: string;
      img?: string;
      alt?: string;
      mobileWidth?: string;
      mobileHeight?: string;
      desktopWidth?: string;
      desktopHeight?: string;
    };
    conclusion: string;
  }
  targetAudience: {
    id: string;
    titleStyle: string;
    textStyle: string;
    list: string[];
    img: string;
    alt: string;
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
  solution: {
    id: string;
    sectionStyle: string;
    titleStyle: string;
    text: string;
    textStyle: string;
    list?: string[];
    img: string;
    alt: string;
    mobileWidth: string;
    mobileHeight: string;
    desktopWidth: string;
    desktopHeight: string;
  };
  styleGuide: {
    id: string;
    explanation: {
      titleStyle: string;
      text: string;
      textStyle: string;
      img: string;
      alt: string;
    };
    colors: {
      titleStyle: string;
      darkContrast: string;
      lightContrast: string;
      lists: {
        containerStyle: string;
        titleStyle: string;
        mainColors: {
          id: string;
          name: string;
          hex: string;
          isDarkContrast: boolean;
        }[];
        neutralColors: {
          id: string;
          name: string;
          hex: string;
          isDarkContrast: boolean;
        }[];
      };
    };
    typography: {
      titleStyle: string;
      fonts: {
        list: {
          id: string;
          name: string;
          role: string;
          fontStyle?: string;
        }[];
        listStyle: string;
        nameStyle: string;
      };
      proportions: {
        containerStyle: string;
        titleStyle: string;
        iconStyle: string;
        lists: {
          id: string;
          tag: string;
          sizeDesktop: string;
          sizeMobile: string;
          weight: string;
        }[];
        listStyle: string;
        tagStyle: string;
      };
    };
  };
  prototyping: {
    sectionStyle: string;
    titleStyle: string;
    imgs: {
      id: string;
      img: string;
      alt: string;
    }[];
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
  };
  footer: {
    id: string;
    footerStyle: string;
    socialNetworkStyle: string;
    researchSources?: {
      titleStyle: string;
      links: {
        id: string;
        label: string;
        url: string;
        ariaLabel: string;
      }[];
      linkStyle: string;
    };
    copyrightStyle: string;
  };
}
