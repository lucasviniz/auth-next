/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
]

/**
 * An array of routes that are accessible to the authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authetication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"


/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"

/**
 * The default redirect path after signout"
 * @type {string}
 */
export const DEFAULT_NO_LOGGED_REDIRECT = "/auth/login"