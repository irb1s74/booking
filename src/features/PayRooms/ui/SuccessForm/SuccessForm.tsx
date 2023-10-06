import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'shared/ui/Button'
import { getRouteReservation } from 'shared/const/router'
import SuccessIcon from 'shared/assets/icons/successIcon.svg'
import cls from './SuccessForm.module.scss'

export const SuccessForm = memo(() => {
  const navigate = useNavigate()

  const handleToReservation = () => {
    navigate(getRouteReservation())
  }

  return (
    <div className={cls.successForm}>
      <div className={cls.successForm__icon}>
        <SuccessIcon />
      </div>
      <p className={cls.successForm__text}>Заказ успешно оплачен.</p>
      <Button onClick={handleToReservation} fullWidth={true} className={cls.successForm__btn}>
        Забронировать еще
      </Button>
    </div>
  )
})
