
import "./search.css";
import { Link } from "react-router-dom";
import data from "../db.json";

export const SearchPage = () => {

    return (
        <div id="maindiv">

            <div className="buttons">
                
                <button id="sort-alphabetically" title="ASC">Sort A-Z</button>
                <button id="sort-alphabetically-desc" title="DESC">Sort Z-A</button>
                <button id="sort-by-date">Sort by Date (Asc)</button>
                <button id="sort-by-date-desc">Sort by Date (Desc)</button>
                <button id="sort-by-quality">Sort by quality (Asc)</button>
                <button id="sort-by-quality-desc">Sort by quality (Desc)</button>
                <button id="filter-explicit">Filter Explicit</button>
            </div>
            
            <div id="search-result ">

            </div>

            <div id="detailed-result">

                {data.map((e) => {
                    return (
                        
                        <  >
                            <div  key="e.id">
                            <h4 className="title">{e.title}</h4>
                            
                            <h5 className="desc" >{e.description}</h5>

                            <h5 className="url" >{e.url}</h5>
                            
                            <h3 className="author" >{e.author}</h3>

                            <h3 className="creation-date" >{e.creation_date}</h3>

                            <h5 className="explicit">{e.explicit}</h5>
                            
                            <h3 className="quality">{e.quality}</h3>
                            </div>
                        </>

                        
                    )
                })}

            </div>

        </div>
    )
}
