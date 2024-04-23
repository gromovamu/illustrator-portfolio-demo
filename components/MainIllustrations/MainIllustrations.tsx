
import { MainIllustrationsProps } from "./MainIllustrations.props";
import cn from "classnames";
import { CardList, Htag } from "@/components";
import { getMainPageIllustrations, bdDisconnect } from "@/api/getData";


export const MainIllustrations = async ({ className, ...props }: MainIllustrationsProps): Promise<JSX.Element> => {
  const illustrationsList = await getMainPageIllustrations().catch(async (e) => {
    console.error(e);
    return [];
  });
  await bdDisconnect();  
  return (
    <section className={cn("section", className)} {...props}>
      <Htag tag="h2" opt="big">Иллюстрации</Htag>
      < CardList seriaDecor={false} cardList={illustrationsList} />
    </section>
  );
};

//TODO: генерация пути к странице с иллюстрацией
