
import { bdDisconnect, getMainPageCovers, getMainPageIllustrations } from "@/api/getData";
import { getContact, getServices } from "@/api/getStaticContent";
import { Htag, Hero, Divider, ShortServices, Contact, MainIllustrations, MainCovers} from "@/components";


export default async function Home() {
  const servicesList = getServices();
  const telegram = getContact("telegram");
  const mail = getContact("mail");
  const coversList = await getMainPageCovers();
  const illustrationsList = await getMainPageIllustrations();
  await bdDisconnect();

  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
          <MainIllustrations illustrationsList={illustrationsList}/>
          <Divider/>
          <MainCovers id="coversMain" coversList={coversList} />
          <Divider opt="right"/>       
          <ShortServices servicesList={servicesList}/>
          <Divider/>
          <Contact telegram={telegram} mail={mail}/> 
      </div>
    </main>
  );
}
