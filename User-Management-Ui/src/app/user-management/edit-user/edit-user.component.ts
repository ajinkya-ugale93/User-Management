import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Router } from '@angular/router';

import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm, FormArray } from '@angular/forms';
import { UserDetailsVM } from 'src/app/shared/models/usermaster';
import { Departments } from 'src/app/shared/models/departments';
import { UsermasterService } from 'src/app/shared/services/usermaster.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userInfo;
  usersFirstName;
  isAdmin=false;
  usersLastName;
  userEmail;
  submitted;
  isActive;
userId;
  departmentForm: FormGroup;

user:UserDetailsVM;
user1:UserDetailsVM;

departments:Departments=null;
departmentsValue = {id:0, departmentName:"0"};
  constructor(private userMasterService:UsermasterService,private formBuilder: FormBuilder,
    public notificationMessages:ToastrManager,public router:Router,public dialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit() {
    

    
    
    this.userMasterService.GetAllDepartments().subscribe(data => {
      this.departments = data.json();
      
    });
    

    
    this.userMasterService.GetUserInfoToEdit(this.userId).subscribe(allusers => {
      
      this.user1=allusers;
      this.usersFirstName=allusers.fName
      this.userEmail=allusers.email
      this.usersLastName=allusers.lName
      this.isActive=allusers.userIsActive;
      this.isAdmin=allusers.isAdmin;

this.departmentsValue={id:allusers.departmentID,departmentName:allusers.departmentName}
    },
    error => console.log(error)
    );


    this.userInfo = this.formBuilder.group({
     
      usersFirstName: ['', [Validators.required]],//, Validators.email
      usersLastName: ['', [Validators.required]],//, Validators.minLength(6)
      userEmail: ['', [Validators.required,Validators.email]],//, Validators.minLength(6)
      isAdmin:[],
      isActive:[],
      departmentsValue:new FormControl('', Validators.required),
  });
  
  }
  get f() { return this.userInfo.controls; }
  OnChange()
  {
    this.departmentsValue.id=this.departmentsValue.id
  }
  EditUser(form :NgForm)
  {
    debugger
    this.submitted = true;
        if (this.userInfo.invalid) {
         
              return;
          }
          if (this.departmentsValue.departmentName===null) {
            this.notificationMessages.errorToastr("Please Select Department")
                return;
            }
       

            
            let userDetails = {
  uid : this.user1.uid,
    userId :this.user1.userID,
    fname :this.usersFirstName,
    mname :"",
    lname :this.usersLastName,
    email :this.userEmail,
    isAdmin :this.isAdmin,
    departmentID :this.departmentsValue.id,
    userIsActive:this.isActive
}
          
            this.userMasterService.EditUserDetails(userDetails).subscribe((res:Response)=>{
             if(res)
               {
                 this.notificationMessages.successToastr("Record Updated successfully")
               this.dialogRef.close();
               }
               else{
                this.notificationMessages.errorToastr("Record Updation Failed.Try Again!!");
               }
               
            })
          }

         
          get userRolesFormArray() {
            return this.userInfo.controls.chkUserRole as FormArray;
          }

       
          
   }


