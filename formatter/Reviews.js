import { formatProvidersObject } from "./Providers";
import { formatCasinosObject } from './Casinos';
import { formatImagesArray } from "./helpers";


export const formatReviewsArray = function(array){
    let items = [];
    array.map((item)=>{
        const data = {id: item.id,...item.attributes}

        items.push({
            ...data,
            id: data.id,
            provider: formatProvidersObject(data.provider.data),
            casino: formatCasinosObject(data.casino.data),
            average_rating:getAverageRating(data.rating),
        })
    });

    return items;
}

export const formatReviewsObject = function(obj){
    
    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};
    return {
        ...data,
        id: data.id,
        provider: formatProvidersObject(data.provider.data),
        casino: formatCasinosObject(data.casino.data),
        photos: formatImagesArray(data.photos),
        average_rating:getAverageRating(data.rating),
        featured_slots: data.featured_slots
    }
}

const getAverageRating = (rating) => {
    if(!rating){
        return 0
    }
    const avgRating = (rating.support + rating.bonus + rating.website + rating.methods_of_payments + + rating.game_provider)/5;
    return avgRating;
}