'use client';
import { MainCoversProps } from "./MainCovers.props";
import cn from "classnames";
import { Htag, CoverSlider, LinkButton } from "@/components";
import { saveRefByID } from "@/utils/scrollById";

export const MainCovers = async ({ coversList, id, className, ...props }: MainCoversProps): Promise<JSX.Element> => {
  return (
    <section id={id} className={cn("section", className)} ref={node => id&&saveRefByID(id, node)} {...props}>
      <Htag tag="h2" opt="big">Обложки</Htag>
      <CoverSlider coverList={coversList} />
      <LinkButton href="/covers">Подробнее</LinkButton> 
    </section>
  );
};
