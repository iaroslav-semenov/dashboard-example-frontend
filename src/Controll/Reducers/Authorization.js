

const Authorization = (state = {}, action) => {
    switch (action.type) {
        case 'AUTHORIZATION_LOGIN':
            return {
                ...state,
                isAuthorized: true,
                username: action.username
            };
        case 'AUTHORIZATION_LOGOUT':
            return {
                ...state,
                isAuthorized: false
            };
        default:
            return state;
    }
};

export default Authorization;