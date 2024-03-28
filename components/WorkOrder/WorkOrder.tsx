import { WorkOrderProps } from "./WorkOrder.props";
import styles from "./WorkOrder.module.css";
import cn from "classnames";
import { Htag, Text } from "@/components";
import { textFont } from "@/fonts/fonts";

export const WorkOrder = ({ workData, className, ...props }: WorkOrderProps): JSX.Element => {
  return (
    <section className={cn(styles.container, className)} {...props}>
      <Htag tag='h2' opt='big'>Порядок работы</Htag>
      <Text className={styles.text}>{workData.descr}</Text>
      <div className={cn(textFont.className, styles.list)}>
        {workData.steps && workData.steps.map((step, i) => (
           <li key={`step${i}`} className={styles.step}>
           <div className={styles.numberContainer}>
             <span className={styles.decor}></span>
             <span className={styles.number}>{i+1}</span>
           </div>
           <p className={cn(styles.stepDescr)}>
             {step}
           </p>
         </li>
        ))}
      </div>  
      <div className={cn(styles.text, styles.defList)}>
      {workData.info&& workData.info.map((def, i) => (
        <Text key={`def${i}`}>
          <span className={styles.term}>{def.term}</span>
          &nbsp;- {def.description}
        </Text>
      ))}  
      </div>
      
    </section>);
};