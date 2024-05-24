'use client';
import { CoverInfoProps } from "./CoverInfo.props";
import styles from "./CoverInfo.module.css";
import cn from "classnames";
import { CoverSlider } from "@/components";
import { useState } from "react";
//import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export const CoverInfo = ({ coversList, className, ...props }: CoverInfoProps): JSX.Element => {
  const params = useSearchParams();
  //const pathname = usePathname();
  //const router = useRouter();

  console.log('Params');
  console.log(params.get('num'));

  const activeInitialId = parseInt(params.get('num') ?? '0', 10);

  console.log('activeInitialId');
  console.log(activeInitialId);
  console.log(isNaN(activeInitialId) ? 0 : activeInitialId);
  //router.push(pathname); // убираем параметры из строки // TODOL: это так не работает, разобраться!!!!
  
  const activeInitialNum = isNaN(activeInitialId)? 0: coversList.findIndex((cover) => cover.id === activeInitialId);
  
  console.log('activeInitialNum');
  console.log(activeInitialNum);
  // используется порядковый номер в массиве обложек
  const [activeCover, setActiveCover] = useState((activeInitialNum==-1) ? 0 : activeInitialNum);

  console.log('activeCover');
  console.log(activeCover);

  return (<div className={cn(styles.container, className)} {...props}>
    <div className={cn(styles.imgContainer)}>
      <Image className={styles.img}
        width={210}
        height={305}
        unoptimized
        src={coversList[activeCover]?.url??'/default.jpg'}
        alt='' />
    </div>
    {coversList[activeCover].tags&& <ul className={styles.tags}>
      {coversList[activeCover].tags?.map((tag, index) => 
      <li key={`tag_${index}`} className={styles.tag}>
        #{tag}
      </li>)}
    </ul>}
    <CoverSlider coverList={coversList} setActive={setActiveCover}/>
  </div>
  );
};

/* <CoverSlider coverList={coversList} setActive={(num) => setActiveCover(num)} />*/