import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  updateUser: any;
  constructor(public http:HttpClient,
    private service:EmployeeService) {
    
    
  }
  editreactiveForm!:FormGroup;

  reactiveForm!:FormGroup;
  currentIndex:any;
  updateData:any[]=[];

  ngOnInit(): void {
    this.reactiveForm=new FormGroup(
      {
        username:new FormControl('',Validators.required),
        place:new FormControl(''),
      year:new FormControl(''),
    eno:new FormControl(''),
  
      }
     )
     
     this.editFormValidations();
     
  }
 
  visible: boolean = false;
  visible1: boolean = false;


  showDialog() {
      this.visible = true;
  }
 

  pushArray:any[]=[];
  

  onSubmit(){

    this.pushArray.push(this.reactiveForm.value)
    
    localStorage.setItem('userstorage', JSON.stringify( this.pushArray) );
    console.log(this.pushArray);
    this.reactiveForm.reset();
    this.visible=false;


  }
editFormValidations(){

  this.editreactiveForm=new FormGroup(
    {
      editusername:new FormControl('',Validators.required),
      editplace:new FormControl(''),
    edityear:new FormControl(''),
  editeno:new FormControl(''),

    }
   )
  
}

  editDialog(user:any,i:any){
    this.visible1 = true;
  
    
    this.editreactiveForm.patchValue(
      {
        editusername:user.username,
        editplace:user.place,
      edityear:user.year,
    editeno:user.eno,
  
      }
     )
     
  console.log(this.editreactiveForm.value);
  this.updateData=this.editreactiveForm.value;

  }
  updatdArray:any[]=[];

  updatet(){
    const editUser=this.editreactiveForm.value;
   const index=this.pushArray.findIndex(
(user)=>user.username === editUser.editusername

);
if(index != -1){
  this.pushArray[index].username = editUser.editusername;
  this.pushArray[index].place = editUser.editplace;
  this.pushArray[index].year = editUser.edityear;
this.pushArray[index].eno = editUser.editeno;

}
this.visible1=false
console.log(editUser);

    }
// delete
deleteRow(i:any){
  this.pushArray.splice(i,1);


}

 }
