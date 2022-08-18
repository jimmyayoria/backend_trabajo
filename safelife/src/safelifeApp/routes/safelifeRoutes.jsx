import { Navigate, Route, Routes } from "react-router-dom"
import { InicioPage } from "../pages/inicioPage"

export const SafelifeRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={ <InicioPage /> } />
  

      </Routes>
    )
  }