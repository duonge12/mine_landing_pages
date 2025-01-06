import { Link } from "react-router";
import { path } from "../../constants/router_path";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Not found 404!!!!</h1>
            <Link to={path.index}> Go back</Link>
        </div>
    )
}
export default NotFoundPage;