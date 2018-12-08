import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {

    loginData: any = {}

    constructor(public authService: AuthService, public router: Router){
    }

    post() {
        this.authService.loginUser(this.loginData).subscribe(
            res => {
                this.authService.saveToken(res.token)
            },
            error => {
                if(error.status == 401) this.authService.isError = true
            }
        )
    }
}

