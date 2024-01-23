import { formatImageObject } from "./helpers";

export const formatCategoriesArray = function(array){
    let items = [];
    array.map((item)=>{
        const data = {id: item.id,...item.attributes}
        
        items.push({
            ...data,
            id: data.id,
            banner:formatImageObject(data.banner)
        })
    });

    return items;
}


export const formatCategoriesObject = function(obj){

    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};
    return {
        ...data,
        id: data.id,
        banner:formatImageObject(data.banner)
    }
}