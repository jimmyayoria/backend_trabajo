
import { NavBar, Footer } from '../components';
import '../../assets/css/index.css';

export const SafelifeLayout = ({ children }) => {

    console.log(children);

    return (
        <>
            <NavBar/>

            {children}

            <Footer/>
        </>

    )

}