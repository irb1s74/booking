export const getButtonText = (stepIndex: number) => {
  switch (stepIndex) {
    case 1:
      return 'Назад к расчету стоимости'
    case 2:
      return 'Назад к данным покупателя'
    default:
      return 'Назад'
  }
}
