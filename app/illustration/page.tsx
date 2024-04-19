
import { getAllIllustrution, bdDisconnect } from "@/api/getData";
import { getillustrationInfo } from "@/api/getStaticContent";
import { Divider, Htag, CardList, DescriptionCard, InlineLink, Text} from "@/components";
import cn from "classnames";

export default async function Home() {
  const info = getillustrationInfo(); 
  const illustrationsList = await getAllIllustrution().catch(async (e) => {
    console.error(e);
    return [];
  });
  await bdDisconnect();  

  return (<div className="container">
     <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
     <section className={cn("section")}>
        <Htag tag="h2" opt="big">Иллюстрации</Htag>
        <DescriptionCard iconSrc="/img/svg/coverIcon.svg">  
          <Text>
            {info}&nbsp;
            <InlineLink decor="back" href="/contacts">связаться со мной</InlineLink>
          </Text>          
        </DescriptionCard>          
    </section>
    <Divider/>
    <section className={cn("section")}>
      <CardList seriaDecor={true} cardList={illustrationsList} />
    </section>
  </div>);
}
