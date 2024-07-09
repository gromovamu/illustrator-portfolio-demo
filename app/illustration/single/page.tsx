
import { bdDisconnect, getNoSeriaIllustrationList, getHrefList} from "@/api/getData";
import { Illustration, } from "@/components";

// страница с детальной информацие об иллюстрации (получает список всех иллюстраций без серии)
export default async function SingleDetailPage() {
  
  const hrefList = await getHrefList();
  const illustrationList = await getNoSeriaIllustrationList(); 
  await bdDisconnect();

  return (<div className="container">
    <Illustration illustrationList={illustrationList} hrefList={hrefList}/>
  </div>);
}
