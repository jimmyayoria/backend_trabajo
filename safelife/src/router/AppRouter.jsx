import { Navigate, Route, Routes } from 'react-router-dom';

import {SafelifeRoutes} from '../safelifeApp/routes/safelifeRoutes'


export const AppRouter = () => {

    const status = 'authenticated';

    return (
        <Routes>
    
                <Route path="/" element={ <SafelifeRoutes />} />

            {/*
              (status === 'authenticated')
               ? <Route path="/*" element={ <SafelifeRoutes /> } />
               : <Route path="/auth/*" element={ <AuthRoutes /> } />
            }
    
            <Route path='/*' element={ <Navigate to='/auth/login' />  } />
    
            {/* Login y Registro */
            
            }
            {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}
    
            {/* JournalApp */}
            {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    
        </Routes>
      )
      
}