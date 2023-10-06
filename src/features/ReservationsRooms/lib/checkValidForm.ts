import { FormikErrors } from 'formik'
import { IReservationsData } from '../model/types/type'
import { getKeysForm } from './getKeysForm'
export const checkValidForm = (stepIndex: number, errors: FormikErrors<IReservationsData>) => {
  return Object.keys(errors).find((error) => getKeysForm(stepIndex)?.includes(error))
}
