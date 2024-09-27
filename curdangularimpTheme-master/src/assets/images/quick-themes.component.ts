import { Component, EventEmitter, Output } from '@angular/core';
import { constants } from '../../constant/constant';
import { ApiService } from '../services/api.service';
import { LoadingSpinnerService } from '../services/loading-spinner.service';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from '../services/theme.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ThemesService } from '../services/themes.service';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-quick-themes',
  templateUrl: './quick-themes.component.html',
  styleUrls: ['./quick-themes.component.scss']
})

export class QuickThemesComponent {
  @Output() closeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  selectedTheme: string = '';
  themeData!: { theme: any; accentColor: string; };
  selectUserTheme: any;
  selectedThemes:any;
  selectedVal: any;
  selectedLabel: any;
  themes: any = [
    {img: 'assets/images/theme8.png',label: 'Default', id: 'default'},
    {img: 'assets/images/theme7.png',label:'light',id:'light'},
    {img: 'assets/images/theme6.png',label:'Dark',id:'dark'},
    {img: 'assets/images/theme5.png',label:'Elegance',id:'elegance'},
    {img: 'assets/images/theme4.png',label:' Modern Minimalism',id:'minimalism'},
    {img: 'assets/images/theme2.png',label:'Inviting',id:'inviting'},
    {img: 'assets/images/theme1.png',label:'Tech',id:'tech'},
    {img: 'assets/images/image.png',label:'Elegent Dark',id:'elegent'},
  ];
  constructor(private apiservice: ApiService,private commonSer:CommonServiceService, private loadSpin: LoadingSpinnerService, private toaster: ToastrService, private themeService: ThemeService,private theme:ThemesService) { }
  ngOnInit() {
   this.selectedVal = this.selectUserTheme
    const storedLabel = localStorage.getItem('label');
    if (storedLabel) {
      this.selectedLabel = storedLabel;
    }
    else{
    this.selectedLabel = 'Light';
  }
}
  public onThemeChange(event: any): void {
    this.loadSpin.show();
    this.selectUserTheme = event
   const theme= {
      "theme": event,
      "accentColor": "white"
    }
    this.apiservice.postingThemeUrl(theme).subscribe({
      next: (res: any) => {
        this.loadSpin.hide();
        this.selectedLabel = event;
        localStorage.setItem('label',this.selectedLabel)
        this.commonSer.selectedLable(this.selectedLabel)
        this.theme.changeTheme(event)
        localStorage.setItem("themeData",event)
        this.closeClicked.emit(false); 
        this.toaster.success(res.message)
      }, error: (err: HttpErrorResponse) => {
        this.toaster.error(err.error.message)
      }
    })
  }
}
