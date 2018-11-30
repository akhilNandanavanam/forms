import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  
  nameVal : boolean;
  mailVal : boolean = true;
  phoneVal : boolean;
  passwordVal: boolean;
  UserData = new FormGroup({
    name : new FormControl('', Validators.required),
    phone: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[7|8|9][0-9]{9}')
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
    console.log('userdata-->',this.UserData);
    if(this.UserData.controls.mail.status === 'INVALID'){
      this.mailVal =  false;
      
    }
    else if(this.UserData.controls.mail.status === 'VALID'){
      this.mailVal =  true;
      
    }
    if(this.UserData.controls.name.status === 'INVALID'){
      this.nameVal =  false;
    }
    else if(this.UserData.controls.name.status === 'VALID'){
      this.nameVal =  true;
    }
    if(this.UserData.controls.phone.status === 'INVALID'){
      this.phoneVal =  false;
    }
    else if(this.UserData.controls.phone.status === 'VALID'){
      this.phoneVal =  true;
    }
    if(this.UserData.controls.phone.status === 'INVALID'){
      this.phoneVal =  false;
    }
    else if(this.UserData.controls.phone.status === 'VALID'){
      this.phoneVal =  true;
    }
    if(this.UserData.controls.password.status === 'INVALID'){
      this.passwordVal =  false;
    }
    else if(this.UserData.controls.password.status == 'VALID'){
      this.passwordVal =  true;
    }
    
    
  } 
  }
