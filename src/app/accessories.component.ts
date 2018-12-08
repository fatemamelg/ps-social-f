import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { FormsModule, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'accessories',
  templateUrl: 'accessories.component.html'
})
export class AccessoriesComponent {
   
  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id

    this.apiService.getMessages(userId)
  }

}
