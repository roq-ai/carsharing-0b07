import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  vehicle_id: yup.string().nullable().required(),
});
