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
      {/* ⁡⁣⁢⁣ Indkapsler hele appen i BrowserRouter for at aktivere klient-side routing. ⁡ */}
      <BrowserRouter>
        {/* ⁡⁣⁢⁣ Definerer appens ruter ved hjælp af Routes til at gruppere og Route til at definere sti og den komponent, der skal renderes. ⁡⁡ */}
        <Routes>
          {/* ⁡⁣⁢⁣ Route med path="/" definerer rodstien, som bruger MainLayout-komponenten som en wrapper for andre sider. ⁡ */}
          <Route path="/" element={<MainLayout />}>
            {/* ⁡⁣⁢⁣          Index route render automatisk HomePage for rodstien. ⁡ */}
            <Route index element={<HomePage />} />
            {/* ⁡⁣⁢⁣   Definerer ruter for de andre sider i appen. Hver sti er knyttet til en specifik sidekomponent. ⁡ */}
            <Route path="/login" element={<Login />} />
            <Route path="/hotel" element={<HotelDestinationPage />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            {/* ⁡⁣⁢ ⁡⁣⁢⁣Rute til at håndtere ukendte URL'er, render en fejlside.⁡ ⁡ */}
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
