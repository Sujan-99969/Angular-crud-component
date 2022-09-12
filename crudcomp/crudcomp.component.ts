import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupName, FormGroup } from '@angular/forms';
// import { count } from 'rxjs';

@Component({
  selector: 'app-crudcomp',
  templateUrl: './crudcomp.component.html',
  styleUrls: ['./crudcomp.component.css'],
})
export class CrudcompComponent implements OnInit {
  genderlist = ['Male', 'female', 'others'];
  isedit = false;
  indexSelectedtoEdit;
  formdata = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    mobilenumber: new FormControl(''),
    age: new FormControl(''),
    place: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
  });

  listOfdata = [];

  // constructor() {}

  ngOnInit(): void {}

  Oncancel() {
    this.formdata.reset();
  }
  Onsubmit() {
    this.listOfdata.push(this.formdata.value);
    this.formdata.reset();
    // alertmsg.textContent = "Data added into Table"
    // alert("")
  }
  Onedit(index) {
    this.isedit = true;
    this.formdata.patchValue(this.listOfdata[index]);
    this.indexSelectedtoEdit = index;
  }

  Onsave() {
    this.listOfdata.splice(this.indexSelectedtoEdit, 1);
    this.listOfdata.push(this.formdata.value);
    this.formdata.reset();
    this.isedit = false;
    alert('Data updated');
  }
  Ondelete(index) {
    this.listOfdata.splice(index, 1);
    alert('Data deleted');
  }
}
