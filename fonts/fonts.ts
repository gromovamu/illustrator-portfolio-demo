//import { Noto_Sans } from "next/font/google";
import localFont  from "next/font/local";

//export const notoSans = Noto_Sans({ subsets: ["cyrillic"] });

export const roboto = localFont({
    src: [
      {
        path: './Roboto-Regular.woff',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Roboto-Medium.woff',
        weight: '500',
        style: 'normal',
      }      
    ],
  });


export const adventPro = localFont({
src: [
    {
    path: './AdventPro_Expanded-Medium.woff',
    weight: '500',
    style: 'normal',
    },
    {
    path: './AdventPro_Expanded-SemiBold.woff',
    weight: '600',
    style: 'normal',
    },
    {
    path: './AdventPro_Expanded-Bold.woff',
    weight: '700',
    style: 'normal',
    }       
],
});