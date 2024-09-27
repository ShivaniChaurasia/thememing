import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeData: string | null;
  userSelectedTheme: any;
  constructor(@Inject(DOCUMENT) private document: Document) {
    //service for theme
    this.themeData = localStorage.getItem('themeSet');
    // this.userSelectedTheme =  localStorage.getItem('themeKey')
    // const theme = 'default'
    // this.applyTheme(theme);
    // this.applyTheme(this.themeData);
  }
  applyTheme(theme: string | null) {
    if (theme) {
      const themeLink = this.document.getElementById('theme') as HTMLLinkElement;
      if (themeLink) {
        // themeLink.href = `${theme}.css`;
        themeLink.href = `assets/Theme/${theme}.css`;
      }
    }
  }
  changeTheme(theme: string) {
    if (theme) {
      // localStorage.setItem('themeSet', theme);
      this.applyTheme(theme);
    }
  }
}
