import { Component, OnInit } from '@angular/core';
import { Model1 } from './model1';
 

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  user:any={};
  constructor() { }

  ngOnInit() {
   console.log(this.user);
  }
  consoleLogs(){
    console.log(this.user);
  }

}
