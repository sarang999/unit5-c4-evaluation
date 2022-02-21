
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getDataWeb} from "../redux/action";
import "./home.css";
export const Home = () => {
    
    const dispatch = useDispatch();
    const searchData = (e) => {
        const data = e.target.value;
        dispatch(getDataWeb(data));
    }
    return (
        <div className="home">
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="googleimg"  />
            
            <input className="search-box"
                type="search"
                placeholder="Search google"
                onKeyPress={(e) => {
                    searchData(e)
                
                    if (e.key === "Enter") {
                        window.location = "http://localhost:3000/search";
                    }
                }
                }

            />
        </div>
    );
};
