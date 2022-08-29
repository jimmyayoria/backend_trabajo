import { Navigate, Route, Routes } from "react-router-dom"
import { StaffPage,InicioPage,LoginPage, CitasPage } from "../pages"

export const SafelifeRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={ <InicioPage /> } />
          <Route path="/staff" element={ <StaffPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/citas/:id_" element={ <CitasPage /> } />
      </Routes>
    )
  }