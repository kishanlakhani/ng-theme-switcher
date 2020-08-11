import { Injectable } from '@angular/core';
import { blue, dark, light, Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  setTheme(theme: string) {
    switch (theme) {
      case 'light':
        this.setActiveTheme(light);
        break;
      case 'dark':
        this.setActiveTheme(dark);
        break;
      case 'blue':
        this.setActiveTheme(blue);
        break;
      default:
        this.setActiveTheme(light);
        break;
    }
  }

  setActiveTheme(theme: Theme): void {
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property, theme.properties[property]
      );
    });
  }
}
