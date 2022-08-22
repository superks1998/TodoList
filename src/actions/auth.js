import { auth } from "../apis";
import { saveToken } from "../utils/localStorageHandler";
import * as type from "../const/ActionTypes";

export const login = (data) => (dispatch) => {
    console.log("Starting login action");
    dispatch({ type: type.LOGGIN });
    auth.login(data)
        .then((resp) => {
            console.log("response", resp);
            // dispatch to store
            // store.dispatch({ type: "LOGIN_SUCCESS" });
            dispatch({
                type: type.LOGGIN_SUCCESS,
                payload: { token: resp.data.token },
            });
            saveToken(resp.data.token);
            // window.location = "/";
        })
        .catch((err) => {
            console.log("error", err);
            dispatch({ type: type.LOGGIN_FAILED });
        });
};
