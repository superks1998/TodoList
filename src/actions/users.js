import { users } from "../apis";
import * as type from "../const/ActionTypes";

export const fetchUsers = (data) => (dispatch) => {
    dispatch({ type: type.FETCH_USERS });
    users
        .fetchUsers(data)
        .then((resp) => {
            console.log("response", resp);
            dispatch({
                type: type.FETCH_USERS_SUCCESS,
                payload: { users: resp.data.data, total: resp.data.total },
            });
        })
        .catch((err) => {
            console.log("error", err);
            dispatch({ type: type.FETCH_USERS_FAILED });
        });
};

export const addUser = (data) => (dispatch) => {
    dispatch({ type: type.ADD_USER });
    console.log(data);
    users
        .addUser(data)
        .then((resp) => {
            console.log("response", resp);
            dispatch({
                type: type.ADD_USER_SUCCESS,
                payload: { message: "Add user success!" },
            });
        })
        .catch((err) => {
            console.log("error", err);
            dispatch({
                type: type.ADD_USER_FAILED,
                payload: { message: "Add user failed!" },
            });
        });
};

export const getUser = (id) => (dispatch) => {
    dispatch({ type: type.GET_USER });
    users
        .getUser(id)
        .then((resp) => {
            console.log("response", resp);
            dispatch({
                type: type.GET_USER_SUCCESS,
                payload: { user: resp.data.user, message: "Get user success!" },
            });
        })
        .catch((err) => {
            console.log("error", err);
            dispatch({
                type: type.GET_USER_FAILED,
                payload: { message: "Get user failed!" },
            });
        });
};

export const updateUser = (id, data) => (dispatch) => {
    dispatch({ type: type.UPDATE_USER });
    users
        .updateUser(id, data)
        .then((resp) => {
            console.log("response", resp);
            dispatch({
                type: type.UPDATE_USER_SUCCESS,
                payload: {
                    message: "Update user success!",
                },
            });
        })
        .catch((err) => {
            console.log("error", err);
            dispatch({
                type: type.UPDATE_USER_FAILED,
                payload: { message: "Update user failed!" },
            });
        });
};

export const deleteUser = (id) => (dispatch) => {
    dispatch({ type: type.DELETE_USER });
    users
        .deleteUser(id)
        .then((resp) => {
            console.log("response", resp);
            dispatch({
                type: type.DELETE_USER_SUCCESS,
                payload: {
                    message: "Delete user success!",
                },
            });
        })
        .catch((err) => {
            console.log("error", err);
            dispatch({
                type: type.DELETE_USER_FAILED,
                payload: { message: "Delete user failed!" },
            });
        });
};
