import * as type from "../const/ActionTypes";

const initialState = {
    list: {
        users: [],
        total: 0,
        loading: false,
    },
    addUser: {
        loading: false,
        success: false,
        message: "",
    },
    getUser: {
        user: null,
        loading: false,
        success: false,
        message: "",
    },
    updateUser: {
        loading: false,
        success: false,
        message: "",
    },
    deleteUser: {
        loading: false,
        success: false,
        message: "",
    },
};

export default function usersReducer(state = initialState, action = {}) {
    console.log("ACTION", action);
    switch (action.type) {
        case type.FETCH_USERS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true,
                },
            };
        case type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    users: action.payload.users,
                    total: action.payload.total,
                },
            };
        case type.FETCH_USERS_FAILED:
            return {
                ...state,
                list: {
                    ...state.list,
                    list: {
                        ...state.list,
                        loading: false,
                        users: [],
                    },
                },
            };
        case type.ADD_USER:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: true,
                    success: false,
                },
            };
        case type.ADD_USER_SUCCESS:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: false,
                    success: true,
                    message: action.payload.message,
                },
            };
        case type.ADD_USER_FAILED:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: false,
                    success: false,
                    message: action.payload.message,
                },
            };
        case type.GET_USER:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: true,
                    success: false,
                },
            };
        case type.GET_USER_SUCCESS:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    success: true,
                    message: action.payload.message,
                    user: action.payload.user,
                },
            };
        case type.GET_USER_FAILED:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    success: false,
                    message: action.payload.message,
                },
            };
        case type.UPDATE_USER:
            return {
                ...state,
                updateUser: {
                    ...state.updateUser,
                    loading: true,
                    success: false,
                },
            };
        case type.UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUser: {
                    ...state.updateUser,
                    loading: false,
                    success: true,
                    message: action.payload.message,
                },
            };
        case type.UPDATE_USER_FAILED:
            return {
                ...state,
                updateUser: {
                    ...state.updateUser,
                    loading: false,
                    success: false,
                    message: action.payload.message,
                },
            };
        case type.DELETE_USER:
            return {
                ...state,
                deleteUser: {
                    ...state.deleteUser,
                    loading: true,
                    success: false,
                },
            };
        case type.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUser: {
                    ...state.deleteUser,
                    loading: false,
                    success: true,
                    message: action.payload.message,
                },
            };
        case type.DELETE_USER_FAILED:
            return {
                ...state,
                deleteUser: {
                    ...state.deleteUser,
                    loading: false,
                    success: false,
                    message: action.payload.message,
                },
            };
        default:
            break;
    }
    return state;
}
