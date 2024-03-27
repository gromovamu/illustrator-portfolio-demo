
import { Htag, Services } from "@/components";
import { Service } from "@/interfaces/service.interfaces";

const shortServicesData: Service[] = [
  {
    id: 1,
    iconSrc: "/img/svg/coverIcon.svg",
    title: "Обложки",
    descr: "Разработка дизайн обложек для электронных и печатных изданий",
    text: [
      "Я разрабатываю дизайн обложек  для электронных книг и печатных изданий. Работаю в основном в жанрах фентези и фантастика с романтическим уклоном, подростковая литература, современный любовный роман и д.р.",
      "При создании обложки для электронного издания я учитываю, что она будет использоваться на различных порталах в небольшом размере и с разным разрешением сторон.",
    ]
  },
  {
    id: 2,
    iconSrc: "/img/svg/illustrationIcon.svg",
    title: "Иллюстрация",
    descr: "Векторные изображения, разработка персонажей, небольшие серии иллюстрация",
    text: [
      "Я  могу создать для вас векторную иллюстрацию или серию работ в одной стилистике, разработать бренд-персонажа.",
      "В работе я использую программу Affinity designer, которая позволяет экспортировать файлы в форматах  jpg, png, pdf, svg, eps, psd."
    ]
  }];

export default function Home() {
  return (<div className="container">
    <Htag tag='h1'>Иллюстратор Громова Мария - Услуги</Htag>
    <Services servicesList={shortServicesData} />
  </div>);
}
