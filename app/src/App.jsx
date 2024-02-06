import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Login } from "./pages/LoginPage/LoginPage";
import { HotelDestinationPage } from "./pages/HotelDestinationPage/HotelDestinationPage";
import { RoomPage } from "./pages/RoomPage/Roompage";
import { ReservationPage } from "./pages/ReservationPage/ReservationPage";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hotel" element={<HotelDestinationPage />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
