import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetapiService } from '../service/getapi.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: HttpClient, private router: Router) {}

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        fullname: [''],
        email: [''],
        password: [''],
        mobile: [''],
      })
  }
  signUp(){
    this.authService.post<any>('http://localhost:3000/tasks',this.signupForm.value).subscribe(res=>{
      alert("Success Signup");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err =>{
      alert("Error Signup");
    }) 
  }

}
