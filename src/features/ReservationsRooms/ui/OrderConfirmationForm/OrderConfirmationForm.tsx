import { memo } from 'react'
import { IReservationsData } from '../../model/types/type'
import cls from './OrderConfirmationForm.module.scss'
import classNames from 'classnames'

interface OrderConfirmationFormProps {
  values: IReservationsData
}

export const OrderConfirmationForm = memo((props: OrderConfirmationFormProps) => {
  const { values } = props
  return (
    <>
      <p className={cls.title}>Подтверждение заказа</p>
      <div className={cls.field}>
        <p className={classNames(cls.field__name, cls.field__nameBold)}>
          {values.name}
          &nbsp;
          {values.surname}
          {values.patronymic}
        </p>
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>{values.phoneNumber}</p>
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Номер «{values.roomType}» на 10 ночей</p>
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>
          {values.numAdults} взрослых, {values.numTeenagers} ребенка от 12 лет и &nbsp;
          {values.numChildren} ребенок младше 12 лет
        </p>
      </div>
      <div className={cls.field}>
        <p className={cls.field__name}>Страховка {values.insurance ? 'не' : ''} включена </p>
      </div>
      <div className={cls.total}>
        <p className={cls.total__name}>
          К оплате <b>{values.total}</b>
        </p>
      </div>
    </>
  )
})
