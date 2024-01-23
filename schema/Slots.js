import * as yup from 'yup';

export const SearchSlotsSchema = yup.object({
    search:yup.string().required('Required'),
});