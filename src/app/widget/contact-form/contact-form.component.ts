import { Component, OnInit, Renderer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Validator<T extends FormControl> {
  (c:T): {[error: string]:any};
}
function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

@Component({
  selector: 'dashboard-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  clickedOnce: boolean = false;
  errorMessages: object = {
    'name': {
      'blank': 'I need to know who is messaging me!',
      'too-short': 'Can I have an easier to differentiate name?'
    },
    'email': {
      'blank': 'I need to know how to get back to you!',
      'wrong-format': 'Are you sure your email is this format?'
    },
    'message': {
      'blank': 'Um, you wanted to say something?',
      'too-short': 'I don\'t quite get you. Mind explaining further?'
    }
  };
  nameErrorText: string = '';
  emailErrorText: string = '';
  messageErrorText: string = '';

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, validateEmail]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  
  constructor(private renderer: Renderer) { }
  
  ngOnInit() { }

  doLogin(event) {
    this.clickedOnce = true;
    let submitData = this.contactForm.value, 
      submitSuccess = true;
    
    // check name 
    let nameError = this.contactForm.controls['name'].errors;
    if(nameError != null) {
      if(nameError.required) this.nameErrorText = this.errorMessages['name']['blank'];
      if(nameError.minlength) this.nameErrorText = this.errorMessages['name']['too-short'];
      submitSuccess = false;
    } 

    // check email 
    let emailError = this.contactForm.controls['email'].errors;
    if(emailError != null) {
      if(emailError.validateEmail) this.emailErrorText = this.errorMessages['email']['wrong-format'];
      if(emailError.required) this.emailErrorText = this.errorMessages['email']['blank'];
      submitSuccess = false;
    } 

    // check message 
    let messageError = this.contactForm.controls['message'].errors;
    if(messageError != null) {
      if(messageError.required) this.messageErrorText = this.errorMessages['message']['blank'];
      if(messageError.minlength) this.messageErrorText = this.errorMessages['message']['too-short'];
      submitSuccess = false;
    } 

    if(submitSuccess) {
      alert(submitData.name + '<' + submitData.email + '> said, "' + submitData.message + '"');
    }
  }
  
}