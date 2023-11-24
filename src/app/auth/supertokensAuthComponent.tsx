import * as React from "react";
import * as SuperTokens from "supertokens-auth-react";
import { canHandleRoute, getRoutingComponent } from "supertokens-auth-react/ui";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";

class SuperTokensReactComponent extends React.Component {
    render() {
        if (canHandleRoute([ThirdPartyEmailPasswordPreBuiltUI])) { 
            return getRoutingComponent([ThirdPartyEmailPasswordPreBuiltUI]);
        }
        return "Route not found";
    }
}

export default SuperTokensReactComponent;