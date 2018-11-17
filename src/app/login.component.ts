import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'login',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title><h4>Login</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field>
                    <input [(ngModel)]="loginData.email" name="Email" matInput placeholder="email" type="email">
                </mat-form-field>
                <br />
                <mat-form-field>
                    <input [(ngModel)]="loginData.pwd" name="Password" matInput placeholder="password" type="password">
                </mat-form-field>
                <br />
                <button (click)="post()" mat-raised-button color="primary">Login</button>
                <br />
                <mat-error *ngIf="authService.isError">Email or Password invalid</mat-error>
            </form>
        </mat-card-content>
    </mat-card>
  `
})
export class LoginComponent {

    loginData: any = {}

    constructor(public authService: AuthService){}

    post() {
        this.authService.loginUser(this.loginData)
    }
}

