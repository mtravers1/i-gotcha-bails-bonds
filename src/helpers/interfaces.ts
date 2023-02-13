export interface InfoTextProps {
  src: string;
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

export interface GeneralsDataType {
  lang: string | undefined;
}
