import { Outlet } from "react-router";
import './index.css'
import { Footer, Header } from "./components";


const IndexPage = () => {
    return (
        <div className="global_container-0">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default IndexPage;