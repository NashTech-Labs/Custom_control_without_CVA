import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-feild',
  templateUrl:'./text-feild.component.html',
  styleUrls: ['./text-feild.component.css']
})
export class TextFeildComponent {
//To get all fileds
  @Input() custom: any;

//To get form Controls
  @Input() inputField: FormControl = new FormControl('');
}
