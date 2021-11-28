export class UserMaster{
    ID: number;
    UserID: string;
    Name: string;
    Password: string;
    Email: string;
    IsActive: boolean;
    CreatedBy: string;
    CreatedDate: Date;
    ModifiedBy: string;
    ModifiedDate: Date;
}
export class UserDetailsVM
{
    uid : number;
    userID :string;
    fname :string;
    mname :string;
    lname :string;
    password :string;
    email :string;
    isAdmin :boolean
    departmentMasterId :number
    isActive:boolean;
}
