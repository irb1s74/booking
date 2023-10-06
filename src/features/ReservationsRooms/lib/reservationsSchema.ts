import { boolean, date, number, object, string } from 'yup'

const phoneRegExp = /[0-9]/i

export const reservationsSchema = object({
  numAdults: number().integer('Должно быть целым').min(1).required('Это обязательное поле'),
  numTeenagers: number().integer('Должно быть целым'),
  numChildren: number()
    .integer('Должно быть целым')
    .test(
      'maxChildrenPerAdult',
      'На одного взрослого должно приходиться не более 3 детей',
      (value = 0, context) => value <= context.parent.numAdults * 3,
    ),
  roomType: string().required('Это обязательное поле'),
  numNights: number()
    .integer('Должно быть целым')
    .min(1, 'Количество ночей не может быть меньше одного'),
  insurance: boolean().required('Это обязательное поле'),
  total: number(),
  surname: string().required('Это обязательное поле'),
  name: string().required('Это обязательное поле'),
  patronymic: string(),
  phoneNumber: string()
    .matches(phoneRegExp, 'Некорректный номер телефона. Формат: +7XXXXXXXX-XX')
    .required('Это обязательное поле'),
  birthDate: date().required('Это обязательное поле'),
})
