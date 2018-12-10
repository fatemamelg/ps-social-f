import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatTabsModule,
        MatListModule, MatSelectModule, MatOptionModule} from '@angular/material'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import the ng2-file-upload directive so we can add it to our declarations.
import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'
import { AuthInterceptorService } from './authInterceptor.service';
import { MainComponent } from './main/main.component'
import { NewsfeedsComponent } from './newsfeeds.component'
import { AccessoriesComponent } from './accessories.component'
import { CategoryComponent } from './category.component'
import { AddCategoryComponent } from './addCategory.component'


const routes = [
  { path: '', component: MainComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path:'newsfeed', component: NewsfeedsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'post', component: PostComponent},
  { path: 'category/:id', component: CategoryComponent },
  { path: 'addcategory', component: AddCategoryComponent },
]

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent,
    RegisterComponent, 
    LoginComponent, 
    UsersComponent, 
    ProfileComponent,
    PostComponent,
    MainComponent,
    NewsfeedsComponent, AccessoriesComponent, 
    CategoryComponent, AddCategoryComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,

    MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule, 
    MatTabsModule, MatSelectModule, MatOptionModule,

    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ApiService, AuthService, { 
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
