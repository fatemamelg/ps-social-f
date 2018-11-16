import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { FormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

    registerData: any = {}

    constructor(public authService: AuthService){}

    post() {
        console.log(this.registerData)
        this.authService.registerUser(this.registerData)
    }

    getErrorMessage() {
        return this.registerData.email.hasError('required') ? 'You must enter a value' :
            this.registerData.email.hasError('email') ? 'Not a valid email' :
                '';
    }
}
