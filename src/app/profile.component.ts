import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { ActivatedRoute } from '@angular/router'
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {

    constructor(public apiService: ApiService, public route: ActivatedRoute){ }

    profile

    ngOnInit() {
        var id = this.route.snapshot.params.id
        this.apiService.getProfile(id).subscribe(data => this.profile = data)
    }


}
