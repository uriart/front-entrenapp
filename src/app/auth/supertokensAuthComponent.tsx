import * as React from "react";
import * as SuperTokens from "supertokens-auth-react";
import { canHandleRoute, getRoutingComponent } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";

class SuperTokensReactComponent extends React.Component {
    render() {
        if (canHandleRoute([EmailPasswordPreBuiltUI])) { 
            return getRoutingComponent([EmailPasswordPreBuiltUI]);
        }
        return "Route not found";
    }
}

export default SuperTokensReactComponent;