import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../../_helper/must-match.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' }
  ];


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] , Validators.pattern("[^ @]*@[^ @]*"),],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      language:['', Validators.required],

      acceptTerms: [false, Validators.requiredTrue]
  },
  {
    validator: MustMatch('password', 'confirmPassword')
  })


  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onCheckboxChange(e:any){


  }

  onSubmit(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset(){

  }

    // The JSON array.
    employees: any [] = [
      { 'id': '001', 'name': 'Alpha', 'age': 37 },
      { 'id': '002', 'name': 'Bravo', 'age': 27 },
      { 'id': '003', 'name': 'Charlie', 'age': 29 },
      { 'id': '004', 'name': 'Delta', 'age': 19 },
      { 'id': '005', 'name': 'Echo', 'age': 32 }
  ];

  showID(e:any) {
      alert(e.target.id);
  }


}
