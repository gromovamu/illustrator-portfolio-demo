
import { getServices, getWorkOrder } from "@/api/getStaticContent";
import { Divider, Htag, Services, WorkOrder } from "@/components";

export default function Home() {
  const servicesList = getServices();
  const workOrder = getWorkOrder();
  return (<div className="container">
    <Htag tag='h1'>Иллюстратор Громова Мария - Услуги</Htag>
    <Services servicesList={servicesList} />
    <Divider/>
    <WorkOrder workData={workOrder}></WorkOrder>
  </div>);
}
