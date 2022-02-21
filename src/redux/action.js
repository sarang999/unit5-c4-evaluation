import { GET_ALLWEB_DATA } from "./actionTypes";

import axios from "axios";
export const getWebSearchData = (payload) => {
    
    return {
        type: GET_ALLWEB_DATA,
        payload,
    }
};

export const getDataWeb = (data) => (dispatch) =>{

    axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${data}`)
        .then((res) => {
            dispatch(getWebSearchData(res.data));
    })
}

