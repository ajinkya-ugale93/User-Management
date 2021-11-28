import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { AdminOpretionsComponent } from './admin-opretions/admin-opretions.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            //{ path: '', redirectTo: 'admin', pathMatch: 'full' },
            {path:'',component:AdminOpretionsComponent},
             {path:'user-master',component:UserMasterComponent},
            {path:'add-user',component:AddUserComponent},
           
        ]
    },
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
