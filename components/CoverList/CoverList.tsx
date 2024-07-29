"use client";
import { CoverListProps } from "./CoverList.props";
import styles from "./CoverList.module.css";
import cn from "classnames";
import { Cover, CoverBtn, Modal } from "@/components";
import { useState } from "react";

export const CoverList = ({ coversList, className, ...props }: CoverListProps): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeCoverIndex, setActiveCoverIndex] = useState(0);

  const openModal = (i: number) => { setIsOpenModal(!isOpenModal); setActiveCoverIndex(i); };

  return (<><ul className={cn("list", styles.list, className)} {...props}>
    {coversList && coversList.map((cover, i) => <li key={`coversBtn_${i}`} className={styles.item}>
      <CoverBtn srcImg={cover.url}
        aria-label={`Открыть окно с увеличенным изображением обложки ${cover.title}`}
        onClick={() => openModal(i)} />
    </li>)}
  </ul>

    <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
      <Cover url={coversList[activeCoverIndex].url} />
    </Modal>
  </>

  );
};
