import { Outlet } from "react-router";
import Header from "./components/header";
import './index.css'

const IndexPage = () => {
    return (
        <div className="global_container">
            <Header />
            <Outlet />
        </div>
    )
}
export default IndexPage;