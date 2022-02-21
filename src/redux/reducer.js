
import { GET_ALLWEB_DATA } from "./actionTypes";

const initial = {
    we: [],
};

export const wereducer = (store = initial, { type, payload }) => {
    
    switch (type) {
        case GET_ALLWEB_DATA:
            return { ...store, we: payload }
        default:
            return { ...store };
    }
};

