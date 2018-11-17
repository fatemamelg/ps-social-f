import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { isError } from 'util';

@Injectable()
export class AuthService {
    messages = []
    isError = false
    path =  environment.path + '/auth'

    TOKEN_KEY = 'token'
    
    constructor(private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY)
    }

    registerUser(registerData){
        this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
            this.saveToken(res.token)
        })
    }

    loginUser(loginData){
        this.http.post<any>(this.path + '/login', loginData).subscribe(
            res => {this.saveToken(res.token)},
            error => {if(error.status == 401)
                {this.isError = true}}
        )
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token)
    }

}