import menuData from "@/content/menu.json";
import services from "@/content/services.json";
import workOrder from "@/content/workOrder.json";
import contacts from "@/content/contacts.json";
import social from "@/content/social.json";
import authorInfo from "@/content/info.json";
import { MenuLinkData, Service, WorkData, ContactData, contactType, Social} from "@/interfaces";

export function getMenu(): MenuLinkData {    
    return menuData;
}

export function getServices(): Service[] {    
   return services.services;
}

export function getWorkOrder(): WorkData {    
    return workOrder;
 }

export function getContact(type: contactType): ContactData {    
    return contacts[type];
 }

 //TODO: контакты в плане данных как то не очень, пока так, но еще подумать

 export function getSocialLinks(): Social[] {     
    return social.links;
 }

 export function getAuthorInfo(): string {     
   return authorInfo.info;
}