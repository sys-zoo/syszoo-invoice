import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm!:FormGroup
  title = 'Formvalidation';
  Submitted = false;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
     
    this.registerForm = this. FormBuilder.group({
      Name:['',Validators.required]
      })
  }

  onSubmit() { 
    this.Submitted = true

    if(this.registerForm.invalid) {
      return
    }

    alert("success")
  }

}
