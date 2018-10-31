import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'login',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title><h4>Profile</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
        <mat-list role="list">
            <mat-list-item role="listitem">Name: {{profile?.name}}</mat-list-item>
            <mat-list-item role="listitem">Email: {{profile?.email}}</mat-list-item>
            <mat-list-item role="listitem">Description: {{profile?.description}}</mat-list-item>
        </mat-list>
        </mat-card-content>
    </mat-card>

    <mat-card>
        <mat-card-header>
            <mat-card-title><h4>Posts</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <messages></messages>
        </mat-card-content>
    </mat-card>

  `
})
export class ProfileComponent {

    constructor(public apiService: ApiService, public route: ActivatedRoute){ }

    profile

    ngOnInit() {
        var id = this.route.snapshot.params.id
        this.apiService.getProfile(id).subscribe(data => this.profile = data)
    }

}
