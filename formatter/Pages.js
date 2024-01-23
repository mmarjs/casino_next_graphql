import { formatImageObject, formatList } from "./helpers";

export const formatPagesObject = function(obj){

    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};
    return {
        ...data,
        id: data.id,
        categories: formatList(data.category_ids),
        featured_image:formatImageObject(data.featured_image),
        meta_image:formatImageObject(data.meta_image)
    }
}