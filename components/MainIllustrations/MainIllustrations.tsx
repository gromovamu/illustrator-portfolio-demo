
import { MainIllustrationsProps } from "./MainIllustrations.props";
import cn from "classnames";
import { LinkButton, CardList, Htag } from "@/components";

export const MainIllustrations = async ({ illustrationsList, className, ...props }: MainIllustrationsProps): Promise<JSX.Element> => {
  return (
    <section className={cn("section", className)} {...props}>
      <Htag tag="h2" opt="big">Иллюстрации</Htag>
      <CardList seriaDecor={false} cardList={illustrationsList} />
      <LinkButton href="/illustration">Подробнее</LinkButton>
    </section>
  );
};

//TODO: генерация пути к странице с иллюстрацией
