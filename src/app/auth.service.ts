import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { isError } from 'util';

//import { userInfo } from 'os';
import { UsersComponent } from './users.component';

@Injectable()
export class AuthService {
    messages = []
    isError = false
    errorWithEmail = false
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
        return this.http.post<any>(this.path + '/register', registerData)
    }

    loginUser(loginData){
        return this.http.post<any>(this.path + '/login', loginData)
    }

    saveToken(token) {
        this.isError = false
        localStorage.setItem(this.TOKEN_KEY, token)
    }

}