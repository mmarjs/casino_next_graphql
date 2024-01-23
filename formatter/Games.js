import { formatImageObject, formatList } from "./helpers";

export const formatGamesArray = function(array){
    let items = [];
    array.map((item)=>{
        const data = {id: item.id,...item.attributes};

        items.push({
            ...data,
            id: data.id,
            logo:formatImageObject(data.logo),
            banner:formatImageObject(data.banner),
            providers: formatList(data.providers),
        })
    });

    return items
}


export const formatGamesObject = function(obj){

    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};
    
    return {
        ...data,
        id: data.id,
        logo:formatImageObject(data.logo),
        banner:formatImageObject(data.banner),
        providers: formatList(data.providers),
        meta_image:formatImageObject(data.meta_image),
        featured_slots: data.featured_slots
    }
}