import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  template: `
  <head>
    <link type="stylesheet/css" src="app.component.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </head>
  <body>
    <mat-toolbar>
      <h1 style="font-family: Brush Script MT, Brush Script Std, cursive">Handmade Store</h1>
      
      <!--<button mat-button routerLink="/users">Users</button>-->
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/">Home</button>

      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
      <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  </body>
  `,
  styleUrls: ['/app.component.css',
              '../../node_modules/bootstrap/dist/css/bootstrap.min.css', 
              './main/main.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService){}

  title = 'Handmade Store';


}
