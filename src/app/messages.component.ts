import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {

  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id

    this.apiService.getMessages(userId)
  }
}
