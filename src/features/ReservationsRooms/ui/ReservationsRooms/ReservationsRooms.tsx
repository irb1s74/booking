import { memo, useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import { Form } from 'shared/ui/Form/Form'
import { Button } from 'shared/ui/Button'
import { useMultistepForm } from 'shared/lib/useMultistepForm/useMultistepForm'
import { CostingForm } from '../CostingForm/CostingForm'
import { initialValues } from '../../lib/initialValues'
import { reservationsSchema } from '../../lib/reservationsSchema'
import classNames from 'classnames'
import cls from './ReservationsRooms.module.scss'

export const ReservationsRooms = memo(() => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: reservationsSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    isInitialValid: true,
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

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <CostingForm
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={dataFormik.values}
      errors={dataFormik.errors}
      touched={dataFormik.touched}
    />,
  ])
  console.log(formik.errors)

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
            Назад к расчету стоимости
          </Button>
        )}
        <Button
          className={classNames({ [cls.reservationsRooms__nextBtnRight]: isFirstStep })}
          disabled={formik.isValid}
          onClick={handleNext}
        >
          Далее
        </Button>
      </div>
    </Form>
  )
})
