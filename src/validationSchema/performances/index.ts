import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  performance_data: yup.string().required(),
  vehicle_id: yup.string().nullable().required(),
});
