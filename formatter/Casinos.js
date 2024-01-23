import { formatImageObject, formatList } from "./helpers";
import { formatPaymentMethodsArray } from "./PaymentMethods";
import { formatLanguagesArray } from "./Languages";
import moment from 'moment-timezone';

export const formatCasinosArray = function(casinos){
    let bonusItems = [];
    casinos.map((item)=>{
        const data = {id: item.id,...item.attributes}

        bonusItems.push({
            ...data,
            id: data.id,
            bonuses: formatList(data.bonuses),
            logo:formatImageObject(data.logo),
            flag:formatImageObject(data.flag),
            background_bg: data.background_image?data.background_image.data.attributes.url:null,
            promo_image:formatImageObject(data.promo_image),
            average_rating:getAverageRating(data.review?data.review.data:null),
            rating: data.review?data.review.data?.attributes.rating:null,
            payment_methods: formatPaymentMethodsArray(data.payment_methods.data),
            languages: formatLanguagesArray(data.languages.data),
            creation_date: moment(data.creation_date).format("YYYY-MM-DD")
        })
    });

    return bonusItems
}



export const formatCasinosObject = function(obj){

    if(!obj){
        return null;
    }

    const data = {id: obj.id,...obj.attributes};
    return {
        ...data,
        id: data.id,
        bonuses: formatList(data.bonuses),
        payment_methods: formatPaymentMethodsArray(data.payment_methods.data),
        logo:formatImageObject(data.logo),
        flag:formatImageObject(data.flag),
        background_bg: data.background_image?data.background_image.data.attributes.url:null,
        promo_image:formatImageObject(data.promo_image),
        meta_image:formatImageObject(data.meta_image),
        average_rating:getAverageRating(data.review?data.review.data:null),
        rating: data.review?data.review.data.attributes.rating:null,
        languages: formatLanguagesArray(data.languages.data),
        creation_date: moment(data.creation_date).format("YYYY-MM-DD")
    }
}

const getAverageRating = (ratingObj) => {

    if(ratingObj && ratingObj.attributes && ratingObj.attributes.rating){

        const rating = ratingObj.attributes.rating;
        const avgRating = (rating.support + rating.bonus + rating.website + rating.methods_of_payments + + rating.game_provider)/5;
        return avgRating;

    }else{
        return 0
    }

}
