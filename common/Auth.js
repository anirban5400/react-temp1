class Auth {

    static authenticateUser(token) {
        window.sessionStorage.setItem('token', token)
    }

    static isUserAuthenticated() {
        return window.sessionStorage.getItem('token') !== null
    }

    static deauthenticateUser() {
        window.sessionStorage.removeItem('token')
    }

    static getToken() {
        return window.sessionStorage.getItem('token')
    }
}

export default Auth