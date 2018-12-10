import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { FormsModule, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router'

const URL = 'http://localhost:3000/uploads';


@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

    registerData: any = {}
    //declare a property called fileuploader and assign it to an instance of a new fileUploader.
    //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    

    constructor(public authService: AuthService, public router: Router){}

    ngOnInit() {
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are 
        //able to deal with the server response.
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
             console.log("ImageUpload:uploaded:", item, status, response);
         };
     }

    post() {
        console.log(this.registerData)
        this.authService.registerUser(this.registerData).subscribe(
            res => {
                this.authService.saveToken(res.token)
                this.router.navigateByUrl('/')
            }
            ,error => {
                if(error.status == 401){
                    this.authService.isError = true
                    this.authService.logout()
                } 
            }
                   
        )
    }

}
