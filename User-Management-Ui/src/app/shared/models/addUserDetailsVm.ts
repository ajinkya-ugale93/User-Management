export class AddUserDetailsVm{
    emailId: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    createdBy: string;
    puId: number;
    deptId: number;
    pdId: number;
    userRoles: UsersRoleVm[];
}

export class UsersRoleVm{
    roleId: number;
    roleName: string;
    description: string;
    isAssigned: boolean;
    isChanged: boolean;
}