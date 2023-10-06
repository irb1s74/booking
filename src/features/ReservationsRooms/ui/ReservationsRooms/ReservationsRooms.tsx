import { memo, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

import { Form } from 'shared/ui/Form/Form'
import { Button } from 'shared/ui/Button'
import { getRoutePay } from 'shared/const/router'
import { useMultistepForm } from 'shared/lib/useMultistepForm/useMultistepForm'

import { CostingForm } from '../CostingForm/CostingForm'
import { OrderConfirmationForm } from '../OrderConfirmationForm/OrderConfirmationForm'
import { CustomerDataForm } from '../CustomerDataForm/CustomerDataForm'

import { initialValues } from '../../lib/initialValues'
import { reservationsSchema } from '../../lib/reservationsSchema'
import { getButtonText } from '../../lib/getButtonText'
import { checkValidForm } from '../../lib/checkValidForm'

import classNames from 'classnames'
import cls from './ReservationsRooms.module.scss'

export const ReservationsRooms = memo(() => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: reservationsSchema,
    onSubmit: (values) => {
      new Promise((resolve) => {
        setTimeout(() => {
          alert('Данные отправлены')
          resolve(values)
        }, 1000)
      }).then(() => navigate(getRoutePay()))
    },
    isInitialValid: false,
  })

  const dataFormik = useMemo(
    () => ({
      values: formik.values,
      errors: formik.errors,
      touched: formik.touched,
    }),
    [formik.values, formik.errors, formik.touched],
  )

  const handleChange = useCallback(formik.handleChange, [])
  const handleBlur = useCallback(formik.handleBlur, [])
  const handleSetFieldValue = useCallback(formik.setFieldValue, [])

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <CostingForm
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSetFieldValue={handleSetFieldValue}
      values={dataFormik.values}
      errors={dataFormik.errors}
      touched={dataFormik.touched}
    />,
    <CustomerDataForm
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={dataFormik.values}
      errors={dataFormik.errors}
      touched={dataFormik.touched}
    />,
    <OrderConfirmationForm values={dataFormik.values} />,
  ])

  const handleBack = useCallback(back, [])
  const handleNext = useCallback(next, [])

  return (
    <Form onSubmit={formik.handleSubmit} className={cls.reservationsRooms}>
      <div className={cls.reservationsRooms__header}>
        <h2 className={cls.reservationsRooms__title}>Бронирование номера</h2>
      </div>
      <div className={cls.reservationsRooms__content}>{step}</div>
      <div className={cls.reservationsRooms__footer}>
        {!isFirstStep && (
          <Button onClick={handleBack} color='light'>
            {getButtonText(currentStepIndex)}
          </Button>
        )}
        <Button
          className={classNames(cls.reservationsRooms__nextBtn, {
            [cls.reservationsRooms__nextBtnRight]: isFirstStep,
          })}
          disabled={!!checkValidForm(currentStepIndex, formik.errors)}
          onClick={isLastStep ? formik.submitForm : handleNext}
        >
          {isLastStep ? 'Оплатить' : 'Далее'}
        </Button>
      </div>
    </Form>
  )
})
