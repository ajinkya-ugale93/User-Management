import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserMasterComponent } from './user-master/user-master.component';
import { AdminOpretionsComponent } from './admin-opretions/admin-opretions.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToYesNo } from '../shared/pipes/true-to-yes-no-pipe';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
    imports: [CommonModule, AdminRoutingModule,
        
        
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule
        
    ],
    declarations: [AdminComponent,UserMasterComponent, AdminOpretionsComponent,AddUserComponent,EditUserComponent,ConvertToYesNo, DeleteUserComponent],
    entryComponents: [],
    providers: []
})
export class AdminModule {}
