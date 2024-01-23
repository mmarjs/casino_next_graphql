import { formatImageObject, formatList } from "./helpers";

export const formatArticlesArray = function(array){
    let items = [];
    array.map((item)=>{
        const data = {id: item.id,...item.attributes}
        
        items.push({
            ...data,
            id: data.id,
            categories: formatList(data.category_ids),
            featured_image:formatImageObject(data.featured_image)
        })
    });

    return items;
}


export const formatArticlesObject = function(obj){

    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};

    return {
        ...data,
        id: data.id,
        categories: formatList(data.category_ids),
        featured_image:formatImageObject(data.featured_image),
        meta_image:formatImageObject(data.meta_image),
        header_image:formatImageObject(data.header_image),
        featured_slots: data.featured_slots
    }
}