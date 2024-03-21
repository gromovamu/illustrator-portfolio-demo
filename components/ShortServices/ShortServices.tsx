import { shortServicesProps } from "./ShortServices.props";
import styles from "./ShortServices.module.css";
import cn from "classnames";
import { ShortServiceCard, Htag, LinkButton } from "@/components";

export const ShortServices = ({ servicesList, className, ...props }: shortServicesProps): JSX.Element => {
  return (
    <section className={cn(styles.container, className)} {...props}>
      <Htag tag='h2' opt='big'>Услуги</Htag>
      <div className={styles.list}>
        {servicesList && servicesList.map(service => (
          <ShortServiceCard key={service.id} iconSrc={service.iconSrc} title={service.title} descr={service.descr} />
        ))}
      </div>
      <LinkButton href="#">Подробнее</LinkButton>
    </section>);
};