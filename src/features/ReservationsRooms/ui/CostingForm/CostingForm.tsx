import { FormikErrors, FormikTouched } from 'formik'
import { Input } from 'shared/ui/Input'
import { Radio } from 'shared/ui/Radio'
import { Checkbox } from 'shared/ui/Checkbox'
import { IReservationsData } from '../../model/types/type'
import classNames from 'classnames'
import cls from './CostingForm.module.scss'
import { useEffect, useState } from 'react'
import { getPriceRoom } from 'features/ReservationsRooms/lib/getPriceRoom'

interface ICostingForm {
  numAdults: number
  numTeenagers: number
  numChildren: number
  roomType: string
  numNights: string
  insurance: boolean
}

interface CostingFormProps {
  // updateFields: (fields: Partial<ICostingForm>) => void
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

export const CostingForm = (props: CostingFormProps) => {
  const { values, errors, touched, handleChange, handleBlur } = props

  useEffect(() => {
    const teenagersDiscount = 0.5
    const nightsCost = getPriceRoom(values.roomType) * values.numNights * values.numAdults
    const teenagersCost =
      getPriceRoom(values.roomType) * teenagersDiscount * values.numChildren * values.numNights
    const insuranceCost = values.insurance ? (nightsCost + teenagersCost) * 0.1 : 0

    values.total = nightsCost + teenagersCost + insuranceCost
  }, [values.numAdults, values.numTeenagers, values.roomType, values.numNights, values.insurance])

  return (
    <>
      <p className={cls.title}>Расчет стоимости</p>
      <div className={cls.field}>
        <p className={cls.field__name}>Количество взрослых</p>
        <Input
          id='numAdults'
          className={cls.field__input}
          value={values.numAdults}
          onChange={handleChange}
          onBlur={handleBlur}
          type='number'
          min={1}
          error={touched.numAdults && Boolean(errors.numAdults)}
          helperText={errors.numAdults}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Количество детей от 5 до 12 лет</p>
        <Input
          id='numTeenagers'
          className={cls.field__input}
          value={values.numTeenagers}
          onChange={handleChange}
          onBlur={handleBlur}
          type='number'
          min={0}
          error={touched.numTeenagers && Boolean(errors.numTeenagers)}
          helperText={errors.numTeenagers}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Количество детей до 5 лет</p>
        <Input
          id='numChildren'
          className={cls.field__input}
          value={values.numChildren}
          onChange={handleChange}
          onBlur={handleBlur}
          type='number'
          min={0}
          error={touched.numChildren && Boolean(errors.numChildren)}
          helperText={errors.numChildren}
        />
      </div>
      <div className={classNames(cls.field, [cls.fieldStart])}>
        <p className={cls.field__name}>Тип номера</p>
        <div className={cls.field__radioGroup}>
          <Radio
            id='roomType'
            onChange={handleChange}
            value='Эконом'
            label='Эконом'
            checked={values.roomType === 'Эконом'}
          />
          <Radio
            id='roomType'
            onChange={handleChange}
            value='Стандарт'
            label='Стандарт'
            checked={values.roomType === 'Стандарт'}
          />
          <Radio
            id='roomType'
            onChange={handleChange}
            value='Люкс'
            label='Люкс'
            checked={values.roomType === 'Люкс'}
          />
        </div>
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Количество ночей</p>
        <Input
          id='numNights'
          className={cls.field__input}
          value={values.numNights}
          onChange={handleChange}
          onBlur={handleBlur}
          type='number'
          min={1}
          error={touched.numNights && Boolean(errors.numNights)}
          helperText={errors.numNights}
        />
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Страховка</p>
        <div className={cls.field__checkbox}>
          <Checkbox id='insurance' onChange={handleChange} />
        </div>
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Итого</p>
        <div className={cls.field__total}>{values.total} руб.</div>
      </div>
    </>
  )
}
