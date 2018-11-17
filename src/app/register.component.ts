import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { FormsModule, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'


@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

    registerData: any = {}

    constructor(public authService: AuthService, public router: Router){}

    post() {
        console.log(this.registerData)
        this.authService.registerUser(this.registerData).subscribe(
            res => {
                this.authService.saveToken(res.token)
                this.router.navigateByUrl('/')
            }
            ,error => {
                if(error.status == 401){
                    this.authService.isError = true
                    this.authService.logout()
                } 
            }
                   
        )
    }

}
