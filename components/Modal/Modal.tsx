'use client';

import { ModalProps } from "./Modal.props";
import styles from "./Modal.module.css";
import cn from "classnames";
import CloseIcon from "@/public/svg/close.svg";
import { Dialog, DialogPanel } from "@headlessui/react";

export const Modal = ({ isOpen, setIsOpen, children, className }: ModalProps): JSX.Element => {
  const close = () => { setIsOpen(false); };

  return <Dialog open={isOpen} as="div" onClose={close} >
    <div className={cn(className,styles.modal)}>
    <div className={styles.container}>
      <DialogPanel transition className={cn(styles.panel)}>
        {children}

        <button className={cn('btn', styles['close-btn'])}
          onClick={() => { setIsOpen(false); }}
          aria-label="Закрыть окно просмотра">
          <CloseIcon className={styles['close-icon']} />
        </button>

      </DialogPanel>
      </div>
    </div>
  </Dialog>;
};


/*  
 return <div className={cn(className, {
    [styles.modal]: isOpen,
    ["disable"]: !isOpen
  })} {...props}>
    <div className={ styles.container}>
      <button className={cn('btn', styles['close-btn'])}
        onClick={() => { setIsOpen(false); }}
        aria-label="Закрыть окно просмотра">
         <CloseIcon className={styles['close-icon']} />
      </button>
      {children}
    </div>
  </div>;
  
  */