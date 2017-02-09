
const loginWithCredentials = (login, password) => ({
    type: "AUTHORIZATION_LOGIN_CREDENTIALS",
    login,
    password
})

export { loginWithCredentials };
