

import { PrismaClient } from '@prisma/client';
import { Cover, Illustration, IllustrationData, IllustrationDetail, Seria } from '@/interfaces/data.interfaces';

const prisma = new PrismaClient();

const selectIllustration = {
  illustration: {
    select: {
      id: true,
      seriaId: true,
      title: true,
      url: true
    }
  }
};

interface IllustrationResult {
  illustration: {
    id: number,
    seriaId: null | number,
    title: string,
    url: string
  }
}

const getIllustrationArr = (illustrationList: IllustrationResult[]): Illustration[] => {
  return illustrationList.map(illustration => (
    {
      ...illustration.illustration,
      href: generatePageLink(illustration.illustration)
    }));
};

const errorGetEmptyList = async (e: Error) => {
  console.error(e);
  return [];
};


// завершение соединения с базой
export async function bdDisconnect() {
  await prisma.$disconnect();
}

//  получение списока обложек для главной страницы
export async function getMainPageCovers(): Promise<Cover[]> {
  return prisma.firstPageCovers.findMany({
    select: {
      cover: true
    }
  }).then((coverList) => {
    return coverList.map(cover => cover.cover);
  }).catch(errorGetEmptyList);
}

//  получение списока иллюстраций для главной страницы
export async function getMainPageIllustrations(): Promise<Illustration[]> {
  return prisma.firstPageIllustrations.findMany({
    select: selectIllustration
  }).then(getIllustrationArr).catch(errorGetEmptyList);
}


//  получение списка обложек по порядковым номерам (порядок вывода на экран задан в отдельной таблице)
export async function getCovers(first: number, last: number): Promise<Cover[]> {
  return prisma.coverList.findMany({
    select: {
      cover: true
    },
    where: {
      id: {
        gte: first,
        lte: last,
      },
    },
  }).then(coverList => coverList.map(cover => cover.cover));
}

//  получение списка всех обложек
export async function getAllCovers(): Promise<Cover[]> {
  return prisma.coverList.findMany({
    select: {
      cover: true
    },  
  }).then(coverList => coverList.map(cover => cover.cover));
}

// получение списка иллюстраций по порядковым номерам (порядок вывода на экран задан в отдельной таблице)
export async function getIllustrution(first: number, last: number): Promise<Illustration[]> {
  return prisma.illustrationList.findMany({
    select: selectIllustration,
    where: {
      id: {
        gte: first,
        lte: last,
      },
    },
  }).then(getIllustrationArr);
}

// получение списка всех иллюстраций
export async function getAllIllustrution(): Promise<Illustration[]> {
  return prisma.illustrationList.findMany({
    select: selectIllustration,
  }).then(getIllustrationArr);
}

let savedIllustrutionList: Illustration[] = [];
// получение списка всех иллюстраций из сохраненного массива
// если маасив пуст то загружает данные из базы или возращает текущий сохранееный список 
export async function getSavedIllustrutionList(): Promise<Illustration[]> {
  if (savedIllustrutionList.length === 0) {
    return getAllIllustrution().then(list => {
      savedIllustrutionList = list;
      return list;
    }).catch(errorGetEmptyList);
  }
  return savedIllustrutionList;
}

// получение информации о конкретной иллюстрации по id
export async function getIllustrutionInfo(id: number): Promise<Illustration | null> {
  return prisma.illustration.findFirst({
    where: {
      id: id,
    },
  });
}

// получение информации о серии иллюстраций по id
export async function getSeriaInfo(id: number): Promise<Seria | null> {
  return prisma.seria.findFirst({
    where: {
      id: id,
    },
    include: {
      illustration_seria_illustrationIdToillustration: {
        select: {
          url: true
        }
      }
    }
  }).then(info => {
    return info !== null ? {
      id: info.id,
      title: info.title,
      description: info.description,
      urlCover: info.illustration_seria_illustrationIdToillustration.url,
    } : null;
  }
  );
}

// получение списка иллюстраций входящих в серию по id серии
export async function getSeria(id: number): Promise<Illustration[]> {
  return prisma.illustration.findMany({
    where: {
      seriaId: id,
    },
  });
}

// получение информации о конкретной обложке по id (со списком тегов)
export async function getCoverInfo(id: number): Promise<Cover | null> {
  return prisma.coverAndTag.findMany({
    where: {
      coverId: id,
    },
    select: {
      tag: {
        select: {
          name: true
        }
      }
    }
  }).then(tags => {
    const tagsList = tags.map(tag => tag.tag.name.trim());
    console.log(tagsList);
    return prisma.cover.findFirst({
      where: {
        id: id,
      },
    }).then(coverInfo => {
      if (coverInfo) {
        return { ...coverInfo, tag: tagsList };
      }
      return null;
    });
  });
}
// TODO: не разобралась, как сделать один запрос 
// так что пока сделаю 2 запроса 
// очень громоздко, нужно понять как переделать


// получение списка id всех иллюстраций без серии ( для статической генерации соответсвующих страниц)
export async function getNoSeriaIllustrationIdList(): Promise<{ id: number }[]> {
  return prisma.illustration.findMany({
    select: {
      id: true
    },
    where: {
      seriaId: null,
    },
  }).catch(errorGetEmptyList);
}

// получение списка id всех серий ( для статической генерации соответсвующих страниц)
export async function getSeriaIdList(): Promise<{ id: number }[]> {
  return prisma.seria.findMany({
    select: {
      id: true
    }
  }).catch(errorGetEmptyList);
}

//TODO: КЭШ в запросах к базе разобраться и настроить в prisma запросах

function formLinksPrevNext(num: number, arr: Illustration[]) {
  if (num === 0) {
    return { prev: null, next: arr[1].href ?? null };
  }
  if (num === arr.length - 1) {
    return { prev: arr[num - 1].href ?? null, next: null };
  }
  return { prev: arr[num - 1].href ?? null, next: arr[num + 1].href ?? null };
}

export function getLinksPrevNext(id: number, arr: Illustration[]): { prev: string | null, next: string | null } | null {
  const num = arr.findIndex((item) => item.id === id);
  if (num !== -1) {
    return formLinksPrevNext(num, arr);
  }
  return null;
}

export function getLinksPrevNextBySeria(id: number, arr: Illustration[]): { prev: string | null, next: string | null } | null {
  const num = arr.findIndex((item) => item.seriaId === id);
  if (num !== -1) {
    return formLinksPrevNext(num, arr);
  }
  return null;
}



export function generatePageLink(illustration: Illustration) {
  return illustration.seriaId === null ? `/illustration/${illustration.id.toString()}` :
    `/illustration/seria/${illustration.seriaId.toString()}`;
}

// преобразование объекта Illustration в объект IllustrationData
function formIllustrationData(info: Illustration): IllustrationData {
  return {
    id: info.id,
    url: info.url,
    details: [{
      name: "Название",
      data: info.title,
      type: 'decor'
    },
    {
      name: "Описание",
      data: info.description ?? '',
      type: 'text'
    }
    ]
  };
}

// получение информации о серии в виде массива со списком свойств
export function getSeriaInfoDetails(seria: Seria): IllustrationDetail[] {
  return [{
    name: "Название серии",
    data: seria.title,
    type: 'decor'
  },
  {
    name: "Описание серии",
    data: seria.description,
    type: 'text'
  }
  ];
}

export function getPropertyInfoDetail(property: string, array: IllustrationDetail[]): string {
  const res = array.filter(prop => prop.name === property);
  return (res.length == 0) ? '' : res[0].data;
}

// получение информации о иллюстрации по id в виде объекта со списком свойств
export async function getIllustrationData(id: number): Promise<IllustrationData | null> {
  return getIllustrutionInfo(id).then(info => {
    return info === null ? null : formIllustrationData(info);
  }).catch(async (e: Error) => {
    console.error(e);
    return null;
  });
}

// получение информации о каждой иллюстрации серии по id серии в виде  массива объектов со списком свойств
export async function getSeriaDataList(id: number): Promise<IllustrationData[]> {
  return getSeria(id).then(infoList => infoList.map(info => formIllustrationData(info))).catch(errorGetEmptyList);
}
