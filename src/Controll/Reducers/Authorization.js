

const AuthorizationReducer = (state = {}, action) => {
    console.log('AuthorizationReducer:state', state);
    console.log('AuthorizationReducer:action', action);

    return Object.assign({}, state, { isAuthorized: action.login == 'user' });
};

export default AuthorizationReducer;