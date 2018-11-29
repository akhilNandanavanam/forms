import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  nameVal : string;
  mailVal : string;
  phoneVal : string;
  passwordVal: string;
  UserData = new FormGroup({
    name : new FormControl('', Validators.required),
    phone: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('/d{6|7|8|9}/d{9}/')
    ])),
      password : new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
    ])),
    mail : new FormControl('',Validators.compose([
      Validators.required,
      Validators.email
    ]))
  });
 
  constructor() { }

  ngOnInit() {
   
  }
  formVals(){
    console.log('uerdata-->',this.UserData)
    this.nameVal = this.UserData.value.name; 
    console.log(this.nameVal);
    
    this.mailVal = this.UserData.value.mail; 
    console.log(this.mailVal);
    this.phoneVal = this.UserData.value.mail; 
    console.log(this.phoneVal);
    this.passwordVal = this.UserData.value.password; 
    console.log(this.passwordVal);
  } 
}
