import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Reactivefrm';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]],
        confirmPwd: ['', Validators.required],
        address:this.fb.group({
          street:['',Validators.required],
          city:['',Validators.required],
          zip:['',Validators.required]
        })
      },
      {
        validators: this.passwordMatchCheck
      });
  }

  passwordMatchCheck(formgp: FormGroup) {
    const pwd = formgp.get('password')?.value;
    const confirmpwd = formgp.get('confirmPwd')?.value;
    if (pwd && confirmpwd && pwd !== confirmpwd) {
      formgp.get('confirmPwd')?.setErrors({ passwordMismatch: true });
    } else {
      // Only clear error if there is a value in confirmPwd
      if (formgp.get('confirmPwd')?.value) {
        formgp.get('confirmPwd')?.setErrors(null);
      }
    }
    return null;
  }

  onSubmitFrm() {
    console.log(JSON.stringify(this.myForm.value));
  }
  
    onResetFrm() {
      this.myForm.reset();
    }
}
