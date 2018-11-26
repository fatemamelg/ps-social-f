import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'messages',
  template: `
    <head>
      <style>
        mat-card {
          display: flex;
        }

        img {
          margin-right: 10px;
          width: 30%;
          height: 20%;
        }
      </style>
    </head>
    <body>
      <div *ngFor="let message of apiService.messages">
        <mat-card>
          <img src="https://selecthealth.org/-/media/selecthealth/article/author/no-author-image.ashx?mh=600&mw=400"/>
          <p>{{message.msg}}</p>
        </mat-card>
      </div>
    </body>
    `
})
export class MessagesComponent {

  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id

    this.apiService.getMessages(userId)
  }
}
