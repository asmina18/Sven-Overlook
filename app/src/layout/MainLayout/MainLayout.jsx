import { Nav } from "../../components/Nav/Nav";
import { Header} from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { Outlet} from "react-router-dom";


export const MainLayout =()=>{
    return(
        <>
        <div>
            <Nav/>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
        </>
    )
}