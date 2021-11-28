import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { UsersRoleVm } from 'src/app/shared/models/addUserDetailsVm';
import { Departments } from 'src/app/shared/models/departments';
import { UsermasterService } from 'src/app/shared/services/usermaster.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userInfo;
  usersFirstName;
  isAdmin=false;
  usersLastName;
  userEmail;
  submitted;


departmentsValue=null;//: Departments = {id:0, departmentName:"0"};
departments:Departments=null;
  constructor(public router: Router,
    private userMasterService:UsermasterService,
    private formBuilder: FormBuilder,
    public notificationMessages:ToastrManager,public dialogRef: MatDialogRef<AddUserComponent>) {}

  ngOnInit() {
    
    this.userInfo = this.formBuilder.group({
     
      usersFirstName: ['', [Validators.required]],//, Validators.email
      usersLastName: ['', [Validators.required]],//, Validators.minLength(6)
      userEmail: ['', [Validators.required,Validators.email]],//, Validators.minLength(6)
      isAdmin:[],      
      departmentsValue:new FormControl('', Validators.required),
  });
  

  this.userMasterService.GetAllDepartments().subscribe(data => {
    
    this.departments = data.json();    

  });
  }
  get f() { return this.userInfo.controls; }
  OnChange()
  {
    this.departmentsValue.id=this.departmentsValue.id
  }
  AddUser()
  {
    
    this.submitted = true;
        if (this.userInfo.invalid) {
         
              return;
          }
          if (this.departmentsValue==="--Select--") {
            this.notificationMessages.errorToastr("Please Select Department")
                return;
            }
          let addUserDetails = {
            emailId : this.userEmail,
            firstName : this.usersFirstName,
            lastName : this.usersLastName,
            createdBy : this.userEmail,
            isAdmin : this.isAdmin,
            deptId : this.departmentsValue.id,
          };
          
          this.userMasterService.AddUser(addUserDetails).subscribe((data : Response) => {
            if(JSON.stringify(data)!=JSON.stringify(""))
             {
              this.notificationMessages.successToastr('User added successfully !!',"Hello")
              this.dialogRef.close();
            }
             else{
              this.notificationMessages.errorToastr('Entered email id already exists !! Please try again!!',"Hello")
              return;
             }
            });
           
  }

  

}
