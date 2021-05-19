import { Link } from "react-router-dom"
import Spacer from "../components/Spacer.js"
import '../styles/notfound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <Spacer />
            <div>
                <h2>Sorry!</h2>
                <h3>404 Page Not Found</h3>
                <p>
                    <span>Click <Link to="/" >here</Link> to go back</span>
                </p>
            </div>
            <Spacer />
        </div>
    );
}

export default NotFound;