"use client";
import styles from "./Illustration.module.css";
import { IllustrationProps } from "./Illustration.props";
import { useSearchParams, notFound } from "next/navigation";
import { IllustrationDetails } from "../IllustrationDetails/IllustrationDetails";
import { formIllustrationData } from "@/api/getData";
import cn from "classnames";
import { NextPrevBlock } from "../NextPrevBlock/NextPrevBlock";
import { getNextPrev } from "@/utils/utils";
import ExportedImage from "next-image-export-optimizer";

export const Illustration = ({ illustrationList, hrefList, className, ...props }: IllustrationProps): JSX.Element => {

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  const id = parseInt(search ?? "", 10);

  isNaN(id) && notFound();

  const listNoSeria = illustrationList.filter(item => item.seriaId === null);
  const index = listNoSeria.findIndex(item => item.id === id);
  const indexInArrHref = hrefList.findIndex(item => item.id === id);

  (index === -1) && notFound();

  const nextPrevUrl = getNextPrev(indexInArrHref, hrefList.map(item => item.href));
  const data = formIllustrationData(listNoSeria[index]);

  return (
    <div className={cn("section", className)} {...props}>
      <div className={styles.info}>
        <div className={styles.container}>
          <ExportedImage className={styles.img}
            width={512}
            height={512}
            sizes="(max-width: 420px) 380px, 512px"
            priority
            src={data.url}
            alt=''
          />

        </div>
        <IllustrationDetails data={data.details} />
      </div>

      {(indexInArrHref !== -1) && <NextPrevBlock urlData={nextPrevUrl} />}
    </div>
  );
};

