import { Component,Input } from '@angular/core';
import { ApiService } from './api.service'
import { FormsModule, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { FilterPipe } from './filter.pipe'



@Component({
  selector: 'newsfeeds',
  templateUrl: 'newsfeeds.component.html',

})
export class NewsfeedsComponent {
  @Input() name: string = '';
  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    this.apiService.getAllMessages()
  }

}
