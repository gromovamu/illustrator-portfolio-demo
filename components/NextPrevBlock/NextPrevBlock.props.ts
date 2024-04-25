import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NextPrevBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  urlData: {
    prev: string | null;
    next: string | null;
  };
}

