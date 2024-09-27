import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})

export class ThemeComponent implements OnInit {
public theme:any= [
  {img: 'assets/images/theme8.png',label: 'Default', id: 'default'},
  {img: 'assets/images/theme7.png',label:'light',id:'light'},
  {img: 'assets/images/theme6.png',label:'Dark',id:'dark'},
  {img: 'assets/images/theme5.png',label:'Elegance',id:'elegance'},
  {img: 'assets/images/theme4.png',label:' Modern Minimalism',id:'modern_minimalism'},
  {img: 'assets/images/theme2.png',label:'Inviting',id:'inviting'},
  {img: 'assets/images/theme1.png',label:'Tech',id:'tech'},
  {img: 'assets/images/image.png',label:'Elegent Dark',id:'elegent_dark'},
]
public selectedIndex:any | undefined;
constructor( private themsService:ThemeService ){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //applying theme 
  selectedImage(event:any){
  this.selectedIndex=event;

console.log(this.selectedIndex);
// this.themsService.changeTheme(event);
// themsService.applyTheme()

  // localStorage.setItem('themeSet',this.selectedIndex)
this.themsService.changeTheme(this.selectedIndex)
//   if(indexTheme){
// const setHrefTheme = 
//   }
}

}
