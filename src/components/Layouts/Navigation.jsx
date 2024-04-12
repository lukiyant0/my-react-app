import { Link } from "react-router-dom";

const Navigation = ({ type }) => {
    if ( type === 'login' ) {
        return (
            <p className="text-sm mt-5 text-center">
                Do not have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                    Register
                </Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm mt-5 text-center">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                    Login
                </Link>
            </p>
        );
    }
}

export default Navigation;