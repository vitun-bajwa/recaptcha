import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recaptcha';
  contactForm!: FormGroup;
  public captchaResolved : boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      title: [null, Validators.required],
      phone: [null],
      message: [null, Validators.required],
      recaptcha: [null, Validators.required],
    });
  }

  resolved(captchaResponse: any) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
