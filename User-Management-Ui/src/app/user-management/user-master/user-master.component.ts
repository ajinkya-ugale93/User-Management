import { Component, OnInit, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UserDetailsVM } from 'src/app/shared/models/usermaster';
import { UsermasterService } from 'src/app/shared/services/usermaster.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {
  displayedColumnsForUsersData: string[] = ['FName','LName','email', 'Department','isAdmin','action'];
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  users:UserDetailsVM[];
  filteredUsers: UserDetailsVM[];
  
  activeUsers: number=0;
  deactiveUsers: number=0;
  disabledUserList: UserDetailsVM[];
  isPopoverHidden:boolean=true;
userDetails;
  constructor(private userMasterService:UsermasterService,public dialog: MatDialog) { }

  ngOnInit() {
    
    this.userMasterService.GetAllUsers().subscribe(allusers => {
      this.users = allusers;  
      debugger
      //dummy data for use if db api is not available
      if(allusers=="e" || allusers==null)
      {
        this.users=[{uid:1,fname:"Ajinkya",lname:"Ugale",email:"ajinkya.ugale93@gmail.com", departmentMasterId:1,userID:"ajinkya.ugale",mname:null,password:null,isAdmin:true,isActive:true},
        {uid:1,fname:"Jhon",lname:"qas",email:"jhon@gmail.com", departmentMasterId:3,userID:"jhon.qas",mname:null,password:null,isAdmin:true,isActive:true},
        {uid:2,fname:"Bhushan",lname:"xyz",email:"bhushan@gmail.com", departmentMasterId:4,userID:"bhushan.xyz",mname:null,password:null,isAdmin:false,isActive:false},
        {uid:3,fname:"chetan",lname:"efg",email:"chetan@gmail.com", departmentMasterId:2,userID:"Chetan.efg",mname:null,password:null,isAdmin:true,isActive:true},
        {uid:4,fname:"shan",lname:"bnm",email:"shan@gmail.com", departmentMasterId:1,userID:"shan.bnm",mname:null,password:null,isAdmin:false,isActive:true},
        {uid:5,fname:"alex",lname:"klj",email:"alex@gmail.com", departmentMasterId:5,userID:"alex.klj",mname:null,password:null,isAdmin:true,isActive:false}]
      }
     
      this.activeUsers = this.users.filter(u => u.isActive == true).length;
      this.disabledUserList = this.users.filter(u => u.isActive !== true);
      this.deactiveUsers = this.disabledUserList.length;
      this.userDetails = new MatTableDataSource(this.users);
      this.userDetails.paginator=this.paginator.toArray()[0];
      if(this.deactiveUsers>0)
      {
        this.isPopoverHidden =false;
      }
      this.filteredUsers = this.users  
    },
    error => console.log(error)
    );

  

  
  }
  applyFilterForUsersData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userDetails.filter = filterValue.trim().toLowerCase();
}
 
 
  
  searchUser(events:any){
    if(events == "")
    this.filteredUsers = this.users
    else
    this.filteredUsers = this.users.filter(u => u.fname.toLowerCase().includes(events.toLowerCase()) || u.lname.toLowerCase().includes(events.toLowerCase()) || u.email.toLowerCase().includes(events.toLowerCase()))    
  }


  openAddUserDialog()
  {   
   
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '60%';
    dialogConfig.height='480px'
    
   
    const dialogRef = this.dialog.open(AddUserComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openEditUserDialog(e: any,userId)
  {   
    e.stopPropagation();
   
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '60%';
    dialogConfig.height='480px'
    
    
    const dialogRef = this.dialog.open(EditUserComponent,dialogConfig);
    dialogRef.componentInstance.userId=userId;
  
  }
  public openConfirmationDialog(userId) {
    
    const dialogRef = this.dialog.open(DeleteUserComponent);
    dialogRef.componentInstance.userId=userId;
    dialogRef.afterClosed().subscribe(result => {
      
       
        }); 
    
    
   
  }
}
