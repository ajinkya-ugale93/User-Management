import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UsermasterService } from 'src/app/shared/services/usermaster.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
userId;
  constructor(private toaster:ToastrManager,private userMasterService:UsermasterService, public dialogRef: MatDialogRef<DeleteUserComponent>) { }

  ngOnInit(): void {
  }
accept()
{
  debugger
  this.userMasterService.DeleteUser(this.userId).subscribe(status=>
    { 
      
      this.dialogRef.close();
     
      if(status=true)
      {
        
this.toaster.successToastr("User deleted successfully..!","Success")

      }
      else{
        this.toaster.successToastr("User deletion failed. Please try again..!","Error")
      }
      
    });
}
}
