
import * as yup from 'yup';

export const CourseSearchSchema = yup.object({
    difficulty:yup.object().required('Difficulty is required'),
    category:yup.object().required('Category is required'),
});
