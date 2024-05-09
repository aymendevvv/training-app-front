import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = 'dark';


  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  getTheme(){
    return this.activeTheme;
  }

  setTheme(theme: string){
    if (!isPlatformServer(this.platformId)) {
      let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = theme + '.css';
      }
    }
    this.activeTheme = theme;
  }
}
