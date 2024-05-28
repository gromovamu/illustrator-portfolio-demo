
import { MainCoversProps } from "./MainCovers.props";
import cn from "classnames";
import { LinkButton, Htag, CoverSlider } from "@/components";
import { getMainPageCovers, bdDisconnect } from "@/api/getData";
import { getCoverParamUrl } from "@/utils/getUrl";

export const MainCovers = async ({ className, ...props }: MainCoversProps): Promise<JSX.Element> => {
  const coversList = await getMainPageCovers().catch(async (e) => {
    console.error(e);
    return [];
  });
  await bdDisconnect();
  return (
    <section className={cn("section", className)} {...props}>
      <Htag tag="h2" opt="big">Обложки</Htag>
      < CoverSlider coverList={coversList} opt='link' getUrl={getCoverParamUrl} />
      <LinkButton href="/covers">Подробнее</LinkButton>
    </section>
  );
};


//TODO: разобраться где должно быть bdDisconnect