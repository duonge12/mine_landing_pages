import { createBrowserRouter, Outlet } from "react-router";
import NotFoundPage from "./pages/not_found_page/not_found_page";
import IndexPage from "./pages/index_page";
import { path } from "./constants/router_path";

const router = createBrowserRouter([
    {
        path: path.home,
        element: <IndexPage />,
        children: [
            {
                path: path.index,
                element: <></>,
                children: [

                ]
            }
        ],
        errorElement: <NotFoundPage />,
    }
])
export default router