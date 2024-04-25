
import { getNoSeriaIllustrationIdList, getLinksPrevNext,  bdDisconnect, getSavedIllustrutionList, getIllustrationData} from "@/api/getData";
import { IllustrationDetails, NextPrevBlock } from "@/components";
import { notFound } from "next/navigation";
//import cn from "classnames";

// функция возвращает список параметров для статической генерации страниц по указанным параметрам
export async function generateStaticParams() {
  const illustrationList = await getNoSeriaIllustrationIdList();
  await bdDisconnect(); //TODO: решить куда перенести, где в next конец работы со статической генерацией
  return illustrationList.map(item => ({ alias: item.id.toString() }));
}

// страница с детальной информацие об иллюстрации
export default async function IllustrationDetailPage({ params }: { params: { alias: string } }) {
  const { alias } = params;
  const illustrationId = parseInt(alias, 10);
  const illustrationData = await getIllustrationData(illustrationId);

  if (illustrationData === null) {
    notFound();
  }
  const illustrationsList = await getSavedIllustrutionList();
  const nextPrevUrl = getLinksPrevNext(illustrationId, illustrationsList);

  return (<div className="container">
    <div className="section">
      <IllustrationDetails data={illustrationData} />
      {nextPrevUrl&&<NextPrevBlock urlData={nextPrevUrl}/>}
    </div>
  </div>);
}
