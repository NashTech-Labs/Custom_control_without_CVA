import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customForm';

  contactForm!: FormGroup;

//create from fields
  fields: any[] =
  [
    {
      label: 'Name',
      key: 'fullName',
      type: 'text',
      fieldType: 'input',
      value: '',
      placeholder:'Enter your name',
      validations: [
        { name: 'Required' },
        { name: 'Min Length', value: 4 },
        { name: 'Max Length', value: 25 },
      ],
    },
    {
      label: 'Email',
      key: 'email',
      type: 'email',
      fieldType: 'input',
      value: '',
      placeholder:'xyz@gmail.com',
      validations: [
        { name: 'Required' },
        { name: 'Email' },
      ],
    },
    {
      label: 'Age',
      key: 'age',
      type: 'number',
      fieldType: 'input',
      value: '',
      placeholder:'Enter your age',
      validations: [
        { name: 'Required' },
        { name: 'Min value', value: 18 },
        { name: 'Max value', value: 45 },
      ],
    },
    {
      label: 'Gender',
      key: 'gender',
      type: 'radio',
      fieldType: 'radio',
      value: "Male",
      values:["Male","Female","Others"],
      validations: [
      ],
    },
    {
      label: 'Studio',
      key: 'studio',
      type: 'select',
      fieldType:'select',
      value: "",
      values:["Java","UI/UX","DevOps","Scala"],
      multiple:false,
      validations: [
      ],
    },
    {
      label: 'Address',
      key: 'addess',
      type: 'textarea',
      fieldType: 'textarea',
      value: "",
      validations: [
      ],
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.buildForm(this.fields);
  }

//For Submiting form
  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Form submitted successfully!');
    }
  }

//to Build the form
  buildForm(fields: any) {
    const contactForm = this.fb.group({});
    fields.forEach((field: any) => {
      const control = this.fb.control(
        field.value,
        this.addValidators(field.validations)
      );

      contactForm.addControl(field.key, control);
    });
    return contactForm;
  }


//To ADD Validations
  addValidators(validations: any) {
    let validators = [];
    for (let valid of validations) {
      if (valid.name === 'Min Length') {
        validators.push(Validators.minLength(valid.value));
      } else if (valid.name === 'Max Length') {
        validators.push(Validators.maxLength(valid.value));
      } else if (valid.name === 'Required') {
        validators.push(Validators.required);
      } else if (valid.name === 'Email') {
        validators.push(Validators.email);
      }
      else if (valid.name === 'Min value') {
        validators.push(Validators.min(valid.value));
      }
      else if (valid.name === 'Max value') {
        validators.push(Validators.max(valid.value));
      }
    }
    return validators;
  }
}
