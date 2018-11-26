import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  template: `

  <head>
    <style>
        body, h4 {
            text-align: center;
        }
    </style>
    </head>
    <body>
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
    </body>
  `
})
export class LoginComponent {

    loginData: any = {}

    constructor(public authService: AuthService, public router: Router){
    }

    post() {
        this.authService.loginUser(this.loginData).subscribe(
            res => {
                this.authService.saveToken(res.token)
                this.router.navigateByUrl('/')
            },
            error => {
                if(error.status == 401) this.authService.isError = true
            }
        )
    }
}

