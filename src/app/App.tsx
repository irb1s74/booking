import { Navigate, Route, Routes } from 'react-router-dom'
import { ReservationsRooms } from 'features/ReservationsRooms'
import { SuccessForm } from 'features/PayRooms'
import { getRoutePay, getRouteReservation } from 'shared/const/router'

export const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path={getRouteReservation()} element={<ReservationsRooms />} />
        <Route path={getRoutePay()} element={<SuccessForm />} />
        <Route path={'*'} element={<Navigate to={getRouteReservation()} />} />
      </Routes>
    </div>
  )
}
