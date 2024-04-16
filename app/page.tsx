
import { getContact, getServices } from "@/api/getStaticContent";
import { Htag, Hero, Divider, ShortServices, Contact, CardList} from "@/components";



export default function Home() {
  const servicesList = getServices();
  const telegram = getContact("telegram");
  const mail = getContact("mail");

  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
          <Divider/>
          <ShortServices servicesList={servicesList}/>
          <Divider opt="right"/>
          <section className="section">
            <Htag tag="h2" opt="big">Иллюстрации</Htag>
           < CardList/>
          </section>
          <Divider/>
          <Contact telegram={telegram} mail={mail}/> 
      </div>
    </main>
  );
}
