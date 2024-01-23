import { formatImageObject } from "./helpers";

export const formatPaymentMethodsArray = function(array){
    let items = [];
    array.map((item)=>{
        const data = {id: item.id,...item.attributes}
        
        items.push({
            ...data,
            id: data.id,
            logo:formatImageObject(data.logo)
        })
    });

    return items;
}


export const formatPaymentMethodsObject = function(obj){

    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};
    return {
        ...data,
        id: data.id,
        logo:formatImageObject(data.logo)
    }
}