
import "./nav.css";
import { SearchPage } from "./searchpage";
import { Link } from "react-router-dom";
export const Navigation = () => {
    
    return (
        <div>
        <div id="navbar">
            
                    <Link to="/">
                    <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="googlesearch" />
                    </Link>
            <input type="search"  placeholder="Please enter something for search..."/>
            <button className="search">Search</button>

            
            </div>
            <SearchPage/>
            </div>

    );
};
