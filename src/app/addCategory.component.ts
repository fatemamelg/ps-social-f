import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'addCategory',
  template: `

  <mat-card>
        <mat-card-header>
            <mat-card-title><h4>New Post</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field style="width: 100%">
                    <textarea [(ngModel)]="postCat.name" name="Add New Category" matInput placeholder="Add New Category"></textarea>
                </mat-form-field>
                <br />
                
                <button (click)="post()" mat-raised-button color="primary">Post</button>
            </form>
        </mat-card-content>
    </mat-card>
  
  `
})
export class AddCategoryComponent {

    postCat: any = {}

    constructor(public apiService: ApiService, public router: Router){
    }

    post() {
        this.apiService.postCategory(this.postCat)
    }
}

