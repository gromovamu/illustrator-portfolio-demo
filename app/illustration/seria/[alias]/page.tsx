
import { getSeriaIdList, bdDisconnect, getSavedIllustrutionList, getLinksPrevNextBySeria, getSeriaDataList, getSeriaInfo } from "@/api/getData";
import { NextPrevBlock, Seria } from "@/components";
import { notFound } from "next/navigation";
//import cn from "classnames";

// функция возвращает список параметров для статической генерации страниц по указанным параметрам
export async function generateStaticParams() {
  const seriaList = await getSeriaIdList();
  await bdDisconnect(); //TODO: решить куда перенести, где в next конец работы со статической генерацией
  return seriaList.map(item => ({ alias: item.id.toString() }));
}

// страница с детальной информацие о серии иллюстраций
export default async function SeriaDetailPage({ params }: { params: { alias: string } }) {
  const { alias } = params;
  const seriaId = parseInt(alias, 10);
  const seriaInfo = await getSeriaInfo(seriaId);
  const illustrationDataList = await getSeriaDataList(seriaId);

  if ((seriaInfo === null) || (illustrationDataList.length === 0)) {
    notFound();
  }

  const illustrationsList = await getSavedIllustrutionList();
  const nextPrevUrl = getLinksPrevNextBySeria(seriaId, illustrationsList);

  return (<div className="container">
    <div className="section">    
      <Seria seria={seriaInfo} illustrationDataList={illustrationDataList}></Seria>
      {nextPrevUrl && <NextPrevBlock urlData={nextPrevUrl} />}
    </div>
  </div>);
}

/* */
