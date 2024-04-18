

import { PrismaClient } from '@prisma/client';
import { Cover, Illustration, Seria} from '@/interfaces/data.interfaces';

const prisma = new PrismaClient();


// завершение соединения с базой
export async function bdDisconnect()  {
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
  });
}

//  получение списока иллюстраций для главной страницы
export async function getMainPageIllustrations(): Promise<Illustration[]> {  
  return prisma.firstPageIllustrations.findMany({
    select: {
      illustration: {
        select: {
          id: true,
          seriaId: true,
          title: true,
          url: true
        }
      }
    }
  }).then((coverList) => {
    return coverList.map(illustration => illustration.illustration);
  });
}


//  получение списка обложек по порядковым номерам (порядок вывода на экран задан в отдельной таблице)
export async function getCovers(first: number, last: number): Promise<Cover[]> { 
  return prisma.coverList.findMany({
    select: {
      cover: true
    },
    where: { 
      id : {
        gte: first,
        lte: last,
      },
    },
  }).then(coverList => coverList.map(cover => cover.cover));
}

// получение списка иллюстраций по порядковым номерам (порядок вывода на экран задан в отдельной таблице)
export async function getIllustrution(first: number, last: number): Promise<Illustration[]> { 
  return prisma.illustrationList.findMany({
    select: {
      illustration: {
        select: {
          id: true,
          seriaId: true,
          title: true,
          url: true
        }
      }
    },
    where: { 
      id : {
        gte: first,
        lte: last,
      },
    },
  }).then(illustrationList => illustrationList.map(illustration => illustration.illustration));
}

// получение списка всех иллюстраций
export async function getAllIllustrution(): Promise<Illustration[]> { 
  return prisma.illustrationList.findMany({
    select: {
      illustration: {
        select: {
          id: true,
          seriaId: true,
          title: true,
          url: true
        }
      }
    }    
  }).then(illustrationList => illustrationList.map(illustration => illustration.illustration));
}


// получение информации о конкретной иллюстрации по id
export async function getIllustrutionInfo(id: number): Promise<Illustration | null> { 
  return prisma.illustration.findFirst({   
    where: { 
      id : id,
    },
  });
}

// получение информации о серии иллюстраций по id
export async function getSeriaInfo(id: number): Promise<Seria | null> { 
  return prisma.seria.findFirst({   
    where: { 
      id : id,
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
export async function getSeria(id:number): Promise<Illustration[]> { 
  return prisma.illustration.findMany({
    select: {
      id: true,
      seriaId: true,
      title: true,
      url: true
    },
    where: { 
      seriaId : id,
    },
  });
}

// получение информации о конкретной обложке по id (со списком тегов)
export async function getCoverInfo(id: number): Promise<Cover | null> { 
  return prisma.coverAndTag.findMany({
    where: { 
      coverId : id,
    },
    select: {
      tag: {
        select: {
          name: true
        }
      }
    }
  }).then(tags => {
    const tagsList = tags.map(tag => tag.tag.name.trim())
    console.log(tagsList);
    return prisma.cover.findFirst({
      where: { 
        id : id,
      },
    }).then(coverInfo => {
      if(coverInfo) {
        return{...coverInfo, tag:tagsList};
      }
      return null;
    });
  });
}
// TODO: не разобралась, как сделать один запрос 
// так что пока сделаю 2 запроса и теги в строку объединю в коде
// очень громоздко, нужно понять как переделать




/*prismaMain()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Prisma client end");
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/