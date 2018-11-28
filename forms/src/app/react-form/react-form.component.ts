import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  user_data = new FormGroup({
    name: new FormControl('', Validators.required),
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
 
  constructor(private formGroup : FormGroup) { }

  ngOnInit() {
   
  }

}
