
import { getAllCovers } from "@/api/getData";
import { getCoversInfo } from "@/api/getStaticContent";
import { CoverInfo, DescriptionCard, Divider, Htag, Text } from "@/components";

import cn from "classnames";

export default async function Home() {
 const info = getCoversInfo(); 
  const coversList = await getAllCovers();

  return (<div className="container">
     <Htag tag='h1'>Иллюстратор Громова Мария. Обложки на заказ</Htag>
     <section className={cn("section")}>
        <Htag tag="h2" opt="big">Обложки</Htag>
        <DescriptionCard iconSrc="/img/svg/coverIcon.svg">  
          <Text>{info}</Text>          
        </DescriptionCard>          
    </section>
    <Divider/>
    <CoverInfo  className={"section"} coversList={coversList}/>   
  </div>);
}

//TODO: использование заголовков h1 переделать
