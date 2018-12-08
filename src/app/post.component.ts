import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  constructor(public apiService: ApiService){}

  selected = '';
  postData: any = {}

  postMsg = ''
  post() {
      this.postData.tag = this.selected
      this.apiService.postMessage(this.postData)
  }

}
