
import * as yup from 'yup';

export const PromoCodeSchema = yup.object({
    promo_code:yup.string().required('Promo code is required'),
});