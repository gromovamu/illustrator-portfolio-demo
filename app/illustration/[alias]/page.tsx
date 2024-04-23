
import { getNoSeriaIllustrationIdList, bdDisconnect } from "@/api/getData";
import { getIllustrutionInfo } from "@/api/getData";
import { IllustrationDetails, NextPrevBlock } from "@/components";
import { IllustrationData, Illustration } from "@/interfaces";
import { notFound } from "next/navigation";
import cn from "classnames";


// функция возвращает список параметров для статической генерации страниц по указанным параметрам
export async function generateStaticParams() {
  const illustrationList = await getNoSeriaIllustrationIdList().catch(async (e) => {
    console.error(e);
    return [];
  });
  await bdDisconnect();
  const param = illustrationList.map(item => ({alias: item.id.toString()}));
  return param;
}

// получение информации о иллюстрации в виде объекта со списком свойств
function getIllustrationData(info: Illustration): IllustrationData {
  return {
    url: info.url,
    details: [{
      name: "Название",
      data: info.title,
      type: 'decor'
    },
    {
      name: "Описание",
      data: info.description ?? '',
      type: 'text',
    }
    ]
  };
}
// TODO: пока не решила, где ее лучше разместить будет тут

// страница с детальной информацие об иллюстрации
export default async function IllustrationDetailPage({ params }: { params: { alias: string } }) {
  const { alias } = params;
  const illustrationInfo = await getIllustrutionInfo(parseInt(alias, 10));

  //console.log(illustrationInfo);
  const illustrationData = illustrationInfo ? getIllustrationData(illustrationInfo) : null;

  if (!illustrationInfo) {
    notFound();
  }
  return (<div className="container">
    <div className="section">
      {illustrationData && <IllustrationDetails data={illustrationData} />}
      <NextPrevBlock nextUrl="" prevUrl=""/>
    </div>
  </div>);
}
