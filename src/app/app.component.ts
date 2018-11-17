import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar ngbDropdown #myDrop="ngbDropdown">
      <h1>Handmade Store</h1>
      
      <!--<button mat-button routerLink="/users">Users</button>-->
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/">Home</button>

      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
      <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['/app.component.css', './main/main.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService){}

  title = 'Handmade Store';


}
