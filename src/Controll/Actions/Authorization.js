
const login = (username, password) => ({
    type: "AUTHORIZATION_LOGIN",
    username
});
const logout = () => ({
    type: "AUTHORIZATION_LOGOUT"
});

export { login, logout };
