import { Component, OnInit } from '@angular/core';
import * as Session from "supertokens-auth-react/recipe/session";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../app.component.css'],
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  callback = window.location.origin;

  public rootId = "rootId";
  public userId = "";
  public session = false;

  ngOnInit() {
      this.getUserInfo();
  }

  async getUserInfo() {
      this.session = await Session.doesSessionExist();
      if (this.session) {
          this.userId = await Session.getUserId();
      }
  }

  async onLogout() {
      await Session.signOut();
      window.location.reload();
  }

  redirectToLogin() {
      window.location.href = "auth";
  }

}
