import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { FormsModule, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'newsfeeds',
  templateUrl: 'newsfeeds.component.html'
})
export class NewsfeedsComponent {
   
  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    this.apiService.getAllMessages()
  }

}
