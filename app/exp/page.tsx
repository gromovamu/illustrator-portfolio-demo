"use client";
import { usePathname, useSearchParams , useParams } from "next/navigation";
import { Divider, Htag } from "@/components";
import cn from "classnames";
import { notFound } from "next/navigation";

export default function IllustrationsListPage() {  
  const pathname = usePathname();
  const params = useParams<{ tag: string; item: string }>();
  const searchParams = useSearchParams();
 
  const search = searchParams.get("id");
  //если id не указан в запросе, то по умолчанию 0
  const id = parseInt(search??"0", 10) ;
  if (isNaN(id)) {
    notFound();
  }

  console.log(pathname);
  console.log(params);
  console.log(id);

  return (<div className="container">
     <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
     <section className={cn("section")}>
       
    <Divider/>
    <Divider/>
    <Divider/>
    </section>
  </div>);
}
