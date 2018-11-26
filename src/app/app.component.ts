import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['/app.component.css',
              '../../node_modules/bootstrap/dist/css/bootstrap.min.css', 
              './main/main.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, public apiService: ApiService, public router: Router, public route: ActivatedRoute){}

  title = 'Handmade Store';


}
