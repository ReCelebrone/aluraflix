import { Link } from "react-router-dom";
import './HeaderNavLink.css';

function HeaderNavLink({ url, children }) {
    return (
        <Link to={url} className="link">
            {children}
        </Link>
    );
}

export default HeaderNavLink;
