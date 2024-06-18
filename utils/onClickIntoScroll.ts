'use client';
import { MouseEvent } from "react";
import { isIdInRefMap, scrollById } from "./scrollById";

export function onClickIntoScroll(e: MouseEvent<HTMLAnchorElement>): void {  
    const href = e.currentTarget.href;
    const index = href.indexOf('#');
    if(index !== -1) {
        const id = href.slice(index+1);    
        
        if (isIdInRefMap(id)) {           
          e.preventDefault();
          scrollById(id);      
        } 
    }
  }
