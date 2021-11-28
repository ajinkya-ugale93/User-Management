import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as glob from '../models/global'; //<== HERE
import { UserDetailsVM } from '../models/usermaster';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermasterService {
  user;
  userIdToEditInfo;
  constructor(private http:Http) { 
    
  }
 
  public UserLogin(userId:string,userPassword):Observable<any>
  {
    return this.http.get(glob.rootURL+"user/UserLogin"
    ,{params: {UserId:userId,UserPassword:userPassword}})
  .pipe(map((response : any) => {
      return response.json();   
  }));
  }

  public AddUser(addUserDetails):Observable<any>
  {
    return this.http.post(glob.rootURL+"user/AddUser", addUserDetails);
  }
  public GetAllUsers():Observable<any>
  {
    
    return this.http.get(glob.rootURL+"user/GetUser").pipe(map((response : any) => {
     return response.json();
    }), catchError((error: Response)=>{
        return "error"
    }));
  }

  GetAllDepartments():Observable<any>{
    return this.http.get(glob.rootURL + 'user/GetDepartments')
   
   
  }
  
  
  private handleError(err: HttpErrorResponse) {
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage=`An error occured: ${err.error.message}`;
    }else{
      errorMessage = `Server returened code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }

  public GetUserInfoToEdit(id):Observable<any>
  {
    return this.http.get(glob.rootURL+"user/GetUserById?Id="+id)
  .pipe(map((response : any) => {
      return response.json();   
  }), catchError((error: Response) =>{
      return "error"      
  }));
  }


public EditUserDetails(user):any
{
  return this.http.post(glob.rootURL+'user/EditUserDetails',user)
}

DeleteUser(userId):any
{
  
  return this.http.get(glob.rootURL + 'user/DeleteUser?userId='+userId).pipe();
}

}
