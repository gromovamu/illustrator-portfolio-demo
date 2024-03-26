import { ServicesProps } from "./Services.props";
import styles from "./Services.module.css";
import cn from "classnames";
import { ServiceCard, Htag, LinkButton } from "@/components";

export const Services = ({ servicesList, className, ...props }: ServicesProps): JSX.Element => {
  return (
    <section className={cn(styles.container, className)} {...props}>
      <Htag tag='h2' opt='big'>Услуги</Htag>
      <div className={styles.list}>
        {servicesList && servicesList.map(service => (
          <ServiceCard key={service.id} iconSrc={service.iconSrc} title={service.title} descr={service.descr} />
        ))}
      </div>
      <LinkButton href="#">Подробнее</LinkButton>
    </section>);
};