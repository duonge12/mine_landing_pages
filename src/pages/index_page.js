import { Outlet } from "react-router";

import './index.css'
import { Footer, Header } from "./components";
import { GetInTouch } from "../common_components";

const IndexPage = () => {
    return (
        <div className="global_container-0">
            <Header />
            {/* <Outlet />
            <GetInTouch /> */}
            <Footer />
        </div>
    )
}
export default IndexPage;