'use client';
import { CardItemProps, CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import cn from "classnames";
import { Card } from "@/components";
import { useInView } from "react-intersection-observer";
import { animated, easings, useReducedMotion, useSpring, useSpringRef } from "@react-spring/web";
import { useEffect, useState } from "react";

export const CardList = ({ seriaDecor, cardList, className, ...props }: CardListProps): JSX.Element => {
  const [isCanOpenArr, setIsCanOpenArr] = useState(Array.from(Array(cardList.length).keys(), (i) => i === 0 ? true : false));

  
  const handleAddCanOpen = (i: number): void => {
    setIsCanOpenArr(arr => { arr.splice(i, 1, true); return [...arr]; });   
  };  

  return (
    <ul className={cn(styles.list, className)} {...props}>
      {
        cardList && cardList.map((card, i) => {
          const isSeria = card.seriaId === null ? false : true;
          return (
            <CardItem className={cn(styles.item, {
              [styles.decor]: isSeria && seriaDecor
            })} key={`il_c_${card.id}`}
              index={i}
              isCanOpen={isCanOpenArr[i]}
              handleSetCanOpen={handleAddCanOpen}>
              <Card title={card.title} seria={isSeria} src={card.url} href={card.href ?? ''} />
            </CardItem>
          );
        })
      }
    </ul>
  );
};

function CardItem({ index, isCanOpen, handleSetCanOpen, children, className}: CardItemProps): JSX.Element {
  const reducedMotion = useReducedMotion();// чтобы учесть если у пользователя включено ограничение движения  
  const api = useSpringRef();
  const [isInView, setIsInView] = useState(reducedMotion ? true : false);
  const style = useSpring(
    {
      ref: api,
      from: { opacity: reducedMotion? 1:0, scale: reducedMotion? 1:0 },
      config: {
        duration: 1,
      },
    }
  );

  const [refInView] = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
    fallbackInView: true,
    onChange: (inView) => {     
      if (inView) {
        setIsInView(true);
      }
    }
  });

  useEffect(() => {   
    if (isCanOpen && isInView) {
      api.start({
        to: { opacity: 1, scale: 1, },
        delay: index == 0 ? 0 : 100,
        config: {
          duration: 300,
          easing: easings.easeOutBack
        },
        onStart: () => {
          handleSetCanOpen(index + 1);
        }
      });
    }

    return;
  }, [isCanOpen, isInView, api, index, handleSetCanOpen]);

  return <animated.li ref={refInView} className={cn(className, styles.item)} style={style}>    
      {children}    
  </animated.li>;
}
