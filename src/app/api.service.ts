import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'

@Injectable()

export class ApiService {

    allMessages = []
    messages = []
    users = []
    categories = []
    path = environment.path
    constructor(public http: HttpClient) {}

    getMessages(userId){
        this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
            this.messages = res
        })
    }

    getAllMessages(){
        this.http.get<any>(this.path + '/posts/').subscribe(res => {
            this.allMessages = res
        })
    }

    postMessage(postData){
        this.http.post<any>(this.path + '/posts', postData).subscribe(res => {
        })
    }

    getUsers(){
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res
        })
    }

    getCategories(id){
        this.http.get<any>(this.path + '/categories' + id).subscribe(res => {
            this.users = res
        })
    }

    postCategory(postCat){
        this.http.post<any>(this.path + '/categories', postCat).subscribe(res => {
        })
    }

    getProfile(id){
        return this.http.get(this.path + '/profile/' + id)
    }


}