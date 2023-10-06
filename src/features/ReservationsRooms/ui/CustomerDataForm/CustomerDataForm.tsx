import { memo } from 'react'
import { FormikErrors, FormikTouched } from 'formik'
import { Input } from 'shared/ui/Input'
import { IReservationsData } from '../../model/types/type'
import cls from './CustomerDataForm.module.scss'

interface CustomerDataFormProps {
  values: IReservationsData
  handleChange: {
    (e: React.ChangeEvent<any>): void
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
  }
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
  errors: FormikErrors<IReservationsData>
  touched: FormikTouched<IReservationsData>
}

export const CustomerDataForm = memo((props: CustomerDataFormProps) => {
  const { values, errors, touched, handleChange, handleBlur } = props
  return (
    <>
      <p className={cls.title}>Данные покупателя</p>
      <div className={cls.field}>
        <p className={cls.field__name}>Фамилия</p>
        <Input
          id='surname'
          className={cls.field__input}
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.surname && Boolean(errors.surname)}
          helperText={errors.surname}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Имя</p>
        <Input
          id='name'
          className={cls.field__input}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={errors.name}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Отчество</p>
        <Input
          id='patronymic'
          className={cls.field__input}
          value={values.patronymic}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.patronymic && Boolean(errors.patronymic)}
          helperText={errors.patronymic}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Номер телефона</p>
        <Input
          id='phoneNumber'
          className={cls.field__input}
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='+ 7 999 123 45-67'
          type='text'
          error={touched.phoneNumber && Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Дата рождения</p>
        <Input
          id='birthDate'
          className={cls.field__input}
          value={values.birthDate}
          onChange={handleChange}
          onBlur={handleBlur}
          type='date'
          error={touched.birthDate && Boolean(errors.birthDate)}
          helperText={errors.birthDate}
        />
      </div>
    </>
  )
})
