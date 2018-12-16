import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {


    constructor(public apiService: ApiService, public router: Router, public route: ActivatedRoute){ }

    category

    ngOnInit() {
        var id = this.route.snapshot.params.id
        this.apiService.getCategoryMessages(id)
    }
    
}

