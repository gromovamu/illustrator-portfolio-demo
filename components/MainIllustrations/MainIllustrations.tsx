
import { MainIllustrationsProps } from "./MainIllustrations.props";
//import styles from "./CardList.module.css";
import cn from "classnames";
import { CardList, Htag } from "@/components";
import { getMainPageIllustrations, bdDisconnect } from "@/api/getData";


export const MainIllustrations = async ({ className, ...props }: MainIllustrationsProps): Promise<JSX.Element> => {
  const illustrationsList = await getMainPageIllustrations().catch(async () => {
    console.error("Error: illustrationsList don't loaded"); //debug
    return [];
  });
  await bdDisconnect();  
  return (
    <section className={cn("section", className)} {...props}>
      <Htag tag="h2" opt="big">Иллюстрации</Htag>
      < CardList cardList={illustrationsList} />
    </section>
  );
};

//TODO: генерация пути к странице с иллюстрацией
