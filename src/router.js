import { createBrowserRouter, Outlet } from "react-router";
import NotFoundPage from "./pages/not_found_page/not_found_page";
import IndexPage from "./pages/index_page";
import { path } from "./constants/router_path";
import { HomePage } from "./pages/home_page/home_page";

const router = createBrowserRouter([
    {
        path: path.index,
        element: <IndexPage />,
        children:[{ 
            path: path.index,
            element: <HomePage />,
            }
        ],
        errorElement: <NotFoundPage />,
    }
])
export default router