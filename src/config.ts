import * as EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

export const SuperTokensConfig = {
    appInfo: {
        appName: "entrenApp",
        apiDomain: "https://uriart.sytes.net/supertokens-backend",
        websiteDomain: "https://uriart.sytes.net/entrenapp",
        apiBasePath: "/supertokens-backend/auth",
        websiteBasePath: "/entrenapp/auth"
    },
    recipeList: [
        EmailPassword.init({
            getRedirectionURL: async (context) => {
                if (context.action === "RESET_PASSWORD") {
                    // called when the user clicked on the forgot password button
                } else if (context.action === "SUCCESS") {
                    // called on a successful sign in / up. Where should the user go next?
                    let redirectToPath = context.redirectToPath;
                    if (redirectToPath !== undefined) {
                        // we are navigating back to where the user was before they authenticated
                        return redirectToPath;
                    }
                    if (context.isNewRecipeUser && context.user.loginMethods.length === 1) {
                        // user signed up
                        return "/entrenapp/home"
                    } else {
                        // user signed in
                        return "/entrenapp/home"
                    }
                }
                // return undefined to let the default behaviour play out
                return undefined;
            }
        }),
        Session.init({
          tokenTransferMethod: "header" // or "cookie"
        })
    ]

};
