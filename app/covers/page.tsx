
'use client';
import { getCoverInfo } from "@/api/getData";
import { getServices, getWorkOrder } from "@/api/getStaticContent";
import { DescriptionCard, Divider, Htag, Text } from "@/components";
import { usePathname } from 'next/navigation';

export default function Home() {
  const path = usePathname();    
  console.log(path);
 const info = getCoverInfo(); 
  const illustrationsList = await getSavedIllustrutionList();

  return (<div className="container">
     <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
     <section className={cn("section")}>
        <Htag tag="h2" opt="big">Иллюстрации</Htag>
        <DescriptionCard iconSrc="/img/svg/illustrationIcon.svg">  
          <Text>
            
          </Text>          
        </DescriptionCard>          
    </section>
    <Divider/>
    <section className={cn("section")}>
      <CardList seriaDecor={true} cardList={illustrationsList} />
    </section>
  </div>);
}
