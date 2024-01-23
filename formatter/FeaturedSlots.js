import {formatImageObject} from "@/formatter/helpers";

export const formatFeaturedSlotObject = function (obj) {

    if (!obj) {
        return null;
    }

    return {
        topBorderColor: obj.top_border_color,
        buttonLabel: obj.button_label,
        specialOfferLabel: obj.special_offer_label,
        specialOfferEnabled: obj.special_offer_enabled,
        link: obj.link,
        bonuses: obj.bonuses,
        image: formatImageObject({...obj.image}),
    }
}

export const formatFeaturedSlotsArray = function (arr) {
    if (!arr || !arr.length) {
        return [];
    }

    return arr.map((slotObj) => formatFeaturedSlotObject(slotObj));
}