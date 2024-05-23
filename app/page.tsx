
import { getContact, getServices } from "@/api/getStaticContent";
import { Htag, Hero, Divider, ShortServices, Contact, MainIllustrations, MainCovers} from "@/components";


export default function Home() {
  const servicesList = getServices();
  const telegram = getContact("telegram");
  const mail = getContact("mail");

  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
          <MainCovers/>
          <Divider/>
          <MainIllustrations/>
          <Divider opt="right"/>       
          <ShortServices servicesList={servicesList}/>
          <Divider/>
          <Contact telegram={telegram} mail={mail}/> 
      </div>
    </main>
  );
}
