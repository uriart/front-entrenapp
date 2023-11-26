import { Component } from "@angular/core";

import * as SuperTokens from "supertokens-auth-react";
import { SuperTokensConfig } from "src/config";

import { Router } from '@angular/router';


SuperTokens.init(SuperTokensConfig);

@Component({
    selector: "app-root",
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router) {}

    title = "entrenapp";

    shouldShowBar(): boolean {
        return this.router.url !== '/auth';
      }
}

