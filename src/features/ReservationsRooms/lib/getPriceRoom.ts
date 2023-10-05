export const getPriceRoom = (typeRoom: string) => {
  switch (typeRoom) {
    case 'Эконом':
      return 1800
    case 'Стандарт':
      return 2800
    case 'Люкс':
      return 4000
    default:
      return 0
  }
}
