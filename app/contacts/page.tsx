import { Contact, Htag } from "@/components";
import { ContactData } from "@/interfaces/contact.interfaces";

const telegram: ContactData = {
  text: "@mugromova",
  href: "https://t.me/mugromova"
};

const mail: ContactData = {
  text: "mu_g_art@mail.ru",
  href: "mailto:mu_g_art@mail.ru"
};

export default function Page() {
  return (
    <div className="container">
      <Htag tag='h1'>Иллюстратор Громова Мария - Контакты</Htag>
      <Contact telegram={telegram} mail={mail} />
    </div>);
}
