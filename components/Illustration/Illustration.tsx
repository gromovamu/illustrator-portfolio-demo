'use client';

import { IllustrationProps } from "./Illustration.props";
import { useSearchParams, notFound } from 'next/navigation';
import { IllustrationDetails } from "../IllustrationDetails/IllustrationDetails";
import { formIllustrationData } from "@/api/getData";
import cn from "classnames";
import { NextPrevBlock } from "../NextPrevBlock/NextPrevBlock";
import { getNextPrev } from "@/utils/utils";

export const Illustration = ({ illustrationList, hrefList, className, ...props }: IllustrationProps): JSX.Element => {

  const searchParams = useSearchParams(); 
  const search = searchParams.get('id');
 
  const id = parseInt(search??'', 10) ;

  isNaN(id) && notFound();

  const listNoSeria = illustrationList.filter(item => item.seriaId === null );
  const index = listNoSeria.findIndex(item => item.id === id);
  const indexInArrHref = hrefList.findIndex(item => item.id === id);
 
  (index === -1) && notFound();

  const nextPrevUrl = getNextPrev(indexInArrHref, hrefList.map(item => item.href));
  const data = formIllustrationData(listNoSeria[index]);

  return (
    <div className={cn("section", className)} {...props}>
    <IllustrationDetails data={data} />
    {(indexInArrHref !== -1) && <NextPrevBlock urlData={nextPrevUrl} />}
  </div>    
  );
};

