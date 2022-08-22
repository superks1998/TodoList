import * as type from "../const/ActionTypes";

const initialState = {
    isLoggedIn: false,
    token: "",
    message: "",
    loading: false,
};

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case type.LOGGIN:
            return {
                ...state,
                message: "",
                loading: true,
            };
        case type.LOGGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
                token: action.payload.token,
                username: action.payload.username,
                message: "Logged in success!",
            };
        case type.LOGGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                message: "Logged in failed!",
                loading: false,
            };
        default:
            break;
    }
    return state;
}
