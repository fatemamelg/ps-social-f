import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'messages',
  template: `
    <div *ngFor="let message of apiService.messages">
      <mat-card>
        <img src="https://image.flaticon.com/icons/png/128/1217/1217288.png"/>
        <p>{{message.msg}}</p>
      </mat-card>
    </div>
    `
})
export class MessagesComponent {

  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id

    this.apiService.getMessages(userId)
  }
}
