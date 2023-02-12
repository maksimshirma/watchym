export function changeRoutesWithIsLoggedIn(routes, isLoggedIn) {
    const newRoutes = {};
    if (isLoggedIn) {
        newRoutes.user = routes.user;
        newRoutes.editUser = routes.editUser;
        newRoutes.analytics = routes.analytics;
        newRoutes.history = routes.history;
        newRoutes.accaunts = routes.accaunts;
        newRoutes.notFound = routes.notFound;
    } else {
        newRoutes.main = routes.main;
        newRoutes.signIn = routes.signIn;
        newRoutes.signUp = routes.signUp;
        newRoutes.notFound = routes.notFound;
    }
    return newRoutes;
}
