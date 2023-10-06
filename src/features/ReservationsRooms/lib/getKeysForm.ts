export const getKeysForm = (stepIndex: number) => {
  const keys = [
    ['numAdults', 'numTeenagers', 'numChildren', 'roomType', 'numNights', 'insurance', 'total'],
    ['surname', 'name', 'patronymic', 'phoneNumber', 'birthDate'],
  ]
  return keys[stepIndex]
}
